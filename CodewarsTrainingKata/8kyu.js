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
  return x.replace(/ /g, '');
}

// Solution 2.2
function noSpace(x){
  return x.replace(/\s/g, '');
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

function century(year) {
  const century = Math.ceil(year / 100);

  return century;
}

const century2 = year => Math.ceil(year/100)

// 11 Task
// Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.

function boolToWord( bool ){
  return bool ? 'Yes' : 'No';
}

function boolToWord2( bool ){
  if (bool) {
    return 'Yes';
  } else {
    return 'No';
  }
}

// 12 Task
// Create a function which answers the question "Are you playing banjo?".
// If your name starts with the letter "R" or lower case "r", you are playing banjo!

// The function takes a name as its only argument, and returns one of the following strings:

// name + " plays banjo"
// name + " does not play banjo"
// Names given are always valid strings.

function areYouPlayingBanjo(name) {
  // Implement me
  if (name[0].toLowerCase() === 'r') {
    return `${name} plays banjo`
  }
  return `${name} does not play banjo`;
}

function areYouPlayingBanjo2(name) {
  return (name[0].toLowerCase() === 'r') ? `${name} plays banjo` : `${name} does not play banjo`;
}

// 13 Task
// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

function evenOrOdd(number) {
  if (number % 2 === 0) return 'Even';
  return 'Odd';
}

function evenOrOdd(number) {
  return (number % 2 === 0) ? 'Even' : 'Odd';
}

// 14 Task
// Write a function that takes an array of numbers and returns the sum of the numbers. The numbers can be negative or non-integer. If the array does not contain any numbers then you should return 0.

// Examples
// Input: [1, 5.2, 4, 0, -1]
// Output: 9.2

// Input: []
// Output: 0

// Input: [-2.398]
// Output: -2.398

function sum (numbers) {
  "use strict";
let result = 0;

for (let i = 0; i < numbers.length; i++) {
  if (numbers.length === 0) return;

  result += numbers[i];
}

return result;
};

function sum2(numbers) {
  return numbers.reduce((a, b) => a + b, 0);
}


// 15 Task
// Implement a function which convert the given boolean value into its string representation.

// Note: Only valid inputs will be given.

function booleanToString(b){
  return String(b);
}

function booleanToString2(b){
  return b.toString();
}

function booleanToString3(b){
  return b ? 'true' : 'false';
}

function booleanToString4(b){
  return b+'';
}


// 16 Task
// Write a function to split a string and convert it into an array of words.

// Examples (Input ==> Output):
// "Robin Singh" ==> ["Robin", "Singh"]

// "I love arrays they are my favorite" ==> ["I", "love", "arrays", "they", "are", "my", "favorite"]

function stringToArray(string){
  return string.split(' ');
}

function stringToArray(string){
  let array = [];
  let temp ='';

  for (let i=0; i<string.length; i++){
    if (string[i] !== ' ') {
      temp += string[i];
    } else {
      array.push(temp);
      temp = '';
    }

    array.push(temp);
  }

  return array;
}

// 17 Task
// All of the animals are having a feast! Each animal is bringing one dish. There is just one rule: the dish must start and end with the same letters as the animal's name. For example, the great blue heron is bringing garlic naan and the chickadee is bringing chocolate cake.
// Write a function feast that takes the animal's name and dish as arguments and returns true or false to indicate whether the beast is allowed to bring the dish to the feast.
// Assume that beast and dish are always lowercase strings, and that each has at least two letters. beast and dish may contain hyphens and spaces, but these will not appear at the beginning or end of the string. They will not contain numerals.

function feast(beast, dish) {
  const firstBeastLetter = beast[0];
  const lastBeastLetter = beast[beast.length - 1];

  const firstDishLetter = dish[0];
  const lastDishLetter = dish[dish.length - 1];

  if (firstBeastLetter + lastBeastLetter === firstDishLetter + lastDishLetter) {
    return true;
  }

  return false;
}

function feast(beast, dish) {
  return dish.startsWith(beast[0]) && dish.endsWith(beast[beast.length-1])
}

const feast = (beast, dish) => beast[0] + beast.slice(-1) === dish[0] + dish.slice(-1);


// 18 Task
// You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.
// Array can contain numbers or strings. X can be either.
// Return true if the array contains the value, false if not.

function check(a, x) {
  return a.some(item => item === x);  // your code here
}

const check = (a,x) => a.includes(x);

function check(a,x){
  let foundTarget = false;

  a.forEach((v,i,A)=>{
    if (v==x) {
      foundTarget = true
    }
  });

  return foundTarget;
}

function check(a, x) {

  for (let i = 0; i < a.length; i++) {
    console.log(a[i]);
    if (a[i] == x) {
      return true
    }
  }
  return false;
}


// 19 Task
// Return the number (count) of vowels in the given string.
// We will consider a, e, i, o, u as vowels for this Kata (but not y).
// The input string will only consist of lower case letters and/or spaces.

function getCountVowels(str) {
  let countVowels = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === 'y') {
      return;
    }

    if (str[i].toLowerCase().includes('a e i o u')) {
      countVowels++;
    }
  }

  return countVowels;
}


// 20 Task
// Your classmates asked you to copy some paperwork for them. You know that there are 'n' classmates and the paperwork has 'm' pages.
// Your task is to calculate how many blank pages do you need. If n < 0 or m < 0 return 0.
// Example:
// n= 5, m=5: 25
// n=-5, m=5:  0

function paperwork(n, m) {
  if (n < 0 || m < 0) {
    return 0;
  }

  return n * m;
}

function paperwork(n, m) {
  return n > 0 && m > 0 ? n * m : 0
}


// 21 Task
// Nathan loves cycling.
// Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.
// You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.
// For example:
// time = 3 ----> litres = 1
// time = 6.7---> litres = 3
// time = 11.8--> litres = 5

function litres(time) {
  const litresPerHour = 0.5;

  return  Math.floor(litresPerHour * time);
}


// 22 Task
// There was a test in your class and you passed it. Congratulations!
// But you're an ambitious person. You want to know if you're better than the average student in your class.
// You receive an array with your peers' test scores. Now calculate the average and compare your score!
// Return True if you're better, else False!
// Note:
// Your points are not included in the array of your class's points. For calculating the average point you may add your point to the given array!

function betterThanAverage(classPoints, yourPoints) {
  const averageClassPoints = classPoints.reduce((acc, next) => acc + next) / classPoints.length;

  return yourPoints > averageClassPoints ? true : false;
}

function betterThanAverage(classPoints, yourPoints) {
  let sum = 0;

  for (let i = 0; i < classPoints.length; i++){
  	sum += classPoints[i];
  }
  	sum = sum / classPoints.length;

  if(sum > yourPoints) {
  	return false
  } else {
  	return true
  }
}


// 23 Task
// Given a string, you have to return a string in which each character (case-sensitive) is repeated once.
// Examples (Input -> Output):
// * "String"      -> "SSttrriinngg"
// * "Hello World" -> "HHeelllloo  WWoorrlldd"
// * "1234!_ "     -> "11223344!!__  "
// Good Luck!

function doubleChar(str) {
  let newStr = '';

  for (let i = 0; i < str.length; i++) {
    newStr += str[i].repeat(2);
  }

  return newStr;
}

function doubleChar(str) {
  return str.split(' ').map(item => item + item).join('');
}

function doubleChar(str) {
  return str.replace(/(.)/g, "$1$1")
}

function doubleChar(str) {
  return [...str].map(item => item + item).join('');
}



// 24 Task
// Write a function which calculates the average of the numbers in a given list.
// Note: Empty arrays should return 0.

function findAverage(array) {
  if (array.length === 0) {
    return 0;
  }
  // your code here
  return array.reduce((acc, next) => acc + next) / array.length;
}


// 25 Task
// You were camping with your friends far away from home, but when it's time to go back, you realize that your fuel is running out and the nearest pump is 50 miles away! You know that on average, your car runs on about 25 miles per gallon. There are 2 gallons left.
// Considering these factors, write a function that tells you if it is possible to get to the pump or not.
// Function should return true if it is possible and false if not.

const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  return distanceToPump <= mpg * fuelLeft;
};

const zeroFuel2 = (distanceToPump, mpg, fuelLeft) => {
  if (mpg * fuelLeft >= distanceToPump) {
    return true;
  } else {
    return false;
  }
};


// 26 Task
// Description
// We need a function that can transform a string into a number. What ways of achieving this do you know?
// Note: Don't worry, all inputs will be strings, and every string is a perfectly valid representation of an integral number.
// Examples
// "1234" --> 1234
// "605"  --> 605
// "1405" --> 1405
// "-7" --> -7

const stringToNumber = function(str){
  // put your code here
  return Number(str);
}

var stringToNumber2 = function(str){
  return parseInt(str);
}

var stringToNumber3 = function(str){
  return +str;
}

// the alternative method without parse
const stringToNumber4 = function(str, arr = [...str], out = 0){
  if( arr[0] === '-' ){ arr.shift() }
  arr.reverse()

  const nums = {1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9, 0: 0};

  for (let i = 0; i < arr.length; i++){
    out += nums[arr[i]] * (10**i)
  }
  return str[0] === '-' ? -out : out
}

// 27 Task
// We need a function that can transform a number (integer) into a string.
// What ways of achieving this do you know?
// Examples (input --> output):
// 123  --> "123"
// 999  --> "999"
// -100 --> "-100"

function numberToString(num) {
  return num.toString();
}

function numberToString(num) {
  return String(num);
}

function numberToString(num) {
  return '' + num;
}

const numberToString = num => `${num}`;


// 28 Task
// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.
// Return your answer as a number.

function sumMix(x) {
  const numbers = [...x].map(item => Number(item));

  console.log(numbers);

  return numbers.reduce((acc, item) => acc + item);
}

function sumMix(x){
  let result = 0;

  for (let n of x) {
    result += parseInt(n);
  }

  return result;
}

function sumMix(x){
  return x.map(a => +a).reduce((a, b) => a + b);
}


// 29 Task
// When provided with a number between 0-9, return it in words.
// Input :: 1
// Output :: "One".

function switchItUp(number){
  switch(number) {
    case 0:
      return 'Zero';
    case 1:
      return 'One';
    case 2:
      return 'Two';
    case 3:
      return 'Three';
    case 4:
      return  'Four';
    case 5:
      return 'Five';
    case 6:
      return 'Six';
    case 7:
      return 'Seven';
    case 8:
      return 'Eight';
    case 9:
      return 'Nine';
    default:
      return 'Unknown number';
  }
}

function switchItUp(number){
  return  ['Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'][number];
}

// 30 Task
// Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.
// Numerical Score	Letter Grade
// 90 <= score <= 100	'A'
// 80 <= score < 90	'B'
// 70 <= score < 80	'C'
// 60 <= score < 70	'D'
// 0 <= score < 60	'F'
// Tested values are all between 0 and 100. Theres is no need to check for negative values or values greater than 100.

function getGrade (s1, s2, s3) {
  const averageGrade = Math.floor((s1 + s2 + s3) / 3);

  switch(true) {
    case (averageGrade >= 90):
      return 'A';
    case (averageGrade >= 80):
      return 'B';
    case (averageGrade >= 70):
      return 'C';
    case (averageGrade >= 60):
      return 'D';
    default:
      return 'F';
  }
}

function getGrade (s1, s2, s3) {
  const score = (s1 + s2 + s3) / 3;

  if (score >= 90) {
    return 'A';
  } else if (score >= 80) {
    return 'B';
  } else if (score >= 70) {
    return 'C';
  } else if (score >= 60) {
    return 'D';
  } else {
    return 'F';
  }
}


// 31 Task
// Your start-up's BA has told marketing that your website has a large audience in Scandinavia and surrounding countries. Marketing thinks it would be great to welcome visitors to the site in their own language. Luckily you already use an API that detects the user's location, so this is an easy win.
// The Task
// Think of a way to store the languages as a database (eg an object). The languages are listed below so you can copy and paste!
// Write a 'welcome' function that takes a parameter 'language' (always a string), and returns a greeting - if you have it in your database. It should default to English if the language is not in the database, or in the event of an invalid input.

function greet(language) {
  let result = ``;

  const dbLang = {
    english: 'Welcome',
    czech: 'Vitejte',
    danish: 'Velkomst',
    dutch: 'Welkom',
    estonian: 'Tere tulemast',
    finnish: 'Tervetuloa',
    flemish: 'Welgekomen',
    french: 'Bienvenue',
    german: 'Willkommen',
    irish: 'Failte',
    italian: 'Benvenuto',
    latvian: 'Gaidits',
    lithuanian: 'Laukiamas',
    polish: 'Witamy',
    spanish: 'Bienvenido',
    swedish: 'Valkommen',
    welsh: 'Croeso'
  }

const { english, czech, danish, dutch, estonian, finnish, flemish, french, german, irish, italian, latvian, lithuanian, polish, spanish, swedish, welsh } = dbLang;

if (language === 'english') {
  result = `${english}`;
} else if (language === 'czech') {
  result = `${czech}`;
} else if (language === 'danish') {
  result = `${danish}`;
} else if (language === 'dutch') {
  result = `${dutch}`;
} else if (language === 'estonian') {
  result = `${estonian}`;
} else if (language === 'finnish') {
  result = `${finnish}`
} else if (language === 'flemish') {
  result = `${flemish}`
} else if (language === 'french') {
  result = `${french}`
} else if (language === 'german') {
  result = `${german}`
} else if (language === 'irish') {
  result = `${irish}`
} else if (language === 'italian') {
  result = `${italian}`
} else if (language === 'latvian') {
  result = `${latvian}`
} else if (language === 'lithuanian') {
  result = `${lithuanian}`
} else if (language === 'polish') {
  result = `${polish}`
} else if (language === 'spanish') {
  result = `${spanish}`
} else if (language === 'swedish') {
  result = `${swedish}`
} else if (language === 'welsh') {
  result = `${welsh}`
} else {
  result = `${english}`
}

  return result;
}

function greet(language) {
	const welcomes = {
    english: 'Welcome',
    czech: 'Vitejte',
    danish: 'Velkomst',
    dutch: 'Welkom',
    estonian: 'Tere tulemast',
    finnish: 'Tervetuloa',
    flemish: 'Welgekomen',
    french: 'Bienvenue',
    german: 'Willkommen',
    irish: 'Failte',
    italian: 'Benvenuto',
    latvian: 'Gaidits',
    lithuanian: 'Laukiamas',
    polish: 'Witamy',
    spanish: 'Bienvenido',
    swedish: 'Valkommen',
    welsh: 'Croeso'
  };

  return language in welcomes ? welcomes[language] : welcomes.english;
};

function greet(language) {

	switch(language){
    case "english": return "Welcome";
    case "czech": return "Vitejte";
    case "danish": return "Velkomst";
    case "dutch": return "Welkom";
    case "estonian": return "Tere tulemast";
    case "finnish": return "Tervetuloa";
    case "flemish": return "Welgekomen";
    case "french": return "Bienvenue";
    case "german": return "Willkommen";
    case "irish": return "Failte";
    case "italian": return "Benvenuto";
    case "latvian": return "Gaidits";
    case "lithuanian": return "Laukiamas";
    case "polish": return "Witamy";
    case "spanish": return "Bienvenido";
    case "swedish": return "Valkommen";
    case "welsh": return "Croeso";
    default: return "Welcome";
  }

}


// 32 Task
// You get an array of numbers, return the sum of all of the positives ones.
// Example [1,-4,7,12] => 1 + 7 + 12 = 20
// Note: if there is nothing to sum, the sum is default to 0.

function positiveSum(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      sum += arr[i];
    }
  }

  return sum;
}

function positiveSum(arr) {
  return arr.reduce((acc, n) => n > 0 ? acc + n : acc, 0);
}

function positiveSum (arr) {
  return arr.filter(x => x >= 0).reduce((a, c) => a + c, 0);
}

// 33 Task
// Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.
// For example: month 2 (February), is part of the first quarter; month 6 (June), is part of the second quarter; and month 11 (November), is part of the fourth quarter.
// Constraint:
// 1 <= month <= 12

const quarterOf = (month) => {
  if (month == 1 || month == 2 || month == 3) {
    return 1;
  } else if (month == 4 || month == 5 || month == 6) {
    return 2;
  } else if (month == 7 || month == 8 || month == 9) {
    return 3;
  } else {
    return 4;
  }
}

const quarterOf2 = (month) => {
  if (month <= 3) {
    return 1
  } else if (month <= 6) {
    return 2
  } else if (month <= 9) {
    return 3
  } else if (month <= 12) {
    return 4
  }
}

const quarterOf3 = (month, quarter = 4) => {
	switch (month) {
		case 1:
		case 2:
		case 3:
			quarter = 1;
			break;
		case 4:
		case 5:
		case 6:
			quarter = 2;
			break;
		case 7:
		case 8:
		case 9:
			quarter = 3;
			break;
	}
	return quarter;
};

// 34 Task
// Can you find the needle in the haystack?
// Write a function findNeedle() that takes an array full of junk but containing one "needle"
// After your function finds the needle it should return a message (as a string) that says:
// "found the needle at position " plus the index it found the needle, so:
// Example(Input --> Output)
// ["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"] --> "found the needle at position 5"

function findNeedle(haystack) {
  let result = '';

  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] === 'needle') {
      result = `found the needle at position ${i}`
    }
  }

  return result;
}


function findNeedle(haystack) {
  return "found the needle at position " + haystack.indexOf("needle");
}

// 35 Task
// Create a function that gives a personalized greeting. This function takes two parameters: name and owner.
// Use conditionals to return the proper message:
// case	return
// name equals owner	'Hello boss'
// otherwise	'Hello guest'

function greet (name, owner) {
  if (name === owner) {
    return `Hello boss`
  } else {
    return `Hello guest`
  }
}

function greet (name, owner) {
  return name === owner ? 'Hello boss' : 'Hello guest';
}

// 36 Task
// This function should test if the factor is a factor of base.
// Return true if it is a factor or false if it is not.
// About factors
// Factors are numbers you can multiply together to get another number.
// 2 and 3 are factors of 6 because: 2 * 3 = 6
// You can find a factor by dividing numbers. If the remainder is 0 then the number is a factor.
// You can use the mod operator (%) in most languages to check for a remainder
// For example 2 is not a factor of 7 because: 7 % 2 = 1
// Note: base is a non-negative number, factor is a positive number.

function checkForFactor (base, factor) {
  return  base % factor === 0 ? true : false;
}

function checkForFactor (base, factor) {
  let check = base % factor;

  if(check == 0){
    return true
  }
    return false
}

// 37 Task
// Terminal game move function
// In this game, the hero moves from left to right. The player rolls the dice and moves the number of spaces indicated by the dice two times.
// Create a function for the terminal game that takes the current position of the hero and the roll (1-6) and return the new position.
// Example:
// move(3, 6) should equal 15

function move (position, roll) {
  return position + roll + roll;
}



// 38 Task
// Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.
// Example:
// ["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]
// None of the arrays will be empty, so you don't have to worry about that!

function removeEveryOther(arr) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] + 1) {
      result += arr[i];
    }
  }

  return result;
}

// 39 Task

// 40 Task

// 41 Task

// 42 Task

// 43 Task

// 44 Task

// 45 Task

// 46 Task

// 47 Task