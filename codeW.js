// problem 1
// Trolls are attacking your comment section!

// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

// Your task is to write a function that takes a string and return a new string with all vowels removed.

// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

function disemvowel(str) {
  let answer = str.replace(/[aeiou]/gi, "");
  return answer;
}

//   console.log(disemvowel('This website is for losers Lol!'))

//   problem 2

// This is a short-length challenge, but requires some clever thinking.

// Given two lists, find the smallest difference (subtraction) between any two nums.

// For example, given the arrays:

// The result would be 3, since 23 - 20 = 3 is the smallest difference of any pair of numbers in those lists.

// Write a function that determines the smallest difference.

function diff(arr1, arr2) {
  let answer;
  let compare = [];
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      compare.push(arr2[j] - arr1[i]);
    }
  }
  // console.log(compare)
  answer = Math.min(...compare);
  //  console.log(answer)
  return answer;
}

// console.log(diff([10, 20, 14, 16, 18], [30, 23, 54, 33, 96]))

// Runtime is O(n)

// problem 3
// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

function removeExclamationMarks(s) {
  let answer = s.replace(/[!]/gi, "");
  console.log(answer);
  return answer;
}

//   Problem 4 code challange
// If number is 7n
// Player one can choose 2,3 or up to 5 stones
// If player one chooses 5 stones he loses
// If player one chooses 3 stones he can lose
// If player one chooses 2

// Jareds solution

let canWin = (n) => {
  console.log("---------------");
  console.log("starting a new functiton call with " + n);
  if (n < 2) {
    // console.log(n + ' is less than 2, so return false')
    return false;
  }

  let legalMoves = [2, 3, 5];

  for (let i = 0; i < legalMoves.length; i++) {
    let move = legalMoves[i];

    // console.log(' from ' + n + ', subtract ' + move + ' and call a new function call with the number: ' + (n - move))

    let oppistieDidntWin = !canWin(n - move);
    //  console.log('back here at a previous function where we were subtracting ' + move + ' from ' + n)

    if (oppistieDidntWin) {
      return true;
    } else if (move === 5) {
      // console.log('it appears that the opponent won, so this player cannont win here, return false: bummer')
    } else {
      // console.log('it appears that the opponent won, but we still have choice(s to try, so lets try again with another move')
    }
  }

  return false;
};

// for (let i = 0; i < 50; i++) {
//     console.log('for ' + i + ': ' + canWin(i))
// }

// console.log(canWin(7))

// Problem 5

// Code as fast as you can! You need to double the integer and return it.

function doubleInteger(i) {
  return i * 2;
}

//   Problem 6

// Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.

// Write a function which takes a list of strings and returns each line prepended by the correct number.

// The numbering starts at 1. The format is n: string. Notice the colon and space in between.

var number = function (array) {
  let count = 1;
  let newString = [];
  array.forEach((element) => {
    newString.push(`${count}: ${element}`);
    count++;
  });
  return newString;
};

//  Problem 7

function isPalindrome(x) {
  if (x === "") {
    return true;
  }
  let lowerCase = x.toLowerCase();
  for (let i = 0; i < x.length; i++) {
    if (
      lowerCase[0] === lowerCase[lowerCase.length - 1] &&
      lowerCase[1] === lowerCase[lowerCase.length - 2]
    ) {
      return true;
    }
  }
  return false;
}

// Problem 7

//   Complete the square sum function so that it squares each number passed into it and then sums the results together.

// For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.

function squareSum(numbers) {
  let answer = 0;

  for (let i = 0; i < numbers.length; i++) {
    answer += numbers[i] * numbers[i];
  }
  return answer;
}

// Problem 8
//     Messi is a soccer player with goals in three leagues:
// LaLiga
// Copa del Rey
// Champions
// Complete the function to return his total number of goals in all three leagues.

function goals(laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
  return laLigaGoals + copaDelReyGoals + championsLeagueGoals;
}

// problem 9

//   Write a function that takes an array of strings as an argument and returns a sorted array containing the same strings, ordered from shortest to longest.

// For example, if this array were passed as an argument:

// ["Telescopes", "Glasses", "Eyes", "Monocles"]

// Your function would return the following array:

// ["Eyes", "Glasses", "Monocles", "Telescopes"]

// All of the strings in the array passed to your function will be different lengths, so you will not have to decide how to order multiple strings of the same length.

function sortByLength(array) {
  let answer = array.sort((a, b) => {
    return a.length - b.length;
  });
  return answer;
}

// console.log(sortByLength(["Telescopes", "Glasses", "Eyes", "Monocles"]))

// problem 10

//   In this Kata we are passing a number (n) into a function.

// Your code will determine if the number passed is even (or not).

// The function needs to return either a true or false.

// Numbers may be positive or negative, integers or floats.

// Floats with decimal part non equal to zero are considered UNeven for this kata.

function testEven(n) {
  if (n % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

// problem 11

// Write a function to split a string and convert it into an array of words.

function stringToArray(string) {
  return string.split(" ");
}

// Problem 12

// When provided with a number between 0-9, return it in words.

// Input :: 1

// Output :: "One".

function switchItUp(number) {
  if (number === 0) {
    return "Zero";
  } else if (number === 1) {
    return "One";
  } else if (number === 2) {
    return "Two";
  } else if (number === 3) {
    return "Three";
  } else if (number === 4) {
    return "Four";
  } else if (number === 5) {
    return "Five";
  } else if (number === 6) {
    return "Six";
  } else if (number === 7) {
    return "Seven";
  } else if (number === 8) {
    return "Eight";
  } else if (number === 9) {
    return "Nine";
  }
}

// problem 3

// Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:
// []                                -->  "no one likes this"
// ["Peter"]                         -->  "Peter likes this"
// ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"

// check if the array has names in it.
// If it does then I will implement based on the length the neccesory "and's" and "likes" . to the end result
// like the examples above ^

function likes(names) {
  let namesLength = names.length;
  // console.log(names)
  for (let i = 0; i < names.length + 1; i++) {
    if (names.length < 1) {
      return "no one likes this"
    } else if (namesLength === 1) {
      return `${names[i]} likes this`;
    } else if (namesLength > 1 && namesLength < 3) {
      return `${names[i]} and ${names[i + 1]} like this`;
    } else if (namesLength > 2 && namesLength < 4) {
      return `${names[i]}, ${names[i + 1]} and ${names[i + 2]} like this`;
    } else if (namesLength > 3) {
      return `${names[i]}, ${names[i + 1]} and ${namesLength - 2} others like this`;
    }
  }
}
console.log(likes([]))
console.log(likes(['Peter']))
console.log(likes(['Peter', 'Jacob']))
console.log(likes(['Peter', 'Jacob', 'Jack']))
console.log(likes(['Peter', 'Jacob', 'Jack', 'Sam']))
