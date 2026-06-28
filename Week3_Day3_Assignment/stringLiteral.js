"use strict";
//explicit way of creating object
let testExecutionSummary = {
    suiteName: "MakePaymentSuite",
    totalTests: 10,
    passedTests: 6,
    failedTests: 4,
    executionTime: 2
};
console.log(testExecutionSummary);
console.log("Pass Percentage is :", testExecutionSummary.passedTests / testExecutionSummary.totalTests);
if (testExecutionSummary.failedTests === 0) {
    console.log("Execution Successfull");
}
else {
    console.log("Execution Completed with Failures.");
}
