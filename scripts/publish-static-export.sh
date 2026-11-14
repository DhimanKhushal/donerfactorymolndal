#!/usr/bin/env bash
set -euo pipefail

: "${RUNNER_TEMP:?Run this script in GitHub Actions}"
: "${GITHUB_REPOSITORY:?Missing repository name}"
: "${GITHUB_SHA:?Missing source revision}"

test -s out/index.html
test -s out/.htaccess
test -s out/deployment.json

branch=hostinger-production
remote="https://github.com/${GITHUB_REPOSITORY}.git"
target="${RUNNER_TEMP}/donerfactory-static-export"
mkdir -p "$target"
git -C "$target" init --initial-branch="$branch"
git -C "$target" remote add origin "$remote"

# Preserve deployment history and use an ordinary fast-forward push.
remote_ref=$(git ls-remote --heads "$remote" "refs/heads/$branch")
if [ -n "$remote_ref" ]; then
  git -C "$target" fetch --depth=1 origin "$branch"
  git -C "$target" reset --hard FETCH_HEAD
fi

# Only this disposable runner directory is synchronized; .git is protected.
rsync -a --delete --exclude='.git/' out/ "$target/"
git -C "$target" config user.name 'github-actions[bot]'
git -C "$target" config user.email '41898282+github-actions[bot]@users.noreply.github.com'
git -C "$target" add --all
if git -C "$target" diff --cached --quiet; then
  echo 'The generated site is already published.'
  exit 0
fi
git -C "$target" commit -m "Deploy source ${GITHUB_SHA}"
git -C "$target" push origin "HEAD:refs/heads/$branch"
