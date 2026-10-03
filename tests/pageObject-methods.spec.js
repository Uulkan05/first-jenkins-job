import { test, expect } from '@playwright/test';

test('Getting the title of the page', async ({ page }) => {
	await page.goto("https://the-internet-5chk.onrender.com/ ");
    await page.waitForTimeout(3000);
	let pageTitle = await page.title();
	console.log(pageTitle);
    await page.getByRole('link', { name: 'A/B Testing' }).click();
    await expect(
      page.getByRole("heading", { name: "No A/B Test" }),
    ).toBeVisible();

    let pageContent = await page.textContent("p");
	console.log(pageContent);
    await page.getByRole('link', { name: 'Home' }).click();
    await page.waitForTimeout(3000);
});

test('Getting the url of the page', async ({ page }) => {
    await page.goto("https://the-internet-5chk.onrender.com/ ");
	let pageUrl = page.url();
	console.log(pageUrl);
});
test('Set the window size', async ({ page }) => {;
    await page.goto("https://the-internet-5chk.onrender.com/ ");
    await page.waitForTimeout(3000);
   // await page.setViewportSize({ width: 1880, height: 1020 });
  //  await page.waitForTimeout(3000);
});