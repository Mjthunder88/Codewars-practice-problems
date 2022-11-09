// problem 1
const converter = require('number-to-words')

// Trying to use a library to help create this function
// need to finish 

// Write a function that turns a string of 24-hour time into words.
// You can trust that you’ll be given a valid string (it will always have a two-digit hour 00-23, and a two-digit minute 00-59). Hours 0-11 are am, and hours 12-23 are pm.

const minuteValue = {
    '01' : ['oh one'],
    '02' : ['oh two'],
    '03' : ['oh three'],
    '04' : ['oh four'],
    '05' : ['oh five'],
    '06' : ['oh six'],
    '07' : ['oh seven'],
    '08' : ['oh eight'],
    '09' : ['oh nine'],
    '10' :[ 'ten'],
    '11' :[ 'eleven'],
    '12' :[ 'twelve'],
    '13' :[ 'thirteen'],
    '14' :[ 'fourteen'],
    '15' :[ 'fifteen'],
    '16' :[ 'sixteen'],
    '17' :[ 'seventeen'],
    '18' :[ 'eigtheen'],
    '19' :[ 'nineteen'],
    '20' :[ 'twenty'],
    '21' :[ 'twenty-one'],
    '22' :[ 'twentry-two'],
    '23' :[ 'twenty-three'],
    '24' :[ 'twenty-four'],
    '25' :[ 'twenty-five'],
    '26' :[ 'twenty-six'],
    '27' :[ 'twenty-seven'],
    '28' :[ 'twenty-eight'],
    '29' :[ 'twenty-nine'],
    '30' :[ 'thirty'],
    '31' :[ 'thirty-one'],
    '32' :[ 'thirty-two'],
    '33' :[ 'thirty-three'],
    '34' :[ 'thirty-four'],
    '35' :[ 'thirty-five'],
    '36' :[ 'thirty-six'],
    '37' :[ 'thirty-seven'],
    '38' :[ 'thirty-eight'],
    '39' :[ 'thirty-nine'],
    '40' :[ 'fourty'],
    '41' :[ 'fourty-one'],
    '42' :[ 'fourty-two'],
    '43' :[ 'fourty-three'],
    '44' :[ 'fourty-four'],
    '45' :[ 'fourty-five'],
    '46' :[ 'fourty-six'],
    '47' :[ 'fourty-seven'],
    '48' :[ 'fourty-eight'],
    '49' :[ 'fourty-nine'],
    '50' :[ 'fifty'],
    '51' :[ 'fifty-one'],
    '52' :[ 'fifty-two'],
    '53' :[ 'fifty-three'],
    '54' :[ 'fifty-four'],
    '55' :[ 'fifty-five'],
    '56' :[ 'fifty-six'],
    '57' :[ 'fifty-seven'],
    '58' :[ 'fifty-eight'],
    '59' :[ 'fifty-nine'],
}
function timeConverter (time) {
    let splitTime = time.split(':')
     let hours = converter.toWords(splitTime[0])

}

// console.log(timeConverter("01:00"))
// // "one o'clock am"

// timeConverter("06:01")
// // 'six oh one am'

// timeConverter("06:10")
// // 'six ten am'

// timeConverter("06:18")
// // 'six eighteen am'

// timeConverter("06:30")
// // 'six thirty am'

// timeConverter("10:34")
// 'ten thirty four am'