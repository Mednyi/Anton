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