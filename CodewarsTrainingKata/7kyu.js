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
  
}