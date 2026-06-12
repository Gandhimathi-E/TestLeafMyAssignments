function checkNumber(data){
    switch (true){
        case (data > 0):
            console.log("Given number is Positive");
        case (data < 0):
            console.log("Given number is Negative");
        case (data === 0):
            console.log("Given number is Zero");
    }
}
checkNumber(55)
