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
// console.log('--------------------------------')
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


// s="aaabbbbhaijjjm"
// printer_error(s) => "0/14"

// s="aaaxbbbbyyhwawiwjjjwwm"
// printer_error(s) => "8/22"

// 12

// Write a function that takes in a number. It should return a “tower” of *. The tower will be an array of strings.

// The number passed in tells you how many floors the tower should have.

// The first floor should have 1 block, the 2nd should have 3 blocks, the 3rd should have 5 blocks, and so on.

// Each block is represented by a *.

// function towerBuild (num) {
//   let tower = []
//     while (num > 0)  {
//       tower.push(' ')
//       tower.push('*')
//       tower.unshift(' ')
//       num--
//     }
//     console.log(tower)
// }

// towerBuild(3)

function towerBuilder(nFloors) {
  var tower = [];
  for (var i = 0; i < nFloors; i++) {
  tower.push(" ".repeat(nFloors - i - 1)+ "*".repeat((i * 2)+ 1)+ " ".repeat(nFloors - i - 1))
  // the .repeat() method will run the number of times specified in the (). So to create the floor it takes the number of floors 
  // subtracts it by i in the floor loop so that for every floor it will decrease the number of times its repeated. 
  // then with the * its doubled everytime i goes up so that it will create a tree affect. 
  //And for every repeat it then will push that floor into the tower array then it will go again. 
  }
  for (let i = 0; i < tower.length; i++) {
    console.log(tower[i])
  }
  return tower;
  }

  // towerBuilder(3);
  // console.log('--------------')
  // towerBuilder(6)
  // console.log('--------------')
  // towerBuilder(10)
  // console.log('--------------')


  // Problem 14


//   You might know some pretty large perfect squares. But what about the NEXT one?

// Write a function in perfectSquare.js that finds the next perfect square after the one passed in as an argument and returns it.

// Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer (look at the examples if this sounds confusing).

// If the parameter is itself not a perfect square then -1 should be returned. You may assume the parameter is non-negative.


  function perfectSquare (num1) {
     let num2 = Math.sqrt(num1)
     if (Number.isInteger(num2))  {
      //  console.log(num2)
    let newNum = num2 + 1
    // console.log(newNum)
       let result = newNum * newNum
       return result
     } else {
      return -1
     }
  }

//   console.log(perfectSquare(9)) // should return 16 (3x3=9, 4x4=16)

// console.log(perfectSquare(289)) // should return 324 (17x17=289 18x18=324)

// console.log(perfectSquare(3000)) // should return -1 (sq root of 3000 is 54.77)

// Challange 2

// Make a new function similar to the last one, the only difference being, your function can accept any number,
// and it must return the next highest square (negative numbers will return 0, as it is the next perfect square).


function nextSquare (num1) {
  if (num1 < 0) {
    return 0
  }
  num1 = Math.floor(num1)
  let num2 = Math.sqrt(num1)
  if (Number.isInteger(num2))  {
   //  console.log(num2)
 let newNum = num2 + 1
 // console.log(newNum)
    let result = newNum * newNum
    return result
  } else {
    return -1

  }
}



// For example:
// --------------------------------------------------------------
// console.log(nextSquare(9.82)) // should return 16
// console.log(nextSquare(289)) // should return 324
// console.log(nextSquare(-36.5)) // should return 0 

// Challenge 3:

// Make a new function similar to the last one, the only different being, your function will return the next
// number that is both perfectly square and triangular (Google "what is a triangular number" if you don't know)
// 0 is considered both a perfect square and a perfect triangle




// For example:
// --------------------------------------------------------------
// console.log(nextSquareTri(-9.82)) // should return 0
// console.log(nextSquareTri(0.56)) // should return 1
// console.log(nextSquareTri(18)) // should return 36


// Problem 15

// Write a function in romanNumerals.js that converts an integer (<= 1,000) to its Roman numeral equivalent.
// we need to check the number passed in  to see what numerals it recives to make the number
// so if its less than 100 then it recives the necessary roman numerals
// if its greater than or equal to 100 then it will reacive the necessary 
// Important: You should convert to “old-school Roman numerals”, where subtraction isn’t used. So, for exmple, 4 is “IIII” and 9 is “VIIII”. You may be more used to a different style, where subtraction is used, as 4 would be “IV” and 9 would be “IX”. This is not what we want here (though it’s a good, but much harder challenge).

function toRoman(num) {
  let lookup = {M:1000,D:500,C:100,L:50,X:10,V:5,I:1},roman = '';
  for ( i in lookup ) {
    while ( num >= lookup[i] ) {
      roman += i;
      num -= lookup[i];
    }
  }
  return roman;
}



console.log(toRoman(5))
// 'V'
console.log(toRoman(3))

console.log(toRoman(267))
// 'CCLXVII'

console.log(toRoman(99))
// 'LXXXXVIIII'