// const{test}=require("playwright/test"); // import the test function from the Playwright testing library old way
import {test} from "@playwright/test"; // import the test function from the Playwright testing library new way

test("Simple youtube test",async({page})=>{     // define a test case with a descriptive name
    await page.goto("https://youtube.com"); // navigate to the Playwright website
   // await page.screenshot({path:"screenshot.png"}); // take a screenshot of the page and save it as "screenshot.png"
   await page.waitForTimeout(5000); 
}); 