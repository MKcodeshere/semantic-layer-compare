// Playwright port of tools/verify.sh, for machines without gstack browse.
// Renders each design on desktop and mobile, drives the key interactions, and fails on console errors.
// Usage: node tools/verify.mjs [outDir]   (starts its own static server on 8791)
import { createServer } from 'node:http';
import { readFile, mkdir } from 'node:fs/promises';
import { readdirSync, readFileSync } from 'node:fs';
import { join, extname, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const { chromium } = require('playwright');
const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const site = join(root, 'site');
const OUT = process.argv[2] || join(root, 'shots');
await mkdir(OUT, { recursive: true });

const types = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.json': 'application/json', '.svg': 'image/svg+xml', '.png': 'image/png' };
const server = createServer(async (req, res) => {
  const path = decodeURIComponent(new URL(req.url, 'http://x').pathname);
  try {
    const body = await readFile(join(site, path === '/' ? 'index.html' : path));
    res.writeHead(200, { 'content-type': types[extname(path)] || 'application/octet-stream' }).end(body);
  } catch { res.writeHead(404).end(); }
}).listen(8791, '127.0.0.1');
const U = 'http://127.0.0.1:8791';

let fail = 0;
const browser = await chromium.launch();
const page = await browser.newPage();
let errors = [];
page.on('console', (m) => m.type() === 'error' && errors.push(m.text()));
page.on('pageerror', (e) => errors.push(String(e)));

const go = async (url) => { await page.goto(url); await page.waitForLoadState('networkidle'); };
const check = async (name, expr) => {
  let r;
  try { r = await page.evaluate(expr); } catch (e) { r = e.message; }
  if (r === true) console.log(`PASS ${name}`); else { console.log(`FAIL ${name} (${r})`); fail = 1; }
};
const errs = (name) => {
  if (errors.length) { console.log(`FAIL ${name} console: ${errors.slice(0, 3).join(' | ')}`); fail = 1; } else console.log(`PASS ${name} no console errors`);
  errors = [];
};
const shot = (f) => page.screenshot({ path: join(OUT, f) });

for (const p of ['a-guide', 'b-matrix', 'c-map']) {
  await page.setViewportSize({ width: 1440, height: 900 }); await go(`${U}/${p}.html`);
  await shot(`${p}-desktop.png`);
  errs(`${p} desktop`);
  await page.setViewportSize({ width: 390, height: 844 }); await go(`${U}/${p}.html`);
  await check(`${p} mobile has no horizontal page overflow`, 'document.documentElement.scrollWidth <= 392');
  await shot(`${p}-mobile.png`);
}

await page.setViewportSize({ width: 390, height: 844 });
await go(`${U}/c-map.html`);
const ids = await page.evaluate('SL.vendors.map((v) => v.id)');
const wide = [];
for (const id of ids) {
  await page.evaluate((i) => document.querySelector(`.tile[data-id="${i}"]`)?.click(), id);
  if (await page.evaluate('document.documentElement.scrollWidth > 392')) wide.push(id);
}
if (wide.length) { console.log(`FAIL C mobile overflow for: ${wide.join(', ')}`); fail = 1; } else console.log(`PASS C mobile fits for all ${ids.length} platforms`);

await page.setViewportSize({ width: 1440, height: 900 });
await go(`${U}/a-guide.html`);
await check('A renders one chapter per vendor', "document.querySelectorAll('article.ch').length === SL.vendors.length");
await check('A ladder has 5 rungs', "document.querySelectorAll('.rung').length === 5");
for (const w of [1024, 1280, 1440, 1920]) {
  await page.setViewportSize({ width: w, height: 900 });
  await check(`A headline fits 2 lines at ${w}px`, "(h=>Math.round(h.getBoundingClientRect().height/parseFloat(getComputedStyle(h).lineHeight)))(document.querySelector('.hero h1')) <= 2");
}
await page.setViewportSize({ width: 1440, height: 900 });
await page.evaluate("document.getElementById('v-'+SL.vendors[0].id).scrollIntoView()"); await shot('a-guide-chapter.png');

await go(`${U}/b-matrix.html`);
await check('B one row per vendor', "document.querySelectorAll('#grid tbody tr[data-id]').length === SL.vendors.length");
await check('B one cell per vendor and cap', "document.querySelectorAll('#grid .cell').length === SL.vendors.length * SL.caps.length");
await page.evaluate(`document.querySelector('.chip[data-cat="'+SL.vendors[0].category+'"]').click()`);
await check('B category chip filters rows', "document.querySelectorAll('#grid tbody tr[data-id]').length === SL.vendors.filter(v=>v.category===SL.vendors[0].category).length");
await page.evaluate(`document.querySelector('.cell[data-k="metrics"]').click()`);
await check('B cell click opens drawer with evidence', "document.querySelector('#drawer').classList.contains('open') && !!document.querySelector('#drawer .focus')");
await check('B drawer sets deep link hash', "/#[a-z0-9-]+\\/metrics$/.test(location.href)");
await shot('b-matrix-drawer.png');
await go(`${U}/b-matrix.html#snowflake/synonyms`);
await check('B deep link opens drawer on load', "document.querySelector('#drawer').classList.contains('open')");
await go(`${U}/b-matrix.html`);
await page.evaluate(`document.querySelector('[data-sortcap="mcp"]').click()`);
await check('B column sort puts highest level first', "(r=>r[0]>=r[r.length-1])([...document.querySelectorAll('td[data-k=mcp] .cell')].map(c=>+(c.className.match(/lv(\\d)/)||[0,-1])[1]))");

await go(`${U}/c-map.html#snowflake`);
await check('C draws connector paths', "document.querySelectorAll('#links path').length > 2");
await page.evaluate(`document.querySelector('.tile[data-id="postgres"]')?.click()`);
await check('C platform pick updates stage', "document.querySelector('#c1 h2')?.textContent.includes('PostgreSQL') && location.hash==='#postgres'");
await check('C postgres shows add-on layers', "document.querySelectorAll('#c2 .node.addon .chip').length > 0");
await shot('c-map-postgres.png');
await page.evaluate("window.scrollTo(0, document.querySelector('.map').offsetTop - 40)");
await page.hover('#g2 .chip').catch(() => {});
await check('C hover draws links in whole map', "document.querySelectorAll('#clinks path').length > 0");
await shot('c-map-hover.png');
errs('interactions');

const dashed = readdirSync(site).filter((f) => f.endsWith('.html') && /[—–]/.test(readFileSync(join(site, f), 'utf8')));
if (dashed.length) { console.log(`FAIL em or en dash in page markup: ${dashed.join(', ')}`); fail = 1; } else console.log('PASS no em or en dash in page markup');
const dataDash = /[—–]/.test(readFileSync(join(site, 'data.js'), 'utf8').replace(/"code": "(?:[^"\\]|\\.)*"/g, ''));
if (dataDash) { console.log('FAIL em or en dash in data.js text'); fail = 1; } else console.log('PASS no em or en dash in data.js text');

console.log(`shots in ${OUT}`);
await browser.close(); server.close();
process.exit(fail);
