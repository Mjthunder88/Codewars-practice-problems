// problem 1
// Trolls are attacking your comment section!

// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

// Your task is to write a function that takes a string and return a new string with all vowels removed.

// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

function disemvowel (str) {
    let answer = str.replace(/[aeiou]/gi, "")
    return answer
}

//   console.log(disemvowel('This website is for losers Lol!'))

//   problem 2

// This is a short-length challenge, but requires some clever thinking.

// Given two lists, find the smallest difference (subtraction) between any two nums.

// For example, given the arrays:

// The result would be 3, since 23 - 20 = 3 is the smallest difference of any pair of numbers in those lists.

// Write a function that determines the smallest difference.

function diff (arr1, arr2) {
    let answer
    let compare = []
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
             compare.push(arr2[j] - arr1[i])
        }
    }
    // console.log(compare)
     answer = Math.min(...compare)
    //  console.log(answer)
     return answer
}

// console.log(diff([10, 20, 14, 16, 18], [30, 23, 54, 33, 96]))

// Runtime is O(n)

// problem 3
// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

function removeExclamationMarks(s) {
    let answer = s.replace(/[!]/gi, '')
    console.log(answer)
    return answer ;
  }


//   Problem 4 code challange 
// If number is 7n 
// Player one can choose 2,3 or up to 5 stones
// If player one chooses 5 stones he loses 
// If player one chooses 3 stones he can lose 
// If player one chooses 2 

// Jareds solution


let canWin = (n) => {
    console.log('---------------')
    console.log('starting a new functiton call with ' + n)
    if (n < 2) {
        // console.log(n + ' is less than 2, so return false')
        return false 
    }

    let legalMoves = [2, 3, 5]

    for (let i = 0; i < legalMoves.length; i++) {
        let move = legalMoves[i]

        // console.log(' from ' + n + ', subtract ' + move + ' and call a new function call with the number: ' + (n - move))

         let oppistieDidntWin = !canWin(n - move)
        //  console.log('back here at a previous function where we were subtracting ' + move + ' from ' + n)

         if (oppistieDidntWin) {
            return true

         } else if (move === 5) {
            // console.log('it appears that the opponent won, so this player cannont win here, return false: bummer')
         } else {
            // console.log('it appears that the opponent won, but we still have choice(s to try, so lets try again with another move')
         }
    }

    return false 
}

// for (let i = 0; i < 50; i++) {
//     console.log('for ' + i + ': ' + canWin(i))
// }

console.log(canWin(7))