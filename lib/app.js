// Given a Divisor and a Bound , Find the largest integer N , Such That ,
// Conditions :
// N is divisible by divisor
// N is less than or equal to bound
// N is greater than 0.
// Notes
// The parameters (divisor, bound) passed to the function are only positive values .
// It's guaranteed that a divisor is Found .
// Input >> Output Examples
// maxMultiple (2,7) ==> return (6)

function largestDivider(divisor, bound) {
  N = Math.floor(bound / divisor) * divisor;
  return N;
}

// Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and
// return as shown below. Index 0 will be considered even.
// For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.
// The input will be a lowercase string with no spaces.

function capitalizeString(string) {
  const result = string.split("");

  const upperCase = result.map((letter, index) => {
    if (index % 2 === 0) {
      return letter.toUpperCase();
    } else {
      return letter.toLowerCase();
    }
  });

  const lowerCase = result.map((letter, index) => {
    if (index % 2 !== 0) {
      return letter.toUpperCase();
    } else {
      return letter.toLowerCase();
    }
  });

  const indexA = upperCase.join("");
  const indexB = lowerCase.join("");

  const newArr = [indexA, indexB];
  return newArr;
}

// You are going to be given a word. Your job is to return the middle character of the word. If the
// word's length is odd, return the middle character. If the word's length is even, return the middle 2
// characters.
// #Examples:
// Kata.getMiddle("test") should return "es"
// Kata.getMiddle("testing") should return "t"
// Kata.getMiddle("middle") should return "dd"
// Kata.getMiddle("A") should return "A"

const getMiddle = (string) => {
  const stringLength = string.length;
  const middleIndex = Math.floor(stringLength / 2);

  if (stringLength % 2 === 0) {
    return string[middleIndex - 1] + string[middleIndex];
  } else {
    return string[middleIndex];
  }
};

// Welcome. In this kata, you are asked to square every digit of a number.
// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12
// is 1.
// Note: The function accepts an integer and returns an integer

function squareDigits(integer) {
  const string = integer.toString().split("");
  const squaredNumbers = string.map((number, index) => {
    return number * number;
  });

  return Number(squaredNumbers.join(""));
}

// In this little assignment you are given a string of space separated numbers, and have to return the
// highest and lowest number.
// Example:
// high_and_low("1 2 3 4 5") # return "5 1"
// high_and_low("1 2 -3 4 5") # return "5 -3"
// high_and_low("1 9 3 4 -5") # return "9 -5"
// Notes:
// All numbers are valid Int32, no need to validate them.
// There will always be at least one number in the input string.
// Output string must be two numbers separated by a single space, and highest number is first.

function highAndLow(string) {
  const arr = string.split(" ");
  arr.sort((a, b) => a - b);
  let min = arr[0];
  let max = arr[arr.length - 1];

  return `${max} ${min}`;
}

// What if we need the length of the words separated by a space to be added at the end of that same
// word and have it returned as an array?
// add_length('apple ban') => ["apple 5","ban 3"]
// add_length('you will win') => ["you 3","will 4","win 3"]
// Your task is to write a function that takes a String and returns an Array/list with the length of each
// word added to each element .
// Note: String will have at least one element; words will always be separated by a space.

function addLength(string) {
  const arr = string.split(" ");
  const splittedArray = arr.map((word) => `${word} ${word.length}`);

  return splittedArray;
}

// Complete the square sum function so that it squares each number passed into it and then sums the
// results together.
// For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.

function squareSum(arr) {
  const square = arr.map((number) => number * number);
  return square.reduce((accum, currVal) => accum + currVal);
}

// Let us consider this example (array written in general format):
// ls = [0, 1, 3, 6, 10]
// Its following parts:
// ls = [0, 1, 3, 6, 10]
// ls = [1, 3, 6, 10]
// ls = [3, 6, 10]
// ls = [6, 10]
// ls = [10]
// ls = []
// The corresponding sums are (put together in a list): [20, 20, 19, 16, 10, 0]
// The function parts_sums (or its variants in other languages) will take as parameter a list ls and
// return a list of the sums of its parts as defined above.

function partsSums(array) {
  const result = [];
  const initialSum = array.reduce((accum, currVal) => accum + currVal);
  result.push(initialSum);
  counter = 0;
  while (counter < array.length) {
    array.shift();
    if (array.length !== 0) {
      const sum = array.reduce((accum, currVal) => accum + currVal);
    result.push(sum);
    } else {
      return;
    }
  }

 return result
}

partsSums([0, 1, 3, 6, 10]);
