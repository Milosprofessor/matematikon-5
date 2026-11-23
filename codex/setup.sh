#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "${BASH_SOURCE[0]}")/.."
command -v python3 >/dev/null
command -v node >/dev/null
bash codex/check.sh
printf "%s\n" "No npm dependencies to install."
