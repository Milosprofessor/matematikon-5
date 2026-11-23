#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "${BASH_SOURCE[0]}")/.."
exec python3 -m http.server 5175 --bind 0.0.0.0 --directory dist
