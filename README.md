# Doner Factory Mölndal

Next.js website exported as static HTML for Hostinger Business Web Hosting.

## Local development

Use Node.js 22 and npm (`package-lock.json` is the CI lockfile):

```sh
npm ci
npm run dev
```

## Checks and build

```sh
npm run lint
npm run typecheck
npm test
npm audit --audit-level=high
npm run build
npm run verify:export
```

The price fixture in `tests/fixtures/menu-prices.json` is transcribed from the
restaurant's supplied menu photos. Update it only when a confirmed price list
changes. Burgers with different names and Loaded Fries were not mapped to other
dishes in those photos.

## Automatic deployment

`.github/workflows/deploy.yml` checks pull requests and pushes to `main`.
After all checks pass on `main`, GitHub Actions publishes only the generated
`out/` files to `hostinger-production`. The source branch is never a web root.
The publishing job uses GitHub's short-lived repository token; no hosting
password or private SSH key is stored in Actions.

Hostinger must be connected once:

- Website: `donerfactorymolndal.se`
- Dashboard: Advanced → Git
- Repository: `DhimanKhushal/donerfactorymolndal`
- Branch: `hostinger-production`
- Repository root directory: `/` (the root of that branch)
- Destination: this website's `public_html`
- Automatic deployment: enabled

Hostinger's Git integration copies already-built HTML; do not select `main`,
because that branch contains the Next.js source. After publishing the branch,
Actions waits up to five minutes for Hostinger to serve the source revision and
checks all four public routes. A disconnected Git integration fails this check.

`https://donerfactorymolndal.se/deployment.json` identifies the deployed source
commit and GitHub run. Compare it with the successful workflow run after
Hostinger finishes. If cached pages remain, clear the website cache in hPanel.

You can run **Build and deploy → Run workflow** to republish the current `main`.
To roll back, revert the unwanted source commit on `main`; the same checked
pipeline rebuilds and deploys it. The deployment branch also preserves its
compiled-file history. Existing archives outside `public_html` remain available
as a manual recovery option.
