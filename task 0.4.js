function evenOrOdd(number){
    if(typeof(number) != "number"){
        console.log("The argument passed is not a number");
        return
    }
    if(number % 2 == 0){
        console.log("even")
        return
    }
    console.log("odd")

}

