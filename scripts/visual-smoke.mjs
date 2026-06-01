import { mkdir } from "node:fs/promises";
import { join } from "node:path";
import { chromium } from "playwright";
import { PNG } from "pngjs";

const baseUrl = process.env.BASE_URL ?? "http://127.0.0.1:3000";
const outputDir = process.env.SMOKE_OUTPUT_DIR ?? "/private/tmp/cyborg-landing-smoke";

const viewports = [
  { name: "desktop", width: 1440, height: 1100, isMobile: false, hasTouch: false },
  { name: "mobile", width: 390, height: 920, isMobile: true, hasTouch: true },
];

function countVisiblePixels(buffer) {
  const image = PNG.sync.read(buffer);
  let visible = 0;

  for (let index = 0; index < image.data.length; index += 4) {
    const red = image.data[index];
    const green = image.data[index + 1];
    const blue = image.data[index + 2];
    const alpha = image.data[index + 3];

    if (alpha > 20 && red + green + blue > 44) {
      visible += 1;
    }
  }

  return visible;
}

await mkdir(outputDir, { recursive: true });

const browser = await chromium.launch({ headless: true });
const results = [];

try {
  for (const viewport of viewports) {
    const context = await browser.newContext({
      viewport: { width: viewport.width, height: viewport.height },
      colorScheme: "dark",
      deviceScaleFactor: viewport.isMobile ? 3 : 1,
      hasTouch: viewport.hasTouch,
      isMobile: viewport.isMobile,
    });
    const page = await context.newPage();

    await page.goto(baseUrl, { waitUntil: "networkidle" });
    await page.waitForSelector("canvas", { state: "visible" });
    await page.waitForTimeout(1600);

    const screenshotPath = join(outputDir, `${viewport.name}.png`);
    await page.screenshot({ path: screenshotPath, fullPage: false });

    const canvases = await page.locator("canvas").evaluateAll((nodes) =>
      nodes.map((node) => {
        const rect = node.getBoundingClientRect();
        return {
          width: Math.round(rect.width),
          height: Math.round(rect.height),
          left: Math.round(rect.left),
          top: Math.round(rect.top),
        };
      }),
    );

    if (canvases.length < 2) {
      throw new Error(`${viewport.name}: expected neural and WebGL canvases`);
    }

    const pixelCounts = [];

    for (const canvas of canvases) {
      const clip = {
        x: Math.max(0, canvas.left),
        y: Math.max(0, canvas.top),
        width: Math.max(1, Math.min(canvas.width, viewport.width - Math.max(0, canvas.left))),
        height: Math.max(1, Math.min(canvas.height, viewport.height - Math.max(0, canvas.top))),
      };
      const buffer = await page.screenshot({ clip });
      pixelCounts.push(countVisiblePixels(buffer));
    }

    const heading = await page.locator("h1").innerText();
    const hasCta = await page.getByRole("link", { name: /get started/i }).isVisible();

    if (!heading.includes("THE FUTURE IS")) {
      throw new Error(`${viewport.name}: hero heading missing`);
    }

    if (!hasCta) {
      throw new Error(`${viewport.name}: primary CTA missing`);
    }

    if (pixelCounts.some((count) => count < 300)) {
      throw new Error(`${viewport.name}: canvas appears blank`);
    }

    results.push({
      viewport: viewport.name,
      screenshotPath,
      canvases,
      pixelCounts,
    });

    await context.close();
  }
} finally {
  await browser.close();
}

console.log(JSON.stringify({ baseUrl, outputDir, results }, null, 2));
