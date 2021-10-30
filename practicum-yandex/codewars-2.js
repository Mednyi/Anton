// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

let strNumbers = '1234332456785586'

function fakeBin(x) {
  let arr = x.split('')

  for (let i = 0; i < arr.length; i++) {
    arr[i] = +arr[i]
    for (let j = i; j < arr.length; j++) {
      if (arr[j] < 5) {
        arr[j] = 0
      }
    }
    if (arr[i] >= 5) {
      arr[i] = 1
    }
  }

  return arr.join('')
}

console.log(fakeBin(strNumbers))





// A second way to solve it

function fakeBin(x) {
  return x
    .split('')
    .map((n) => (n < 5 ? 0 : 1))
    .join('')
}

//  The third way with a regex

function fakeBin(x) {
  return x.replace(/[0-4]/g, '0').replace(/[5-9]/g, '1')
}


// Write a function that will convert a string into title case, given an optional 
// list of exceptions (minor words). The list of minor words will be given as a string 
// with each word separated by a space. Your function should ignore the case of the minor
//  words string -- it should behave in the same way even if the case of the minor word string is changed.


// First argument (required): the original string to be converted.
// Second argument (optional): space-delimited list of minor words 
// that must always be lowercase except for the first word in the string. 
// The JavaScript/CoffeeScript tests will pass undefined when this argument is unused.

function titleWord(word) {
  const wordArr = word.split('');
  wordArr[0] = wordArr[0].toUpperCase();
  return wordArr.join('');
}

function titleCase(title, minorWords) {
  if (title) {
    title = title.toLowerCase();
    const titleWords = title.split(' ');
    titleWords[0] = titleWord(titleWords[0]);
    let minorWordsArr = [];
    if (minorWords) {
      minorWords = minorWords.toLowerCase();
      minorWordsArr = minorWords.split(' ');
    }
    for (let i = 1; i < titleWords.length; i++) {
      if (!minorWordsArr.includes(titleWords[i])) {
        titleWords[i] = titleWord(titleWords[i]);
      }
    }
    return titleWords.join(' ');
  }
  return title;
}

console.log(titleCase('a clash of KINGS', 'a an the of'));

// Complete the function/method so that it returns the url with anything after the anchor (#) removed.

// Examples
// returns 'www.codewars.com'
// removeUrlAnchor('www.codewars.com#about')

// returns 'www.codewars.com?page=1' 
// removeUrlAnchor('www.codewars.com?page=1') 

function removeUrlAnchor(url){
  return url.split('#')[0]
}

// Task
// Write a function dirReduc which will take an array of strings and returns an array of strings with the needless directions removed (W<->E or S<->N side by side).

// The Haskell version takes a list of directions with data Direction = North | East | West | South.
// The Clojure version returns nil when the path is reduced to nothing.
// The Rust version takes a slice of enum Direction {North, East, West, South}.

// describe("Tests", () => {
//   it("test", () => {
// Test.assertSimilar(dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]), ["WEST"])
// Test.assertSimilar(dirReduc(["NORTH", "WEST", "SOUTH", "EAST"]), ["NORTH", "WEST", "SOUTH", "EAST"])
// Test.assertSimilar(dirReduc(["NORTH", "SOUTH", "EAST", "WEST", "EAST", "WEST"]), [])

//   });
// });

function dirReduc(arr){
  for (let  i = 0;  i < arr.length - 1;  i++) {
    if (arr[i] === 'NORTH' && arr[i + 1] === 'SOUTH' || arr[i] === 'SOUTH' && arr[i + 1] === 'NORTH') {
      arr.splice(i, 2)
      i = -1
    } else if (arr[i] === 'WEST' && arr[i + 1] === 'EAST' || arr[i] === 'EAST' && arr[i + 1] === 'WEST') {
      arr.splice(i, 2)
      i = -1
    }
  }
  return arr
}

dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"])

// Finish the solution so that it sorts the passed in array of numbers. If the function passes in an empty array or null/nil value then it should return an empty array.

// For example:

// solution([1, 2, 10, 50, 5]); // should return [1,2,5,10,50]
// solution(null); // should return []

function solution(nums){
  if (!nums || nums.length === 0) {
    return []
  } else {
    return nums.sort((a , b) => a - b)
  }
}

// An isogram is a word that has no repeating letters, consecutive or non-consecutive. 
// Implement a function that determines whether a string that contains only letters 
// is an isogram. Assume the empty string is an isogram. Ignore letter case.

// "Dermatoglyphics" --> true
// "aba" --> false
// "moOse" --> false (ignore letter casing)

function isIsogram(str) {
  const strChanged = str.toLowerCase().split('');
  for (let i = 0; i < strChanged.length; i++) {
    for (let j = i + 1; j < strChanged.length; j++) {
      if (strChanged[i] === strChanged[j]) {
        return false;
      }
    }
  }
  return true;
}

// A bookseller has lots of books classified in 26 categories labeled A, B, ... Z. Each book has a code c of 3, 4, 5 or more characters. The 1st character of a code is a capital letter which defines the book category.

// In the bookseller's stocklist each code c is followed by a space and by a positive integer n (int n >= 0) which indicates the quantity of books of this code in stock.

// For example an extract of a stocklist could be:

// L = {"ABART 20", "CDXEF 50", "BKWRK 25", "BTSQZ 89", "DRTYM 60"}.
// or
// L = ["ABART 20", "CDXEF 50", "BKWRK 25", "BTSQZ 89", "DRTYM 60"] or ....
// You will be given a stocklist (e.g. : L) and a list of categories in capital letters e.g :

// M = {"A", "B", "C", "W"} 
// or
// M = ["A", "B", "C", "W"] or ...
// and your task is to find all the books of L with codes belonging to each category of M and to sum their quantity according to each category.

// For the lists L and M of example you have to return the string (in Haskell/Clojure/Racket a list of pairs):

// (A : 20) - (B : 114) - (C : 50) - (W : 0)
// where A, B, C, W are the categories, 20 is the sum of the unique book of category A, 114 the sum corresponding to "BKWRK" and "BTSQZ", 50 corresponding to "CDXEF" and 0 to category 'W' since there are no code beginning with W.

// If L or M are empty return string is "" (Clojure and Racket should return an empty array/list instead).

// Note:
// In the result codes and their values are in the same order as in M

function stockList(listOfArt, listOfCat){
  if (listOfArt.length === 0 || listOfCat.length === 0) {
    return ''
  }
  const countBooks = listOfCat.reduce((acc, cat) => {
    acc[cat] = 0;
    return acc;
  }, {})
  for (let i = 0; i < listOfArt.length; i++) {
    let [code, count] = listOfArt[i].split(' ');
    if (countBooks[code[0]] !== undefined) {
      countBooks[code[0]] += +count;
    }
  }
  let str = "";
  const countBooksEntries = Object.entries(countBooks);
  for (let i = 0; i < countBooksEntries.length; i++) {
    str += `(${countBooksEntries[i][0]} : ${countBooksEntries[i][1]})`
    if (i < countBooksEntries.length - 1) {
      str += " - "
    }
  }
  return str
}

stockList(["ABAR 200", "CDXE 500", "BKWR 250", "BTSQ 890", "DRTY 600"],["A", "B"]);
