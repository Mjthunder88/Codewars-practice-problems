//Problem 1

function findNeedle(haystack) {
    for (let i = 0; i < haystack.length; i++) {
      if(haystack[i] === "needle") {
        return `found the needle at position ` + i
      }
  } 
  }
  
  console.log(findNeedle(['hello', '1', 'hi', 'needle', 'cool', '4']))

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

console.log(outlier(arr1))
// Should return: 11 
console.log('--------------------------------')
console.log(outlier(arr2))
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