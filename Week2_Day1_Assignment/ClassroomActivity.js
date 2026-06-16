
let hetroarray=["ten","one","two","three","one"]
for (let i=0;i<hetroarray.length;i++){
    for (let j=i+1;j<hetroarray.length;j++){
        if (hetroarray[i] === hetroarray[j]){
console.log("Repeated number in array:",hetroarray[i])
        }
    }
}