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
