function commonCharacters(str1, str2){
    let commonLetters = ""
    for (let i of str1){
        for (let j of str2){
            if (i == j){
                commonLetters += i + ", "
            }
        }
    }
    return `Common letters: ${commonLetters}`
}