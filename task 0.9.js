function printVowel(str){
    [...str].forEach((e) => {
        if ((/^[aeiou]$/i).test(e)){
            console.log(e)
        }
    })
}
