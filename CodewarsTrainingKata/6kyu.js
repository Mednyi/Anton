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
  arr.forEach(function(el){
    hashTable[el] ? hashTable[el]++ : hashTable[el] = 1;
  });

  for(let prop in hashTable) {
    if(hashTable[prop] % 2 !== 0) return Number(prop);
  }
}

function findOdd2(arr) {
  return arr.find((item) => arr.filter(el => el == item).length % 2);
}

// 2
// A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

function isPangram(string){
  const regexp = /[A-Z]/gi;

  return string.match(regexp);
}