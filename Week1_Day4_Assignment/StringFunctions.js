
//Example 1
let str = "Hello World"
let strArr = str.split(" ");
console.log("The String Array is ",strArr);
console.log("The last word is ",strArr[1]);
console.log("The last word length is ",strArr[1].length);

//***********************************************************

//Example 2
let str1 = "   fly me to the moon  ";
console.log("String is ",str1)

let trimmedStr = str1.trim();
console.log("String is ",trimmedStr)

let trimmedStrArray = trimmedStr.split(" ");
console.log("String Array is ",trimmedStrArray)

console.log("String Array length is ",trimmedStrArray.length);

console.log("The last wordlength is ",trimmedStrArray[(trimmedStrArray.length)-1].length);
//********************************************************************

//Example 3


/*function isAnagram(str1,str2){
    let sorterstr1 = str1.split("").sort().join("")
    let sorterstr2 = str2.split("").sort().join("")
    //sorterstr1 = str1.sort();
    console.log("Sorted String 1 is ",sorterstr1);
    console.log("Sorted String 2 is ",sorterstr2);
    if(sorterstr1 === sorterstr2){
        return true;
    }
    else{
        return false;
    }
}

let isAnagramBoolean1= isAnagram("listen", "silent")
console.log("isAnagram : ",isAnagramBoolean1)
let isAnagramBoolean2 = isAnagram('Hello', 'World')
console.log("isAnagram : ",isAnagramBoolean2)*/

function isAnagram(){
    let str1 = process.argv[2];
    let str2 = process.argv[3];
    console.log("process.argv[2] :",process.argv[2])
    console.log("str1 :",str1)
    let sorterstr1 = str1.split("").sort().join("")
    let sorterstr2 = str2.split("").sort().join("")
    //sorterstr1 = str1.sort();
    console.log("Sorted String 1 is ",sorterstr1);
    console.log("Sorted String 2 is ",sorterstr2);
    if(sorterstr1 === sorterstr2){
        return true;
    } 
    else{
        return false;
    }
}
console.log(isAnagram())
