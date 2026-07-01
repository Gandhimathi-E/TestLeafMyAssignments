import test, { expect } from "@playwright/test"

test("Test Case", async ({page}) => {
await page.goto('https://www.decathlon.in/')  
//const decathlonPage = page.locator('//a[@aria-label="Decathlon Home"]');
//await expect(decathlonPage).toHaveAttribute('aria-label', 'Decathlon Home');
//await expect.soft(page.locator('#username')).toBeDisabled()
const  title = await page.title();
console.log("page.Title : ",title)
await page.locator('//input[@type="search"]').click();
await page.getByRole('searchbox',{name:"Search for 60+ sports and 6,000"}).fill("Shoes");
await page.getByRole('searchbox',{name:"Search for 60+ sports and 6,000"}).press("Enter")

const resultCount = await page.locator('//div[@data-test-id="search-products-grid"]//a').count()
console.log("resultCount :",resultCount);

await page.getByRole('button',{name:'Sport'}).nth(1).click();
await page.locator('//span[text()="Running"]').click();
//await page.getByRole('checkbox',{name:'/Running*/'}).click();

await page.getByRole('button',{name:'Gender'}).click();
await page.locator('(//span[text()="Men"])[2]').click();
//await page.getByRole('checkbox',{name:'/Men*/',exact: false}).click();

await page.getByRole('button',{name:'Size'}).click(); 
await page.locator('//span[text()="Uk 10.5 - eu 45"]').click()
await page.locator('//span[text()="Most relevant"]').click()
await page.locator('//span[text()="Highest discount "]').click()
await page.locator('(//div[@data-test-id="search-products-grid"]//a)[1]').click()

await page.locator('(//button[@aria-disabled="false" and contains(@aria-label,"Select")])[1]').click()
await page.waitForTimeout(5000)
await page.getByRole('button',{name:'Add to cart'}).click();

const addToCart = await page.locator('//span[@data-test-id="header-desktop:cart-count-badge"]').innerText()
console.log("addToCart :",addToCart)
let num = Number(addToCart);
if(num>0){
    console.log("Product Added to Cart")
}
})