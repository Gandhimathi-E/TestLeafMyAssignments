import {test} from "@playwright/test"

test.only("Learn playwright locators",async ({page}) => {

await page.goto("https://login.salesforce.com/")
await page.locator('//div[@id="username_container"]/input[1]').fill("demoCSR2");
await page.locator('//label[@class="label"][1]/following-sibling::input[@id="password"]').fill('crmsfa');
await page.locator('#Login').click()




    
})