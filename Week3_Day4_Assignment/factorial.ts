function factorial(num:number) : any{
  if(num < 0) {
    let result ="Factorial is not defined for negative numbers"
    //console.log('Factorial is not defined for negative numbers');
    return result;
    } 
  else {
    
    let factorial: number = 1;
    for (let i = 1; i <= num; i++) {
      factorial *= i;
    }
    return factorial;
    //console.log(`Factorial of ${num} is ${factorial}`);
  }
}
let result1 =factorial(4)
console.log(result1);
let result2 =factorial(10)
console.log(result2);
let result3 =factorial(-4)
console.log(result3);