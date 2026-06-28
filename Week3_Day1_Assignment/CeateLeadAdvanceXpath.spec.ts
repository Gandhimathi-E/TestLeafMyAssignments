import {test,expect} from "@playwright/test"

test('leaftaps login', async ({page}) => {

await page.goto("https://leaftaps.com/opentaps/control/main")
await page.locator("//input[@name='USERNAME']").fill("demoCSR2")
await page.locator("//input[@name='PASSWORD']").fill('crmsfa')
await page.locator("//input[@type='submit']").click()

await page.locator("//a[contains(text(),'CRM/SFA')]").click()
await page.locator("//a[text() = 'Leads']").click()
await page.locator("//a[text() = 'Create Lead']").click()

await page.waitForTimeout(2000);
await page.locator('//input[@id="createLeadForm_companyName"]').fill('Cognizant')
await page.locator('//input[@id="createLeadForm_firstName"]').fill('Gandhimathi')
await page.locator('//input[@id="createLeadForm_lastName"]').fill('Easwaran')
await page.locator('//input[@id="createLeadForm_personalTitle"]').fill('Testing')
await page.locator('//input[@id="createLeadForm_generalProfTitle"]').fill('Automation')
await page.locator('//input[@id="createLeadForm_annualRevenue"]').fill('100000')
await page.locator('//input[@id="createLeadForm_departmentName"]').fill('IT')
await page.locator('//input[@id="createLeadForm_primaryPhoneNumber"]').fill('1234567899')

await page.locator('//input[@class="smallSubmit"]').click()

//sectionHeaderTitle_leads




//await expect(page).toHaveTitle('My Home | opentaps CRM')
//await expect(page).toHaveURL('https://leaftaps.com/crmsfa/control/main')

let pagetitle=await page.title()
console.log(pagetitle)

let pageurl=page.url()
console.log(pageurl);

})