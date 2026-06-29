import {test} from "@playwright/test"
test("Learn frames", async ({page}) => {
  await page.goto('https://www.w3schools.com/js/tryit.asp?filename=tryjs_confirm') ;
  page.on('dialog',async(alert)=>{
    console.log(alert.type())
    console.log(alert.message());
   let alertType=alert.type()
   switch(alertType){
    case "alert":
        await alert.accept()
        break
    case "confirm":
        await alert.accept()
        break
    case "prompt":
       await alert.accept("Playwright")
        break
    default:
        await alert.dismiss()
   }
})
  const allFrames=page.frames()  //returns array of pages
  const noofFrames=allFrames.length //number of frames present-5
  console.log(noofFrames);//mp-f0,and f1, f2, f3, f4
  //Handling frame using index 
  //handling 1st frame
  const frame1=allFrames[1]
  await frame1.locator('//button[text()="Try it"]').click()
  const text = await frame1.locator('#demo').innerText()
  console.log("InnerText :",text)
  await page.waitForTimeout(2000)
})