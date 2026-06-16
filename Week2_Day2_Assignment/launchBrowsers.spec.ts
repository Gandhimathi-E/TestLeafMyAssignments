import {test,chromium, webkit} from "@playwright/test"


//Launch browser using browser instance, browser context, and page

test.only("Launch Browser",async()=>{

//chromium is the base architecture for chrome and edge
const edgeBrowser=await chromium.launch({headless:false,channel: 'msedge'}) //or channel:"msedge"
const edgeContext=await edgeBrowser.newContext()
const edgePage=await edgeContext.newPage()

await edgePage.goto("https://www.redbus.in/")
await edgePage.waitForTimeout(2000)

console.log('RedBus Title:', await edgePage.title());
console.log('RedBus URL:', edgePage.url());

const webkitBrowser=await webkit.launch({headless:false}) //or channel:"msedge"
const webkitContext=await webkitBrowser.newContext()
const webkitPage=await webkitContext.newPage()

await webkitPage.goto("https://www.flipkart.com/")
await webkitPage.waitForTimeout(2000)

console.log('Flipkart Title:', await webkitPage.title());
console.log('Flipkart URL:', webkitPage.url());

})