// 1
// Given an array of integers, find the one that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.

// Examples
// [7] should return 7, because it occurs 1 time (which is odd).
// [0] should return 0, because it occurs 1 time (which is odd).
// [1,1,2] should return 2, because it occurs 1 time (which is odd).
// [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
// [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).

function findOdd(arr) {
  const hashTable = {};

  arr.forEach(function (el) {
    hashTable[el] ? hashTable[el]++ : (hashTable[el] = 1);
  });

  for (let prop in hashTable) {
    if (hashTable[prop] % 2 !== 0) return Number(prop);
  }
}

function findOdd2(arr) {
  return arr.find((item) => arr.filter((el) => el == item).length % 2);
}

// 2
// A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

function isPangram(string) {
  const regexp = /[A-Z]/gi;

  return string.match(regexp);
}

function isPangram(string) {
  const letters = "abcdefgijklmnopqrstuvwxyz";

  let str = string.toLowerCase();

  return letters.split("").every((letter) => str.includes(letter));
}

function isPangram(str) {
  var alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  str = str.toLowerCase();

  for (var i = 0; i < alphabet.length; i++) {
    if (str.indexOf(alphabet[i]) < 0) {
      return false;
    }
  }

  return true;
}

// 3
// The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.
// What if the string is empty? Then the result should be empty object literal, {}.

function count (string) {
  const arrString = string.split(' ');
  let count = 0;

  if (string.length === 0) {
    return {};
  }

  return Object.assign({}, arrString.map(item => ({

  })));
}

function count (string) {
  return string.split('').reduce(function (acc, c) {
    return acc[c] = (acc[c] || 0) + 1, acc;
  }, {});
}

function count (string) {
  let a = {};

  for (let i = 0; i < string.length; i++) {
    a[string[i]] ? a[string[i]]++ : a[string[i]]=1;
  }
  return a;
}