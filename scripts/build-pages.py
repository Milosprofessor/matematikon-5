#!/usr/bin/env python3
"""Build a GitHub Pages copy of MatematikON 5 without touching original source."""
from pathlib import Path
import re
import shutil
import sys

BASE = '/matematikon-5/'
SOURCE = Path('dist')
DEST = Path('_site')
ASSET_PATTERN = re.compile(r'''(?P<quote>["'`])/(?P<name>[a-zA-Z0-9][a-zA-Z0-9._-]*\.(?:html|js|css))(?=[?"'`#])''')


def main() -> None:
    if not (SOURCE / 'index.html').is_file():
        sys.exit('Missing original dist/index.html')
    if DEST.exists():
        shutil.rmtree(DEST)
    shutil.copytree(SOURCE, DEST)
    filenames = {path.name for path in SOURCE.iterdir() if path.is_file()}
    changed = 0
    for file in DEST.iterdir():
        if file.suffix not in ('.html', '.js', '.css'):
            continue
        original = file.read_text(encoding='utf-8')

        def rewrite(match: re.Match) -> str:
            if match.group('name') in filenames:
                return match.group('quote') + BASE + match.group('name')
            return match.group(0)

        output = ASSET_PATTERN.sub(rewrite, original)
        output = output.replace('href="/"', f'href="{BASE}"')
        output = output.replace("location.replace('/')", f"location.replace('{BASE}')")
        if output != original:
            changed += 1
        file.write_text(output, encoding='utf-8')

    (DEST / '.nojekyll').write_text('', encoding='utf-8')
    problems = []
    for file in DEST.iterdir():
        if file.suffix not in ('.html', '.js', '.css'):
            continue
        content = file.read_text(encoding='utf-8')
        if 'href="/"' in content or "location.replace('/')" in content:
            problems.append(f'{file.name}: unconverted home navigation')
        for match in ASSET_PATTERN.finditer(content):
            if match.group('name') in filenames:
                problems.append(f'{file.name}: root-local asset {match.group(0)}')
        for match in re.finditer(r'/matematikon-5/([a-zA-Z0-9._-]+\.(?:html|js|css))', content):
            if match.group(1) not in filenames:
                problems.append(f'{file.name}: missing asset {match.group(1)}')
    if problems:
        sys.exit('\n'.join(problems))
    if len(list(DEST.iterdir())) != len(filenames) + 1:
        sys.exit('Unexpected published file count')
    print(f'GitHub Pages build OK: {len(filenames)} source files, {changed} rewritten files')


if __name__ == '__main__':
    main()
