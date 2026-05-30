#!/bin/bash
cd "$(dirname "$0")"
git add -A
git commit -m "Fix: Auto-scroll carousels for PWAP images + Plan Your Trip featured flag across all languages"
git push
