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
