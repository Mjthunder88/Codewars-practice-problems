//Problem 1

function findNeedle(haystack) {
    for (let i = 0; i < haystack.length; i++) {
      if(haystack[i] === "needle") {
        return `found the needle at position ` + i
      }
  } 
  }
  
  // console.log(findNeedle(['hello', '1', 'hi', 'needle', 'cool', '4']))

  // I am looping through an array and at each index verifying if it contains the string "needle"
  // Once that string is found it then returns the set phrase. 

  //Problme 2

  function countPositivesSumNegatives(input) {
    let answer = []
    let positives = 0
    let negatives = 0
    if (input === null || input.length < 1) {
      return []
    }
    
    for (let i = 0; i < input.length; i++) {
      if (input[i] > 0) {
        positives++
      } else if (input[i] < 0) {
        negatives += input[i]
      }
  }
       answer.push(positives)
       answer.push(negatives)
        return answer
  }


  let testData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15];
    let actual = countPositivesSumNegatives(testData);
// console.log(actual)
// console.log(countPositivesSumNegatives([]))
  // The function will always check weather or not the array is empty or not. If it is then it just returns an empty string.
  // if its not empty then it will jump down to the for loop to run through the array. 
  // if the number is positive then it increments the count for positive numbers by 1
  // if its negative then it just adds the sum to the variable negatives.
  //Then it adds those values to a new array called answer and returns it. 


  //problem 3

// Implement a function which convert the given boolean value into its string representation.

// Note: Only valid inputs will be given.

function booleanToString(b){
  if (b === true) {
  return "true"
  } else if (b === false) {
    return "false"
  }
}

// console.log(booleanToString(true))



// problem 4

// take the length of a string and divide it in half to get the middle of the string.
// return the 2 middle letters if it is even 
//or return the 1 middle letter if it is odd

function getMiddle(s){
  let middle = ''
  let middle2 = ''
  let index = 0
  let result = ''
  if (s.length % 2 === 0) {
    middle = (s.length / 2) - 1 
    middle2 = s.length / 2
    result = s[middle] + s[middle2]
//     console.log(result)
    return result
  } else {
     middle = (s.length -1) / 2
    return s[middle]
  }
}

// console.log(getMiddle('testing'))
// console.log(getMiddle('test'))


//Problem 5
// Create a function that gives a personalized greeting. This function takes two parameters: name and owner.

// Use conditionals to return the proper message:

function greet (name, owner) {
  if (name === owner) {
    return 'Hello boss'
  } else {
    return 'Hello guest'
    
  }
}

// console.log(greet('Marcus', 'Marcus'))
// console.log(greet('Marcus', 'Dave'))

//Problem 6

// Take an array and loop through the array to check if the numbers are even. If one number is not return that number
// by pushing it into a seperate array.

let arr1 = [2, 4, 0, 100, 4, 11, 2602, 36] 
let arr2 = [160, 3, 1719, 19, 11, 13, -21]

function outlier (array) {
    let even = []
    let odd = []
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            even.push(array[i])
        } else {
            odd.push(array[i])
        }
    }
    if (even.length < odd.length) {
        return even
    } else {
        return odd
    }
}

// console.log(outlier(arr1))
// Should return: 11 
console.log('--------------------------------')
// console.log(outlier(arr2))
// Should return: 160 

// problem 7
// Your task is to make two functions ( max and min, or maximum and minimum, etc., depending on the language ) that receive a list of integers as input, and return the largest and lowest number in that list, respectively.

var min = function(list){
  let minNum = Math.min(...list)
//     console.log(minNum)
  return minNum;
}

var max = function(list){
   let maxNum = Math.max(...list)
  return maxNum;
}


//problem 8 

// You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.
// Array can contain numbers or strings. X can be either.
// Return true if the array contains the value, false if not.

function check(a, x) {
  
  for (let i = 0; i < a.length; i++) {
    if (a[i] === x) {
      return true 
    } else {
      continue
    }
  }
  return false
}

// console.log(check([66, 101], 66))
// console.log(check([101, 45, 75, 105, 99, 107], 107))
// console.log(check(['t', 'e', 's', 't'], 'e'))
// console.log(check(['what', 'a', 'great', 'kata'], 'kat'))


//Problem 9 Code challange Wk5 Day 2

// Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

// Take a string of Numbers and insert the necessary symbols to make a phone number 
// loop through the number and make the changes

function createPhoneNumber (phone) {
  phone.splice(0, 0, '(')
  phone.splice(4, 0, ')')
  phone.splice(5, 0, ' ')
  phone.splice(9, 0, '-')
  let newPhone = phone.join('')
  // console.log(newPhone)
  return newPhone
}

// console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])) // => returns "(123) 456-7890"
// console.log(createPhoneNumber([8, 0, 1, 8, 3, 7, 6, 9, 6, 6])) // => returns "(801) 837-6966"
// console.log(createPhoneNumber([8, 0, 1, 8, 5, 4, 2, 1, 6, 6])) // => returns "(801) 854-2166"


//problem 10 Code challange wk5 day 3
// in a small town the population is p0 = 1000 at the beginning of a year. The population regularly increases by 2 percent per year and moreover 50 new inhabitants per year come to live in the town. How many years does the town need to see its population greater or equal to p = 1200 inhabitants?




let p0 = 1000

function  populationFinder (popnum, percentGrowth, movers, popGoal ) {
  let yearCount = 0
  let newPercentGrowth = percentGrowth / 100
  // console.log(newPercentGrowth)
    while (popnum <= popGoal) {
      popnum += (popnum * newPercentGrowth) + movers
      // console.log(popnum)
      // console.log('-------------------')
      yearCount++
    }
    return  `Year Growth: ${yearCount}`
}


// console.log(populationFinder(p0, 2, 50, 1200))
// console.log(populationFinder(500, 8, 100, 5000))
// console.log(populationFinder(2000, 5, 200, 5000))
// console.log(populationFinder(1500, 5, 100, 5000))//15
// console.log(populationFinder(1500000, 2.5, 10000, 2000000)) //10


// Problem 11

// Your task is to return the names of all wishlisted presents that you might have gotten.
// Possible values for size: “small”, “medium”, “large”
// Possible values for clatters: “no”, “a bit”, “yes”
// Possible values for weight: “light”, “medium”, “heavy”
// Don’t add any item more than once to the result
// The order of names in the output doesn’t matter
// It’s possible, that multiple items from your wish list have the same attribute values. If they match the attributes of one of the presents, add all of them.

var wishlist = [
  {name: "Mini Puzzle", size: "small", clatters: "yes", weight: "light"},
  {name: "Toy Car", size: "medium", clatters: "a bit", weight: "medium"},
  {name: "Card Game", size: "small", clatters: "no", weight: "light"}
];

var presents = [
  {size: "medium", clatters: "a bit", weight: "medium"},
  {size: "small", clatters: "yes", weight: "light"}
];

function guessGifts (wishlist, presents) {

  let guesses = []
  
  for (let i = 0; i < wishlist.length; i++) {
    for (let k = 0; k < presents.length; k++) {
      if (wishlist[i].size === presents[k].size && wishlist[i].weight === presents[k].weight && wishlist[i].clatters === presents[k].clatters) {
        guesses.push(wishlist[i].name)
      }
    }
     
    }
    return guesses

};


// console.log(guessGifts(wishlist, presents)); // must return ["Toy Car", "Mini Puzzle"]


//Problem 12

// Sometimes there are problems: lack of colors, technical malfunction and a "bad" control string is produced e.g. aaaxbbbbyyhwawiwjjjwwm with letters not from a to m.

// You have to write a function printer_error which given a string will return the error rate of the printer as a string representing a rational whose numerator is the number of errors and the denominator the length of the control string. Don't reduce this fraction to a simpler expression.

// The string has a length greater or equal to one and contains only letters from ato z.


//DID NOT FINISH TRY AGAIN 

function printerError(s) {
  let compare = ['a','b','c','d','e','f','g','h','i','j','k','l','m']
  let errors = 0
  let length = s.length
    for (let i = 0; i < s.length; i++) {
        for (let k = 0; k < s.length; k++) {
            if (s[i] === compare[k]) {
              continue
            } else {
              errors++
            }
        }
       let errors2 = String(errors)
       let length2 = String(length)
       let result = errors2 + '/' + length
       console.log(result)
      
      return result
}

}


// s="aaabbbbhaijjjm"
// printer_error(s) => "0/14"

// s="aaaxbbbbyyhwawiwjjjwwm"
// printer_error(s) => "8/22"