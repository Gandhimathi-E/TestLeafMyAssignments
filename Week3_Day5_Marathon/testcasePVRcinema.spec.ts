import test from "@playwright/test"

test("Test Case", async ({page}) => {
await page.goto('https://www.pvrcinemas.com/')  
await page.locator('//h6[text()="Chennai"]').click()
await page.locator('//span[text()="Select Movie"]').click()
await page.locator('(//span[text()="CON CITY"])[2]').click()
//await page.locator('//span[text()="Select Date"]').click()
await page.locator('//span[contains(text(),"Today")]').click()
await page.locator('(//ul[@role="listbox"]/li)[3]').click()
 const enabledOptions = page.locator('.p-dropdown-item:not(.p-disabled)').first().click();
 page.locator('.p-dropdown-item:not(.p-disabled)').first().click();
 //console.log("enabledOptions :",enabledOptions.count());
 //await page.getByRole('listbox').click();
 await page.waitForTimeout(8000)
 await page.locator('//button[@type="submit"]').click()
  
await page.locator('//div[@class="accpet-btn-flow-seat"]/button[2]').click();
await page.locator('//span[@id="EL.ELITE|S:7"]').click();
await page.locator('//span[@id="EL.ELITE|R:7"]').click();
//await page.locator('#EL.ELITE|S:7').click();
//await page.locator('#EL.ELITE|R:7').click();
await page.locator('.sc-bbbBoY.kbsOBB.btn-proceeded').click();

})