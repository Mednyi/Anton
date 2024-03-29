// The maximum sum subarray problem consists in finding the maximum sum of a contiguous subsequence in an array or list of integers:

// maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
// // should be 6: [4, -1, 2, 1]
// Easy case is when the list is made up of only positive numbers and the maximum sum is the sum of the whole array. 
// If the list is made up of only negative numbers, return 0 instead.

// Empty list is considered to have zero greatest sum. Note that the empty list or array is also a valid sublist/subarray.

// describe( "maxSequence", function(){
//   it("should work on an empty array",function(){
//     Test.assertEquals(maxSequence([]), 0);
//   });
//   it("should work on the example",function(){
//     Test.assertEquals(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]), 6);
//   });
// });

let allPositives = arr => arr.every(n => n > 0)
let allNegatives = arr => arr.every(n => n < 0)
let sum = arr => arr.reduce((curr_max, max_so_far) => curr_max + max_so_far, 0)

var maxSequence = function(arr){
  if(arr.length === 0 || allNegatives(arr)) return 0;
  if(allPositives(arr)) return sum(arr);

  var curr_max = 0, max_so_far = 0;

  for(var i = 0; i < arr.length; i++){  
    curr_max = Math.max(0, curr_max + arr[i]);
    max_so_far = Math.max(curr_max, max_so_far);
  }
  return max_so_far;
}

console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]));

// Create a function that accepts dimensions, of Rows x Columns, as parameters 
// in order to create a multiplication table sized according to the given dimensions. 
// **The return value of the function must be an array, and the numbers must be Fixnums, NOT strings.

// Example:

// multiplication_table(3,3)

// 1 2 3
// 2 4 6
// 3 6 9

// -->[[1,2,3],[2,4,6],[3,6,9]]

// Each value on the table should be equal to the value of multiplying the number 
// in its first row times the number in its first column.

let matrix = []

function multiplicationTable(row, col){
  for (let i = 0; i < row; i++) {
    matrix[i] = [];
    for (let j = 0; j < col; j++) {
      matrix[i][j] = (i + 1) * (j + 1)
    }
  }
  return matrix;
}

console.log(multiplicationTable(4, 5));

// Prior to having fancy iPhones, teenagers would wear out their thumbs sending SMS messages on candybar-shaped feature phones with 3x4 numeric keypads.

// ------- ------- -------
// |     | | ABC | | DEF |
// |  1  | |  2  | |  3  |
// ------- ------- -------
// ------- ------- -------
// | GHI | | JKL | | MNO |
// |  4  | |  5  | |  6  |
// ------- ------- -------
// ------- ------- -------
// |PQRS | | TUV | | WXYZ|
// |  7  | |  8  | |  9  |
// ------- ------- -------
// ------- ------- -------
// |     | |space| |     |
// |  *  | |  0  | |  #  |
// ------- ------- -------
// Prior to the development of T9 (predictive text entry) systems, the method to type words was called "multi-tap" and involved pressing a button repeatedly to cycle through the possible values.

// For example, to type a letter "R" you would press the 7 key three times (as the screen display for the current character cycles through P->Q->R->S->7). A character is "locked in" once the user presses a different key or pauses for a short period of time (thus, no extra button presses are required beyond what is needed for each letter individually). The zero key handles spaces, with one press of the key producing a space and two presses producing a zero.

// In order to send the message "WHERE DO U WANT 2 MEET L8R" a teen would have to actually do 47 button presses. No wonder they abbreviated.

// For this assignment, write a module that can calculate the amount of button presses required for any phrase. Punctuation can be ignored for this exercise. Likewise, you can assume the phone doesn't distinguish between upper/lowercase characters (but you should allow your module to accept input in either for convenience).

// Hint: While it wouldn't take too long to hard code the amount of keypresses for all 26 letters by hand, try to avoid doing so! (Imagine you work at a phone manufacturer who might be testing out different keyboard layouts, and you want to be able to test new ones rapidly.)


function presses(phrase) {
  phrase = phrase.toLowerCase();
  let count = 0;
  let index = -1;
  let j = 0;
  const keyboard = [
    ["1"],["a", "b", "c", "2"], ["d", "e", "f", "3"],
    ["g", "h", "i", "4"], ["j", "k", "l", "5"], ["m", "n", "o", "6"],
    ["p", "q", "r", "s", "7"], ["t", "u", "v", "8"], ["w", "x", "y", "z", "9"],
    ["*"], [" ", "0"], ["#"]
  ]
  for (let i = 0; i < phrase.length; i++) {
    while (index === -1 && j < keyboard.length) {
      index = keyboard[j].indexOf(phrase[i]);
      j++;
    }
    count = count + index + 1;
    index = -1;
    j = 0;
  }
  return count;
}

console.log(presses("LOL"));

// Welcome.

// In this kata you are required to, given a string, replace every letter with its position in the alphabet.

// If anything in the text isn't a letter, ignore it and don't return it.

// "a" = 1, "b" = 2, etc.

// Example
// alphabetPosition("The sunset sets at twelve o' clock.")
// Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" (as a string)

function alphabetPosition(text) {
  text = text.toLowerCase(); // a
  const textArr = text.split(''); // ['a']
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  let result = []; 
  for (let i = 0; i < textArr.length; i++) {
    if (alphabet.includes(textArr[i])) {
      result.push(alphabet.indexOf(textArr[i]) + 1);
    }
  }
  return result.join(' ');   
}

console.log(alphabetPosition("The sunset sets at twelve o' clock."));

// The second way to solve it

const text = "The sunset sets at twelve o' clock.";
console.log(text.toLowerCase().replaceAll(/[^a-z]/g,'').split('').map(c => c.charCodeAt(0) - 96).join(' '))



// The number 89 is the first integer with more than one digit that fulfills the property partially introduced in the title of this kata. What's the use of saying "Eureka"? Because this sum gives the same number.

// In effect: 89 = 8^1 + 9^2

// The next number in having this property is 135.

// See this property again: 135 = 1^1 + 3^2 + 5^3

// We need a function to collect these numbers, that may receive two integers a, b that defines the range [a, b] (inclusive) and outputs a list of the sorted numbers in the range that fulfills the property described above.

// Let's see some cases:

// sumDigPow(1, 10) == [1, 2, 3, 4, 5, 6, 7, 8, 9]

// sumDigPow(1, 100) == [1, 2, 3, 4, 5, 6, 7, 8, 9, 89]
// If there are no numbers of this kind in the range [a, b] the function should output an empty list.

// sumDigPow(90, 100) == []

// describe("Example Tests", function() {
//   Test.assertSimilar(sumDigPow(1, 10), [1, 2, 3, 4, 5, 6, 7, 8, 9])
//   Test.assertSimilar(sumDigPow(1, 100), [1, 2, 3, 4, 5, 6, 7, 8, 9, 89])
//   Test.assertSimilar(sumDigPow(10, 100),  [89])
//   Test.assertSimilar(sumDigPow(90, 100), [])
//   Test.assertSimilar(sumDigPow(90, 150), [135])
//   Test.assertSimilar(sumDigPow(50, 150), [89, 135])
//   Test.assertSimilar(sumDigPow(10, 150), [89, 135])
// });

function sumDigPow(a, b) {
  // Your code here
}
