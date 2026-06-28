import test  from "@playwright/test"

test.use({

    storageState:'Data/LeaftApslogin.json'
})

test("Skip login using LeaftAps",async ({page}) => {

await page.goto('https://leaftaps.com/crmsfa/control/main')
//await page.locator('//span[text()="App Launcher"]').click()
await page.locator('a:has-text("Leads")').click()

})