import assert from "node:assert/strict";
import { setTimeout } from "node:timers/promises";

const revision = process.env.GITHUB_SHA;
assert.match(revision ?? "", /^[a-f0-9]{40}$/);
const base = "https://donerfactorymolndal.se";
const deadline = Date.now() + 5 * 60 * 1000;
let deployed = false;
while (Date.now() < deadline) {
  try {
    const response = await fetch(`${base}/deployment.json?revision=${revision}`, {
      signal: AbortSignal.timeout(15000),
      cache: "no-store",
    });
    if (response.ok && (await response.json()).source === revision) {
      deployed = true;
      break;
    }
  } catch {
    // Hostinger may still be switching files or invalidating the CDN cache.
  }
  console.log("Waiting for Hostinger to serve the published revision...");
  await setTimeout(10000);
}
assert.ok(deployed, "Hostinger has not deployed this revision. Check its Git connection and deployment log.");
for (const route of ["/", "/menu/", "/gallery/", "/contact/"]) {
  const response = await fetch(`${base}${route}?revision=${revision}`, {
    signal: AbortSignal.timeout(15000),
    cache: "no-store",
  });
  assert.ok(response.ok, `${route} returned HTTP ${response.status}`);
  assert.ok((await response.text()).includes("Doner Factory"), `${route} did not return the website`);
  console.log(`Live route verified: ${route}`);
}
console.log(`Hostinger is serving source revision ${revision}.`);
