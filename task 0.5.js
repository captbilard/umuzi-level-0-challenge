function areaOfTriangle(a,b,c){

    for(let i = 0; i < arguments.length; i++){
        if (typeof(arguments[i]) != "number"){
            console.log(
                `"${arguments[i]}" is not a valid number, it is a ${typeof(arguments[i])}.`
            )
            return 
        }
    }

    let semiPerimeter = ((a + b + c) * 0.5);

    let area = Math.sqrt(
        semiPerimeter * (
            (semiPerimeter - a) * (semiPerimeter - b) * (semiPerimeter - c)
    )
    );
    return area;
}

areaOfTriangle(3,4,5);