function timeConverter(number){
    let hour = Math.floor(number / 60)
    let minute = number % 60
    let hourString = (hour > 1) ? "hours" : "hour"
    let minuteString = (minute > 1) ? "minutes" : "minute"
    return `${hour} ${hourString}, ${minute} ${minuteString}.`
}