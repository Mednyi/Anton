// 1
// Trolls are attacking your comment section!

// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

// 1 Your task is to write a function that takes a string and return a new string with all vowels removed.

// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

// Note: for this kata y isn't considered a vowel.
// First way
function disemvowel(str) {
  let newString = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] != "a" && str[i] != "A"  && str[i] != "e" && str[i] != "E" && str[i] != "i" && str[i] != "I" && str[i] != "o" && str[i] != "O" && str[i] != "u" && str[i] != "U") {
      newString += str[i];
    };
  };

  return newString;
}
// Second way
function disemvowel(str) {
  return str.replace(/[aeiou]/gi, '');
}

// Third way
const vowels = 'aeiou';

function disemvowel(str) {
  return str
    .split('')
    .filter(letter => !vowels.includes(letter.toLowerCase()))
    .join('');
}

// 2
// In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

// Example
// filter_list([1,2,'a','b']) == [1,2]
// filter_list([1,'a','b',0,15]) == [1,0,15]
// filter_list([1,2,'aasf','1','123',123]) == [1,2,123]

// my solution
function filter_list(l) {
  // Return a new array with the strings filtered out
  return l.filter(item => typeof item != typeof 'string');
}
//  another solution
function filter_list2(l) {
  return l.filter(e => Number.isInteger(e));
}
// solution with for loop
function filter_list(l) {
  let result = [];

  for (let i = 0; i < l.length; i++){
    if (typeof l[i] != 'string')
      result.push(l[i]);
   }
  return result;
}

// 2
// Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

// Note: a and b are not ordered!

// Examples (a, b) --> output (explanation)
// (1, 0) --> 1 (1 + 0 = 1)
// (1, 2) --> 3 (1 + 2 = 3)
// (0, 1) --> 1 (0 + 1 = 1)
// (1, 1) --> 1 (1 since both are same)
// (-1, 0) --> -1 (-1 + 0 = -1)
// (-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)
// Your function should only return a number, not the explanation about how you get that number.

function getSum(a, b) {
  if (a == b) return a;
  else if (a < b) return a + getSum(a + 1, b);
  else return a + getSum(a - 1, b);
}

// 3
// Make a program that filters a list of strings and returns a list with only your friends name in it.

// If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...

// Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]

// i.e.

// friend ["Ryan", "Kieran", "Mark"] `shouldBe` ["Ryan", "Mark"]
// Note: keep the original order of the names in the output.

function friend(friends){
  //your code here
  return friends.filter(f => f.length === 4);
}

function friend2(friends){
  //your code here
  let realFriends = [];

  for(i = 0; i < friends.length; i++){
    if(friends[i].length == 4 && isNaN(friends[i])){
      realFriends.push(friends[i]);
    }
  }

  return realFriends;
}


// 4
// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1. (81-1-1-81)

// Example #2: An input of 765 will/should return 493625 because 72 is 49, 62 is 36, and 52 is 25. (49-36-35)

// Note: The function accepts an integer and returns an integer.

// Happy Coding!

// Нужно возвести каждую цифру принимаего числа в квадрат и сконкатенировать их и вернуть

function squareDigits(num){
  if (num <= 0) return 0;

  const newDigits = num.toString().split('').map(n => n * n).join('');

  return +newDigits;
}

const squareDigits = num => {
  return +Array.from(num.toString(), n => n * n).join('');
}

function squareDigits(num){
  const string = num.toString();
  let results = [];
  for (let i = 0; i < string.length; i++){
    results[i] = string[i] * string[i];
  }
  return Number(results.join(''));
};

// 5
// Return the number (count) of vowels in the given string.
// We will consider a, e, i, o, u as vowels for this Kata (but not y).
// The input string will only consist of lower case letters and/or spaces.

function getCount(str) {
  let strLower = str.toLowerCase();
  let countVowels = 0;

  for (let i = 0; i < strLower.length; i++) {
    if (strLower[i].includes('a') || strLower[i].includes('e') || strLower[i].includes('i') || strLower[i].includes('o') || strLower[i].includes('u')) {
      countVowels++;
    }
  }

  return countVowels;
}

function getCount(str) {
  let vowelsCount = 0;
  let vowels = ["a","e","i","o","u"];

  for(let i = 0; i < str.length; i++) {
    for(let j = 0; j < vowels.length; j++)  {
      if(str[i] === vowels[j]){
        vowelsCount++;
      }
    }
  }

  return vowelsCount;
}

function getCount(str) {
  let vowelsCount = 0;

  for (index in str){
    switch (str[index]) {
      case 'a':
      case 'e':
      case 'i':
      case 'o':
      case 'u':
      vowelsCount++;
      break;
    }
  }
  return vowelsCount;
}

function getCount(str) {
  let vowelsCount = 0;

  vowelsCount = str.split("").reduce((total, item) => {
    if(["a","e","i","o","u"].includes(item))
      total += 1;
    return total
  }, 0);

  return vowelsCount;
}


// 6
//  In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.
// Examples
// highAndLow("1 2 3 4 5");  // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"
// Notes
// All numbers are valid Int32, no need to validate them.
// There will always be at least one number in the input string.
// Output string must be two numbers separated by a single space, and highest number is first.
function highAndLow(numbers) {

  return numbers.split(' ').map(Number).reduce( item => {
    `${Math.max(item)} ${Math.min(item)}`;
  }, '');
}

function highAndLow(numbers) {
  numbers = numbers.split(' ').map(Number);
  const max = Math.max(...numbers);
  const min = Math.min(...numbers);
  return `${max} ${min}`;
}

function highAndLow(numbers){
  numbers = numbers.split(' ');
  return `${Math.max(...numbers)} ${Math.min(...numbers)}`;
}


// 7
// Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.
// Examples:
// Input: 42145 Output: 54421
// Input: 145263 Output: 654321
// Input: 123456789 Output: 987654321

function descendingOrder(n){
  return parseInt(n.toString().split('').sort((max, min) => min - max).join(''));
}

function descendingOrder(n){
  return parseInt(n.toString().split('').sort(function(a, b){
    return b - a;
  }).join(''));
}

// 8
// Given a list of integers, determine whether the sum of its elements is odd or even.
// Give your answer as a string matching "odd" or "even".
// If the input array is empty consider it as: [0] (array with a zero).
// Examples:
// Input: [0]
// Output: "even"
// Input: [0, 1, 4]
// Output: "odd"
// Input: [0, -1, -5]
// Output: "even"

function oddOrEven(array) {
  if (array.length == 0) {
    return 'even';
  } else {
    const sumOfElements = array.reduce((previousValue, currentValue) => previousValue + currentValue);

    return (sumOfElements % 2 === 0) ? 'even' : 'odd';
  }
}

function oddOrEven(arr) {
  return arr.reduce((a, b) => a + b, 0) % 2 ? 'odd' : 'even';
}

function oddOrEven(array) {
  let result = 0;

  for (let i = 0; i < array.length; i++) {
    result += array[i];
  }

  if (result % 2 == 0) {
    return "even";
  } else {
    return "odd";
  }
}

// 9
// Simple, given a string of words, return the length of the shortest word(s).
// String will never be empty and you do not need to account for different data types.

function findShort(str) {
  if (str.length === 0) return;

  let newStr = [];

  for (let i = 0; i < newStr.length; i++) {
    newStr = [...newStr[i]];

    for (let j = 0; j < i; j++) {

    }
  }
}

function findShort(str) {
  if (str.length === 0) return;

  let newStr = str.split(' ');

  return newStr.filter(item => parseInt(Math.min(item))).length;
}

function findShort(s) {

  let newStr = s.split(' ');
  let shortest = Infinity;

//   return newStr.filter(item => Math.min(+item)).length;
  for (let i = 0; i < newStr.length; i++) {
    let wordLength = newStr[i].length;

    if (wordLength < shortest) {
      shortest = wordLength;
    }
  }

  return shortest;
}

// 10
// Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.
// Example
// Test.assertSimilar( capitals('CodEWaRs'), [0,3,4,6] );

const capitals = function (word) {
	// Write your code here
  const newWord = word.split('');
  let result = [];

  for (let i = 0; i < newWord.length; i++) {
    if (newWord[i] === newWord[i].toUpperCase()) {
      result.push(newWord.indexOf(newWord[i]));
    }
  }
  return result;
};

const capitals2 = function (word) {
  return word.split('').map(w => w === w.toUpperCase ? w.indexOf(w) : null);
};


// 11
// Write a function that returns both the minimum and maximum number of the given list/array.
// Examples (Input --> Output)
// [1,2,3,4,5] --> [1,5]
// [2334454,5] --> [5,2334454]
// [1]         --> [1,1]

function minMax(arr){
  const maxEl = Math.max(...arr);
  const minEl = Math.min(...arr);

  return [minEl, maxEl]; // fix me!
}

function minMax(arr){
  return [Math.min(...arr), Math.max(...arr)];
}


// 12
// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.
// If the function is passed a valid PIN string, return true, else return false.
// Examples (Input --> Output)
// "1234"   -->  true
// "12345"  -->  false
// "a234"   -->  false

function validatePIN (pin) {
    let newArray = [];

    for(let i = 0; i < pin.length; i++){
      newArray.push(parseInt(pin[i]))
    }

    if(newArray.includes(NaN)) return false
    if(newArray.length < 4 || newArray.length > 6  || newArray.length === 5) return false

    return true
  //wow that was hard one for begginer
}

function validatePIN (pin) {
  var pattern1 = /^\d{4}$/
  var pattern2 = /^\d{6}$/
  if(pin.match(pattern1)||pin.match(pattern2)){
    return true
  }
  return false
}

// 13
// Write a function that takes an array of strings as an argument and returns a sorted array containing the same strings, ordered from shortest to longest.
// For example, if this array were passed as an argument:
// ["Telescopes", "Glasses", "Eyes", "Monocles"]
// Your function would return the following array:
// ["Eyes", "Glasses", "Monocles", "Telescopes"]
// All of the strings in the array passed to your function will be different lengths, so you will not have to decide how to order multiple strings of the same length.

function sortByLength(array) {
  // Return an array containing the same strings, ordered from shortest to longest
  return array.sort((a, b) => a.length - b.length);
};

function sortByLength(array) {
  let res = [];
  let i = 0;
  let j = 0;
  let sorted = array.map(el => el.length).sort((a, b) => a - b);
  for (let i of sorted) {
    for (let j of array) {
      if (i == j.length) {
        res.push(j);
      }
    }
  }
  return res;
}

// 14
// You are given an odd-length array of integers, in which all of them are the same, except for one single number.
// Complete the method which accepts such an array, and returns that single different number.
// The input array will always be valid!(odd - length >= 3)
// Examples
// [1, 1, 2] ==> 2
// [17, 17, 3, 17, 17, 17, 17] ==> 3

function stray(numbers) {
  //take first element
  let strayChar = numbers[0];

  // see if it is different from the next 2
  if (strayChar !== numbers[1] && strayChar !== numbers[2]) return strayChar;

  // if not find the first value that is different
  for (let i = 1; i < numbers.length; i++) {
    if (strayChar !== numbers[i]) return numbers[i];
  }
}

const stray = numbers => numbers.find(num => numbers.indexOf(num) === numbers.lastIndexOf(num));

// 15
// In mathematics, the factorial of a non-negative integer n, denoted by n!, is the product of all positive integers less than or equal to n. For example: 5! = 5 * 4 * 3 * 2 * 1 = 120. By convention the value of 0! is 1.
// Write a function to calculate factorial for a given input.If input is below 0 or above 12 throw an exception of type ArgumentOutOfRangeException (C#) or IllegalArgumentException(Java) or RangeException(PHP) or throw a RangeError(JavaScript) or ValueError(Python) or return -1(C).


function factorial(n) {
  // Calculate the factorial here
  const min = 0;
  const max = 12;

  if (n < min || n > max) {
    throw new RangeError('Параметр должен быть между ' + min + ' и ' + max);
  }

  return n > 1 ? n * factorial(n - 1) : 1;
}

function factorial(n) {
  if (n < 0 || n > 12) throw RangeError();
  var f = 1;
  while (n > 1) f *= n--;
  return f;
}

// 16
//Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.
// For example, when an array is passed like[19, 5, 42, 2, 77], the output should be 7.
// [10, 343445353, 3453445, 3453545353453] should return 3453455.

function sumTwoSmallestNumbers(numbers) {
  //Code here
  const min1 = Number([...numbers].slice(Math.min(...numbers)));

  console.log(min1);
}

sumTwoSmallestNumbers([5, 8, 12, 19, 22]);