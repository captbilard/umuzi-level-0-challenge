function convertToFahrenheit(tempInCelsius){
    let tempInFahrenheit = ((tempInCelsius * 1.8) + 32).toFixed(2)
    return `${tempInCelsius} degree celsius is equal to ${tempInFahrenheit} degree fahrenheit.`
}

function convertToCelsius(tempInFahrenheit){
    let tempInCelsius = ((tempInFahrenheit - 32) / 1.8).toFixed(2)
    return `${tempInFahrenheit} degree Fahrenheit is equal to ${tempInCelsius} degree Celsius.`
}
