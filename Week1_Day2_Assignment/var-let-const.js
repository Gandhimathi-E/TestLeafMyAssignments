const browser= "Chrome";
function getBrowserVersions() {
     console.log("getBrowserVersions");
  if (browser === "Chrome") {
    console.log("inside if block:", browserVersion);
    var browserVersion = "Chrome v130";
    console.log("inside ", browserVersion);
  }

  console.log("outside", browserVersion);
}

getBrowserVersions();

//OUTPUT
/* C:\Playwright Workspace\Playwright-testleaf\JavaScript>node var_let_const.js
outside undefined */

const browserversion = "Chrome";

function getBrowserVersion() {
    console.log("getBrowserVersion")
  if (browserversion === "Chrome") {
    let browserversion = "Chrome v130";
    console.log("Inside block:", browserversion);
  }

  console.log("Outside block:", browserversion);
}

getBrowserVersion();

//OUTPUT
/* 
C:\Playwright Workspace\Playwright-testleaf\JavaScript>node var_let_const.js
Inside block: Chrome v130
Outside block: Chrome */