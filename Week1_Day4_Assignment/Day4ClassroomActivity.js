//1) Write JS code to count the occurance of character 'a' in the string "JavaScript"
 //2) Write JS code to reverse the string (Testleaf)

 let str = "JavaScript";
 let value = str.split("");
 let count = 0;
    for(let i=0; i<value.length; i++){
        if(value[i] === 'a'){
            count++;
        }   
    }
    console.log("The number of occurrences of 'a' in the string is: " + count);

    let originalString = "Testleaf";
    let reversedString = "";  
    for(let i = originalString.length - 1; i >= 0; i--){
        reversedString += originalString[i];
    }
    console.log("Reversed string:", reversedString);
