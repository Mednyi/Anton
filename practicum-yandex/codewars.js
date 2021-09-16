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
function solution(str, ending){
  return str.endsWith(ending)// TODO: complete
}

// second version
const endsWith = (str, ending) => {
    for (let i = 0; i < ending.length; i++) {
        if (str[i + str.length - ending.length] !== ending[i]) {
            return false;
        }
    }
    return true;
};
console.log(endsWith('abc','bc'));

// The new "Avengers" movie has just been released! There are a lot of people at the cinema box office standing in a huge line. Each of them has a single 100, 50 or 25 dollar bill. An "Avengers" ticket costs 25 dollars.

// Vasya is currently working as a clerk. He wants to sell a ticket to every single person in this line.

// Can Vasya sell a ticket to every person and give change if he initially has no money and sells the tickets strictly in the order people queue?

// Return YES, if Vasya can sell a ticket to every person and give change with the bills he has at hand at that moment. Otherwise return NO.

// Examples:
// tickets([25, 25, 50]) // => YES 
// tickets([25, 100]) // => NO. Vasya will not have enough money to give change to 100 dollars
// tickets([25, 25, 50, 50, 100]) // => NO. Vasya will not have the righ


function tickets(peopleInLine){
  const cashBox = {
    "25": 0,
    "50": 0,
    "100": 0
  }
  
  for (let i = 0; i < peopleInLine.length; i++) {
    cashBox['' + peopleInLine[i]] += 1
    if (peopleInLine[i] > 25) {
      if (peopleInLine[i] === 100 && cashBox["25"] && cashBox["50"]) {
        cashBox["25"] -= 1
        cashBox["50"] -= 1
      } else if (peopleInLine[i] === 50 && cashBox["25"]) {
        cashBox["25"] -= 1
      } else {
        return 'NO'
      }
    }
  }
  
  return "YES"
  // ...
}