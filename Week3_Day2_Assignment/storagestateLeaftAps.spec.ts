import test  from "@playwright/test"
test("Storage State",async ({page}) => {

await page.goto('https://leaftaps.com/opentaps/control/main')
await page.locator('#username').fill("demoCSR2")
await page.locator('[class="inputLogin"]').nth(1).fill('crmsfa')
await page.locator('.decorativeSubmit').click()

await page.context().storageState({path:'Data/LeaftApslogin.json'})
await page.waitForTimeout(20000)

    
})