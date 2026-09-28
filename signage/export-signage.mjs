/**
 * Export NHVK signage HTML templates to PNG.
 * Uses system Microsoft Edge (no bundled Chromium download).
 * Usage: node export-signage.mjs [width] [height]
 */
import puppeteer from 'puppeteer-core';
import { fileURLToPath } from 'url';
import path from 'path';
import fs from 'fs';

const EDGE_PATH = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const WIDTH = parseInt(process.argv[2] || '6000', 10);
const HEIGHT = parseInt(process.argv[3] || '4000', 10);
const SUFFIX = `${WIDTH}x${HEIGHT}`;

const SIGNS = [
  { html: 'sign-thai.html', out: `sign-thai-${SUFFIX}.png` },
  { html: 'sign-en-fr.html', out: `sign-en-fr-${SUFFIX}.png` },
  { html: 'sign-masterplan.html', out: `sign-masterplan-${SUFFIX}.png` },
];

const outputDir = path.join(__dirname, 'output');
fs.mkdirSync(outputDir, { recursive: true });

const browser = await puppeteer.launch({
  headless: true,
  executablePath: EDGE_PATH,
  args: ['--no-sandbox', '--disable-setuid-sandbox'],
});
const page = await browser.newPage();
await page.setViewport({ width: WIDTH, height: HEIGHT, deviceScaleFactor: 1 });

for (const sign of SIGNS) {
  const filePath = path.join(__dirname, sign.html);
  const fileUrl = `file:///${filePath.replace(/\\/g, '/')}`;
  console.log(`Exporting ${sign.html} → ${sign.out} (${WIDTH}×${HEIGHT})…`);
  await page.goto(fileUrl, { waitUntil: 'networkidle0', timeout: 120000 });
  await page.evaluate(() => document.fonts.ready);
  await new Promise((r) => setTimeout(r, 1500));
  const outPath = path.join(outputDir, sign.out);
  await page.screenshot({ path: outPath, type: 'png', clip: { x: 0, y: 0, width: WIDTH, height: HEIGHT } });
  console.log(`  ✓ ${outPath}`);
}

await browser.close();
console.log('Done.');
