#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "${BASH_SOURCE[0]}")/.."
for file in *.js; do node --check "$file"; done
printf "%s\n" "JavaScript syntax passed."
