import assert from "node:assert/strict";
import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import path from "node:path";

const root = path.resolve("out");
for (const file of ["index.html", "menu/index.html", "gallery/index.html", "contact/index.html", "404.html", ".htaccess"]) {
  assert.ok(existsSync(path.join(root, file)), `Missing export: ${file}`);
}

let bytes = 0;
let pages = 0;
function visit(directory) {
  for (const entry of readdirSync(directory, { withFileTypes: true })) {
    const file = path.join(directory, entry.name);
    assert.ok(![".git", "node_modules", "package.json"].includes(entry.name) && !entry.name.startsWith(".env"), `Source or credentials in export: ${file}`);
    if (entry.isDirectory()) {
      visit(file);
      continue;
    }
    bytes += statSync(file).size;
    if (!file.endsWith(".html")) continue;
    pages += 1;
    const html = readFileSync(file, "utf8");
    for (const match of html.matchAll(/(?:src|href|poster)="(\/[^"\s]*)"/g)) {
      const url = new URL(match[1].replaceAll("&amp;", "&"), "https://donerfactorymolndal.se");
      if (url.origin !== "https://donerfactorymolndal.se") continue;
      const target = path.resolve(root, `.${decodeURIComponent(url.pathname)}`);
      assert.ok(target === root || target.startsWith(`${root}${path.sep}`), `Invalid path: ${url.pathname}`);
      assert.ok(existsSync(target) || existsSync(`${target}.html`) || existsSync(path.join(target, "index.html")), `Missing link or asset ${url.pathname} in ${file}`);
    }
  }
}
visit(root);
assert.ok(bytes < 50 * 1024 * 1024, "Static export exceeds the 50 MiB budget.");
console.log(`Verified ${pages} HTML pages and their local links/assets; ${(bytes / 1024 / 1024).toFixed(1)} MiB.`);
