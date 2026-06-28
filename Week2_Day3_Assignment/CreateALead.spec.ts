import {test,expect} from "@playwright/test"

test('leaftaps login', async ({page}) => {

await page.goto("https://leaftaps.com/opentaps/control/main")
await page.locator('#username').fill("demoCSR2")

//nth(0) or first() -> for first match
//nth(1)-> second match
//nth(n)-> last()-> for last match
await page.locator('[class="inputLogin"]').nth(1).fill('crmsfa')
await page.locator('.decorativeSubmit').click()
//await page.locator(text='CRM/SFA').click()
await page.getByText('CRM/SFA').click()
//await page.getByText('Leads').click()
await page.locator('a:has-text("Leads")').click()
//await page.waitForTimeout(2000)
//await page.locator('[id="ext-gen503"]').click()
await page.locator('a:has-text("Create Lead")').click()
await page.waitForTimeout(2000);
//await page.locator('#ext-gen783').click()
await page.waitForTimeout(2000);
await page.locator('[id="createLeadForm_companyName"]').fill('Cognizant')
await page.locator('[id="createLeadForm_firstName"]').fill('Gandhimathi')
await page.locator('[id="createLeadForm_lastName"]').fill('Easwaran')

await page.locator('[id="createLeadForm_personalTitle"]').fill('Testing')
await page.locator('[id="createLeadForm_generalProfTitle"]').fill('Automation')
await page.locator('[id="createLeadForm_annualRevenue"]').fill('100000')

await page.locator('[id="createLeadForm_departmentName"]').fill('IT')
await page.locator('[id="createLeadForm_primaryPhoneNumber"]').fill('1234567899')
await page.locator('[class="smallSubmit"]').click()

//sectionHeaderTitle_leads




//await expect(page).toHaveTitle('My Home | opentaps CRM')
//await expect(page).toHaveURL('https://leaftaps.com/crmsfa/control/main')

let pagetitle=await page.title()
console.log(pagetitle)

let pageurl=page.url()
console.log(pageurl);

})