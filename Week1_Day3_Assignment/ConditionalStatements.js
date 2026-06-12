function launchBrowser(browserName){
    if(browserName === "Chrome"){
        console.log("BrowserName is :" ,browserName );
    }
    else{
        console.log("BrowserName is not chrome")
    }
}
function runTests(testType){
    switch(testType){
        case "smoke":
        console.log("TestType : ",testType);
        break;
        case "sanity":
        console.log("TestType : ",testType);
        break;
        case "regression":
        console.log("TestType : ",testType);
        break;
        default:
        console.log("Default TestType is Smoke");
        break;
    }
}
launchBrowser("Chrome")
runTests("sanity")