import { test, expect } from '@playwright/test';

test('locators intro', async ({ page }) => {
  await page.goto("https://www.google.com/");
  await page.waitForTimeout(3000);
  let searchBox = page.locator("#ti6dpd"); // css selector
 //let searchBox = page.locator("// textarea[@aria-label='Search']");// xpath selector
// let searchBox = page.locator("// textarea[@class='gLFyf']");
  //  let searchBox = page.$$("//textarea[@class='gLFyf']");

  searchBox.fill('Cydeo'); // recoomended
 //  searchBox.type("Playwright");
  await page.waitForTimeout(3000);
  await searchBox.press('Enter');
  await page.waitForTimeout(3000);
  await expect(page).toHaveTitle(/Cydeo/);

});
/*
<textarea jsname="yZiJbe" class="gLFyf" aria-controls="Alh6id" aria-owns="Alh6id" autofocus="" aria-label="Search" placeholder="" 
aria-autocomplete="both" aria-expanded="false" aria-haspopup="false" autocapitalize="off" autocomplete="off" autocorrect="off" 
id="ti6dpd" maxlength="2048" name="q" role="combobox" rows="1" spellcheck="false" 
data-ved="0ahUKEwjb7YTg2PuWAxXI6ckDHaIHAlgQ39UDCBI"></textarea>
*/
// texarea[@class='gLFyf'] we are geting the element of the search box 


