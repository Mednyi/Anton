const getFirstWords = (str) => {
  const sentenses = str.split('.')
  return sentenses.map((sentense) => sentense.trim().split(' ')[0]).join(', ')
}
// Reverse the string with in-built methods
// First way to do
function solution(str) {
  let splitString = str.split('')
  let reverseArray = splitString.reverse()
  let joinArray = reverseArray.join('')
  return joinArray
}

// Second way to do

function reverseString(str) {
  return str.split('').reverse().join('')
}
reverseString('hello')
console.log(reverseString('hello'))

// Third way to do
// Reverse a String With a Decrementing For Loop

function reverseString(str) {
  var newString = ''
  for (var i = str.length - 1; i >= 0; i--) {
    newString += str[i]
  }
  return newString
}

// Fourth way to do
// Reverse a String With Recursion
function reverseString(str) {
  if (str === '') return ''
  else return reverseString(str.substr(1)) + str.charAt(0)
}
reverseString('hello')

// Conditional (Ternary) Operator:
function reverseString(str) {
  return str === '' ? '' : reverseString(str.substr(1)) + str.charAt(0)
}

// Check to see if a string has the same amount of 'x's and 'o's.
// The method must return a boolean and be case insensitive. The string can contain any char.
// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

function XO(str) {
  let x = 0
  let o = 0

  for (let i = 0; i < str.length; i++) {
    if (str[i].toLowerCase() === 'x') {
      x++
    } else if (str[i].toLowerCase() === 'o') {
      o++
    }
    return x === o
  }
}

// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

// Examples:

// solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false

// version one
function solution(str, ending) {
  return str.endsWith(ending) // TODO: complete
}

// second version
const endsWith = (str, ending) => {
  for (let i = 0; i < ending.length; i++) {
    if (str[i + str.length - ending.length] !== ending[i]) {
      return false
    }
  }
  return true
}
console.log(endsWith('abc', 'bc'))

// The new "Avengers" movie has just been released! There are a lot of people at the cinema box office standing in a huge line. Each of them has a single 100, 50 or 25 dollar bill. An "Avengers" ticket costs 25 dollars.

// Vasya is currently working as a clerk. He wants to sell a ticket to every single person in this line.

// Can Vasya sell a ticket to every person and give change if he initially has no money and sells the tickets strictly in the order people queue?

// Return YES, if Vasya can sell a ticket to every person and give change with the bills he has at hand at that moment. Otherwise return NO.

// Examples:
// tickets([25, 25, 50]) // => YES
// tickets([25, 100]) // => NO. Vasya will not have enough money to give change to 100 dollars
// tickets([25, 25, 50, 50, 100]) // => NO. Vasya will not have the righ

function tickets(peopleInLine) {
  const cashBox = {
    '25': 0,
    '50': 0,
    '100': 0,
  }

  for (let i = 0; i < peopleInLine.length; i++) {
    cashBox['' + peopleInLine[i]] += 1
    if (peopleInLine[i] > 25) {
      if (peopleInLine[i] === 100) {
        if (cashBox['25'] && cashBox['50']) {
          cashBox['25'] -= 1
          cashBox['50'] -= 1
        } else if (cashBox['25'] >= 3) {
          cashBox['25'] -= 3
        } else {
          return 'NO'
        }
      } else if (peopleInLine[i] === 50 && cashBox['25']) {
        cashBox['25'] -= 1
      } else {
        return 'NO'
      }
    }
  }

  return 'YES'
  // ...
}

console.log(tickets([25, 100]))

// Given an array of integers.

// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers.

// If the input array is empty or null, return an empty array.

// Example
// For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].

function countPositivesSumNegatives(input) {
  if (input.length < 1) {
    return []
  }

  var newArray = [0, 0]

  for (var i = 0; i < input.length; i++) {
    if (input[i] > 0) {
      newArray[0] += 1
    } else {
      newArray[1] += input[i]
    }
  }
  return newArray
}

function countPositivesSumNegatives(input) {
  let sumOfPositive = 0
  let sumOfNegative = 0

  if (input == null || input.length < 1) {
    return []
  } else {
    input.map((item) => {
      if (item > 0) {
        sumOfPositive++
      } else if (item < 0) {
        sumOfNegative += item
      } else {
        return []
      }
    })
  }
  return [sumOfPositive, sumOfNegative]
}

console.log(
  countPositivesSumNegatives([
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    -11,
    -12,
    -13,
    -14,
    -15,
  ]),
)

// A square of squares
// You like building blocks. You especially like building blocks that are squares. And what you even like more, is to arrange them into a square of square building blocks!

// However, sometimes, you can't arrange them into a square. Instead, you end up with an ordinary rectangle! Those blasted things! If you just had a way to know, whether you're currently working in vain… Wait! That's it! You just have to check if your number of building blocks is a perfect square.

// Task
// Given an integral number, determine if it's a square number:

// In mathematics, a square number or perfect square is an integer that is the square of an integer; in other words, it is the product of some integer with itself.

// The tests will always use some integral number, so don't worry about that in dynamic typed languages.

// Examples
// -1  =>  false
//  0  =>  true
//  3  =>  false
//  4  =>  true
// 25  =>  true
// 26  =>  false

const isSquare = (n) => (n === 0 ? true : n > 0 && Math.sqrt(n) % 1 === 0)

// Another way to solve it

// var isSquare = function (n) {
//   for (var x = 0; x <= n; x++) {
//     if (n === 0) {
//       return true
//     } else if (n / x === x) {
//       return true
//     }
//   }

//   return false
// }

/* Техническое задание

Мяу! Я провожу тренировки и хочу понять, пройду ли квалификацию.

В течение тренировки я делаю несколько прыжков, и собираю длины прыжков в массив attempts.

Программа должна выбрать три лучших прыжка, а затем посчитать среднее значение этих трёх прыжков и записать его в переменную averageBest.

Квалификационное значение хранится в переменной qualificationDistance.

Если среднее от лучших трёх прыжков больше квалификационного значения, то я прошёл квалификацию и переменная qualified должна содержать true. Если квалификация не пройдена, то в qualified должно быть false.

*/

// let firstBestAttempts = attempts.reduce((a, b) => {
//   return Math.max(...attempts);
//   });

let qualificationDistance = 200
let attempts = [120, 150, 160, 201, 203, 180, 202]
// let attempts = [220, 220, 220]
let qualified = false
let averageBest = 0
let newArr = []
const sortedAttempts = attempts.sort((a, b) => a - b)
const middle = sortedAttempts[sortedAttempts.length - 4]

let getAverageBest = () => {
  for (let i = 0; i < sortedAttempts.length; i++) {
    if (sortedAttempts[i] > middle) {
      newArr.push(sortedAttempts[i])
    }
  }

  let b = newArr.reduce((acc, item) => acc + item, 1)
  return Math.floor(b / newArr.length)
}

averageBest = getAverageBest()

if (averageBest > qualificationDistance) {
  qualified = true
} else {
  qualified = false
}

console.log(getAverageBest())
