// Renders tools/og.html to site/og.png (1200x630), the social preview image.
// Usage: node tools/make-og.mjs   (run after node tools/build-data.mjs)
import { join, dirname } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const { chromium } = require('playwright');
const root = join(dirname(fileURLToPath(import.meta.url)), '..');

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1200, height: 630 } });
await page.goto(pathToFileURL(join(root, 'tools/og.html')).href);
await page.waitForLoadState('networkidle');
await page.evaluate(() => document.fonts.ready);
await page.screenshot({ path: join(root, 'site/og.png') });
await browser.close();
console.log('wrote site/og.png');
