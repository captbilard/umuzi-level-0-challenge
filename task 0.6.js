function maximum(a,b,c){
    let maxNumber = Number();
    for(let i=0; i<arguments.length; i++){
        if (arguments[i] > maxNumber){
            maxNumber = arguments[i]
        }
    }
    return maxNumber
}
