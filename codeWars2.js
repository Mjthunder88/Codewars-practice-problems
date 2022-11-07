// problem 1
const converter = require('number-to-words')

// Trying to use a library to help create this function

// Write a function that turns a string of 24-hour time into words.
// You can trust that you’ll be given a valid string (it will always have a two-digit hour 00-23, and a two-digit minute 00-59). Hours 0-11 are am, and hours 12-23 are pm.

function timeConverter (time) {
    let splitTime = time.split(':')
     let hours = converter.toWords(splitTime[0])
     let minute = converter.toWords(splitTime[1])
    return hours + minute
    //  console.log(answer)
}

console.log(timeConverter("01:00"))
// "one o'clock am"

timeConverter("06:01")
// 'six oh one am'

timeConverter("06:10")
// 'six ten am'

timeConverter("06:18")
// 'six eighteen am'

timeConverter("06:30")
// 'six thirty am'

timeConverter("10:34")
// 'ten thirty four am'