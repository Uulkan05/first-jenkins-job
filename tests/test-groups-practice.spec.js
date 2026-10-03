import { test } from '@playwright/test';

test.describe("Practice.cydoe website", () => {
  
     test.beforeEach(async ({page}) => {
        await page.goto("https://the-internet-5chk.onrender.com/");
        
    });

    test.afterEach(async ({page}) => {
        await page.waitForTimeout(3000);
    });

     
    test('Title of the page', async ({ page }) => {
        //await page.goto("https://the-internet-5chk.onrender.com/");
   
        let title = await page.title();
        console.log(title);
       
    });

    test("Get the url", async ({ page }) => {
        //await page.goto("https://the-internet-5chk.onrender.com/");
        console.log(await page.url());
        
    });
});

