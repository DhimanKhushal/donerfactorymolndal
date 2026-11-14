import { writeFileSync } from "node:fs";

const { GITHUB_SHA, GITHUB_RUN_ID, GITHUB_REPOSITORY } = process.env;
if (!/^[a-f0-9]{40}$/.test(GITHUB_SHA ?? "")) {
  throw new Error("A GitHub Actions source revision is required.");
}
writeFileSync(
  "out/deployment.json",
  `${JSON.stringify({
    source: GITHUB_SHA,
    run: `https://github.com/${GITHUB_REPOSITORY}/actions/runs/${GITHUB_RUN_ID}`,
  }, null, 2)}\n`,
);
