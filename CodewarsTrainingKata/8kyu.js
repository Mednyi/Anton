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

const countSheeps = (arrayOfSheep) => arrayOfSheep.filter(Boolean).length;


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

  while(i++ < num) {
    s += i;
  }

  return s;
}

// with recursion

const summation2 = function (num) {
  if (num < 1) return 0;
  return num  + summation2(num - 1);
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

// 6 Task

// 7 Task

// 8 Task

// 9 Task

// 10 Task

// 11 Task

// 12 Task

// 13 Task

// 14 Task