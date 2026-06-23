import{test} from "@playwright/test"

test.only("To verify the parabank login",async({page})=>{

await page.goto("https://parabank.parasoft.com/parabank/index.htm")
await page.getByRole('link',{name:"Forgot login info?"}).click()

await page.getByAltText("ParaBank").click()
await page.getByText("Locations").nth(1).click()
await page.getByRole('button').nth(1).click()
//await page.waitForTimeout(30000)
await page.getByPlaceholder("Search Keywords",{exact:true}).fill('chennai')

})