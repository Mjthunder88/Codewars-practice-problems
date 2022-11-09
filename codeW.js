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

console.log(diff([10, 20, 14, 16, 18], [30, 23, 54, 33, 96]))

// Runtime is O(n)