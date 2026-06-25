function fibonacci(n:number) : any{
  if(n < 0) {
    let result ="Fibonacci is not defined for negative numbers"
    return result;
    } 
  else {
    let a: number = 0;
    let b: number = 1;

    //console.log("Fibonacci Series:");
    for (let i = 1; i <= n; i++) {
      if(i===n){
        let result =`Fibonacci of ${n} is ${a}`
        return result;
      }
    let next = a + b; // find next number
    a = b;            // shift a
    b = next;         // shift b
  }
  }
}

let result4 =fibonacci(4)
console.log(result4);
let result5 =fibonacci(10)
console.log(result5);
let result6 =fibonacci(-4)
console.log(result6);