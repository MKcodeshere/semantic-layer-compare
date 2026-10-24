#!/bin/sh
# Renders each design on desktop and mobile, drives the key interactions, and fails on console errors.
# Needs the static server: python3 -m http.server 8791 --bind 127.0.0.1 --directory site
B="$HOME/.claude/skills/gstack/browse/dist/browse"
U=http://127.0.0.1:8791
OUT=${1:-/tmp/sl-shots}; mkdir -p "$OUT"
fail=0
check() { r=$($B js "$2" 2>&1 | grep -v -E 'UNTRUSTED' | tail -1); case "$r" in true) echo "PASS $1";; *) echo "FAIL $1 ($r)"; fail=1;; esac; }
errs() { e=$($B console --errors 2>&1 | grep -v -i -E 'untrusted|^[[:space:]]*$|no console (errors|messages)|^[[:space:]]*\(?(none|empty)\)?[[:space:]]*$' | grep -i -E 'error|uncaught' | head -3); [ -z "$e" ] && echo "PASS $1 no console errors" || { echo "FAIL $1 console: $e"; fail=1; }; $B console --clear >/dev/null 2>&1; }

for p in a-guide b-matrix c-map; do
  $B viewport 1440x900 >/dev/null; $B goto "$U/$p.html" >/dev/null; $B wait --load >/dev/null 2>&1
  $B screenshot --viewport "$OUT/$p-desktop.png" >/dev/null
  errs "$p desktop"
  $B viewport 390x844 >/dev/null; $B goto "$U/$p.html" >/dev/null; $B wait --load >/dev/null 2>&1
  check "$p mobile has no horizontal page overflow" "document.documentElement.scrollWidth <= 392"
  $B screenshot --viewport "$OUT/$p-mobile.png" >/dev/null
done

$B viewport 1440x900 >/dev/null
$B goto "$U/a-guide.html" >/dev/null; $B wait --load >/dev/null 2>&1
check "A renders one chapter per vendor" "document.querySelectorAll('article.ch').length === SL.vendors.length"
check "A ladder has 5 rungs" "document.querySelectorAll('.rung').length === 5"
check "A headline fits 2 lines" "(h=>Math.round(h.getBoundingClientRect().height/parseFloat(getComputedStyle(h).lineHeight)))(document.querySelector('.hero h1')) <= 2"
$B js "document.getElementById('v-'+SL.vendors[0].id).scrollIntoView()" >/dev/null; $B screenshot --viewport "$OUT/a-guide-chapter.png" >/dev/null

$B goto "$U/b-matrix.html" >/dev/null; $B wait --load >/dev/null 2>&1
check "B one row per vendor" "document.querySelectorAll('#grid tbody tr[data-id]').length === SL.vendors.length"
check "B one cell per vendor and cap" "document.querySelectorAll('#grid .cell').length === SL.vendors.length * SL.caps.length"
$B js "document.querySelector('.chip[data-cat=\"'+SL.vendors[0].category+'\"]').click()" >/dev/null
check "B category chip filters rows" "document.querySelectorAll('#grid tbody tr[data-id]').length === SL.vendors.filter(v=>v.category===SL.vendors[0].category).length"
$B js "document.querySelector('.cell[data-k=\"metrics\"]').click()" >/dev/null
check "B cell click opens drawer with evidence" "document.querySelector('#drawer').classList.contains('open') && !!document.querySelector('#drawer .focus')"
check "B drawer sets deep link hash" "/#[a-z0-9-]+\\/metrics$/.test(location.href)"
$B screenshot --viewport "$OUT/b-matrix-drawer.png" >/dev/null
$B goto "$U/b-matrix.html#snowflake/synonyms" >/dev/null; $B wait --load >/dev/null 2>&1
check "B deep link opens drawer on load" "document.querySelector('#drawer').classList.contains('open')"
$B goto "$U/b-matrix.html" >/dev/null; $B wait --load >/dev/null 2>&1
$B js "document.querySelector('[data-sortcap=\"mcp\"]').click()" >/dev/null
check "B column sort puts highest level first" "(r=>r[0]>=r[r.length-1])([...document.querySelectorAll('td[data-k=mcp] .cell')].map(c=>+(c.className.match(/lv(\\d)/)||[0,-1])[1]))"

$B goto "$U/c-map.html#snowflake" >/dev/null; $B wait --load >/dev/null 2>&1
check "C draws connector paths" "document.querySelectorAll('#links path').length > 2"
$B js "document.querySelector('.tile[data-id=\"postgres\"]')?.click()" >/dev/null
check "C platform pick updates stage" "document.querySelector('#c1 h2')?.textContent.includes('PostgreSQL') && location.hash==='#postgres'"
check "C postgres shows add-on layers" "document.querySelectorAll('#c2 .node.addon .chip').length > 0"
$B screenshot --viewport "$OUT/c-map-postgres.png" >/dev/null
$B js "window.scrollTo(0, document.querySelector('.map').offsetTop - 40)" >/dev/null
$B hover '#g2 .chip' >/dev/null 2>&1
check "C hover draws links in whole map" "document.querySelectorAll('#clinks path').length > 0"
$B screenshot --viewport "$OUT/c-map-hover.png" >/dev/null
errs "interactions"

grep -l -E '—|–' site/*.html >/dev/null 2>&1 && { echo "FAIL em or en dash in page markup"; fail=1; } || echo "PASS no em or en dash in page markup"
echo "shots in $OUT"; exit $fail
