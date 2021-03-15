function hello(word){
    if (typeof(word) != "string"){
        console.log("The argument passed is not a string")
        return
    }
    console.log(`Hello ${word}!`);
}

