#!/bin/zsh
set -e

REPO="$HOME/projy/teachFayaa/"

cd "$REPO"

git add -A

if ! git diff --cached --quiet; then
  git commit -m "docs: auto-save $(date '+%Y-%m-%d %H:%M')"
  git push
fi
