// 1 Task
// Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

// For example,

// [true,  true,  true,  false,
//   true,  true,  true,  true ,
//   true,  false, true,  false,
//   true,  false, false, true ,
//   true,  true,  true,  true ,
//   false, false, true,  true]
// The correct answer would be 17.

// Hint: Don't forget to check for bad values like null/undefined

function countSheeps(arrayOfSheep) {
  // TODO May the force be with you
  let sheepCounter = 0;

  for (let i = 0; i < arrayOfSheep.length; i++) {
    if (arrayOfSheep[i] === undefined && arrayOfSheep[i] === null) {
      return;
    } else if (arrayOfSheep[i] === true) {
      sheepCounter++;
    }
  }

  return sheepCounter;
}

// Second way of doing this task

const countSheeps2 = (arrayOfSheep) => arrayOfSheep.filter(Boolean).length;


// 2 Task

// In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

// Examples
// makeNegative(1);    // return -1
// makeNegative(-5);   // return -5
// makeNegative(0);    // return 0
// makeNegative(0.12); // return -0.12
// Notes
// The number can be negative already, in which case no change is required.
// Zero (0) is not checked for any specific sign. Negative zeros make no mathematical sense.

function makeNegative(num) {
  // Code?
  if (-Math.abs(num) && num === 0) {
    return;
  }

  return -Math.abs(num);
}

//  My refactoring way of doing this task

function makeNegative(num) {
  // Code?
  return !(-Math.abs(num) && num === 0) ? -Math.abs(num) : num;
}

// 3 Task

// Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

// For example (Input -> Output):

// 2 -> 3 (1 + 2)
// 8 -> 36 (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8)

const summation = function (num) {
  let i = 1,
    s = 1;

  while (i++ < num) {
    s += i;
  }

  return s;
}

// with recursion

const summation2 = function (num) {
  if (num < 1) return 0;
  return num + summation2(num - 1);
}

// 4 Task

// This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.

function simpleMultiplication(number) {
  if (number % 2 === 0) {
    number *= 8;
  } else {
    number *= 9;
  }

  return number;
}

function simpleMultiplication2(number) {
  return (number % 2 === 0) ? number *= 8 : number *= 9;
}

// 5 Task
// It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.

function removeChar(str) {
  //You got this!
  let input_str = str;
  let output_str = '';

  for (var i = 1; i < input_str.length - 1; i++) {
    output_str += input_str[i];
  }

  return output_str;
};

function removeChar(str) {
  //You got this!
  return str.slice(1, -1);
};


// 6 Task
// Your task is to make two functions ( max and min, or maximum and minimum, etc., depending on the language ) that receive a list of integers as input, and return the largest and lowest number in that list, respectively.

// Examples (Input -> Output)
// * [4,6,2,1,9,63,-134,566]         -> max = 566, min = -134
// * [-52, 56, 30, 29, -54, 0, -110] -> min = -110, max = 56
// * [42, 54, 65, 87, 0]             -> min = 0, max = 87
// * [5]                             -> min = 5, max = 5
// Notes
// You may consider that there will not be any empty arrays/vectors.

const min = function (list) {
  return Math.min.apply(null, list);
}

const max = function (list) {
  return Math.max.apply(null, list);
}

const min2 = (list) => Math.min(...list);
const max2 = (list) => Math.max(...list);

const min3 = function (list) {
  let res = list[0];

  for (let i = 1; i < list.length; i++) {
    if (list[i] < res) {
      res = list[i];
    }
  }
  return res;
}

const max3 = function (list) {
  let res = list[0];

  for (let i = 1; i < list.length; i++) {
    if (list[i] > res) {
      res = list[i];
    }
  }
  return res;
}

const min4 = function(list){
  let min = list[0];

  for (let i of list) {
    if (i < min) {
      min = i;
    }
  }
    return min;
}

const max4 = function(list){
  let max = list[0];

  for (let i in list) {
    if (list[i] > max) {
      max = list[i];
    }
  }
    return max;
}

// 7 Task
// Write function bmi that calculates body mass index (bmi = weight / height2).

// if bmi <= 18.5 return "Underweight"

// if bmi <= 25.0 return "Normal"

// if bmi <= 30.0 return "Overweight"

// if bmi > 30 return "Obese"

function bmi(weight, height) {
  const bodyMassCoefficient  = weight / (height * 2);

  if (bodyMassCoefficient <= 18.5) {
    return 'Underweight'
  } else if (bodyMassCoefficient <= 25.0) {
    return 'Normal';
  } else if (bodyMassCoefficient <= 30.0) {
    return 'Overweight';
  } else if (bodyMassCoefficient > 30) {
    return 'Obese';
  }
}

function bmi2(weight, height) {
  const bodyMassCoefficient  = weight / (height * 2);

  switch (true) {
    case bodyMassCoefficient <= 18.5:
      return 'Underweight';
    case bodyMassCoefficient <= 25.0:
      return 'Normal';
    case bodyMassCoefficient <= 30.0:
      return 'Overweight';
    case bodyMassCoefficient > 30:
      return 'Obese'
  }
}

// 8 Task
// Your task is to create a function that does four basic mathematical operations.

// The function should take three arguments - operation(string/char), value1(number), value2(number).
// The function should return result of numbers after applying the chosen operation.

// Examples(Operator, value1, value2) --> output
// ('+', 4, 7) --> 11
// ('-', 15, 18) --> -3
// ('*', 5, 5) --> 25
// ('/', 49, 7) --> 7

function basicOp(operation, value1, value2) {

  if (operation === '+') {
    return value1 + value2
  }

  if (operation === '-') {
    return value1 - value2
  }

  if (operation === '*') {
    return value1 * value2
  }

  if (operation === '/') {
    return value1 / value2
  }
}

function basicOp2(operation, value1, value2) {
  operation = {
    add: '+',
    minus: '-',
    multiplying: '*',
    divide: '/'
  }

  switch (operation) {
    case '+':
      return value1 + value2;
    case '-':
      return value1 - value2;
    case '*':
      return value1 * value2;
    case '/':
      return value1 / value2;
  }
}

function basicOp3(operation, value1, value2) {
  const cases = {
    '+': value1 + value2,
    '-': value1 - value2,
    '*': value1 * value2,
    '/': value1 / value2
  };

  return cases[operation]
}


// 9 Task
// Simple, remove the spaces from the string, then return the resultant string.

// Solution 1.1
// Let's start with a loopsolution.

function noSpace(x) {
    let newStr = '';

    for(let i = 0; i < x.length; i++) {
        if(x[i] !== " "){
          newStr += x[i]
        }
    }
    return newStr
}
// Solution 2.1
// Let's solve it with regular expression.

function noSpace(x){
  return x.replace(/ /g, '')
}

// Solution 2.2
function noSpace(x){
  return x.replace(/\s/g, '')
}

// Solution 3.1
// Let's solve it with split and join.

function noSpace(x){
  return x.split(" ").join('')
}

// Solution 3.2
// Let's solve it with split and filter.

function noSpace(x) {
  return x.split("").filter(i => i !== ' ').join('')
}

// Solution 3.3
// Let's solve it with split and reducer.

function noSpace(x) {
  return x.split(" ").reduce((a, c) => a + c)
}

// 10 Task
// Introduction
// The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.

// Task
// Given a year, return the century it is in.

// Examples
// 1705 --> 18
// 1900 --> 19
// 1601 --> 17
// 2000 --> 20

// 11 Task

// 12 Task

// 13 Task

// 14 Task