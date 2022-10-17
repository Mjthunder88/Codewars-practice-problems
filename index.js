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


