// Given an array of integers, replace all the occurrences of elemToReplace to substitutionElem

function arrayReplace(array, elemToReplace, substitutionElem) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === elemToReplace) {
      array[i] = substitutionElem;
    }
  }
  return array;
}

/**
 * Test Suite
 */
// describe('arrayReplace()', () => {
//   it('adds a border around entire application', () => {
//     // arrange
//     const array = [1, 2, 1]
//     const elemToReplace = 1
//     const substitutionElem = 3

//     // act
//     const result = arrayReplace(array, elemToReplace, substitutionElem)

//     // log
//     console.log('result: ', result)

//     // assert
//     expect(result).toEqual([3, 2, 3])
//   })
// })

// Case Intensitive Palindrome

function caseInsensitivePalindrome(str) {
  const caselessStr = str.toLowerCase();
  const reversedCarelessStr = caselessStr.split('').reverse().join('');

  return caselessStr === reversedCarelessStr;
}

function caseInsensitivePalindrome(str) {
  const caselessStr = str.toLowerCase();
  let reversedCarelessStr = '';

  for (let i = caselessStr.length - 1; i >= 0; i--) {
    reversedCarelessStr += caselessStr[i];
  }

  return caselessStr === reversedCarelessStr;
}

/**
 * Test Suite
 */
// describe('caseInsensitivePalindrome()', () => {
//   it('returns true for a case insensitive palindrome', () => {
//     // arrange
//     const str = 'AaBaa'

//     // act
//     const result = caseInsensitivePalindrome(str)

//     // log
//     console.log('result 1: ', result)

//     // assert
//     expect(result).toBe(true)
//   })

//   it('returns false when not a case insensitive palindrome', () => {
//     // arrange
//     const str = 'abac'

//     // act
//     const result = caseInsensitivePalindrome(str)

//     // log
//     console.log('result 2: ', result)

//     // assert
//     expect(result).toBe(false)
//   })
// })

// Enclose in Brackets

// Given a string, enclose it in round brackets

function encloseInBrackets(str) {
  const solution1 = '(' + str + ')';
  const solution2 = `(${str})`;
  const solution3 = '('.concat(str, ')');
  return solution1;
}

/**
 * Test Suite
//  */
// describe('encloseInBrackets()', () => {
//   it('adds () around a string', () => {
//     // arrange
//     const str = 'Yo'

//     // act
//     const result = encloseInBrackets(str)

//     // log
//     console.log('result: ', result)

//     // assert
//     expect(result).toBe('(Yo)')
//   })
// })

// Number Factorial

function factorialNumber(num) {
  let sum = 1;

  for (let i = 1; i <= num; i++) {
    sum *= i;
  }

  return sum;
}

/**
 * Test Suite
 */
// describe('factorialNumber()', () => {
//   it('returns factorial of number param', () => {
//     // arrange
//     const num = 5

//     // act
//     const result = factorialNumber(num)

//     // log
//     console.log('result: ', result)

//     // assert
//     expect(result).toBe(120)
//   })
// })

// First Digits

function firstDigit(str) {
  const strNums = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  const chars = str.split('');

  chars.forEach(char => {
    if (strNums.includes(char)) {
      return char;
    }
  });
}
/**
//  * Test Suite
//  */
// describe('firstDigit()', () => {
//   it('return the first digit in a string', () => {
//     // arrange
//     const str = 'var_1__Int2'

//     // act
//     const result = firstDigit(str)

//     // log
//     console.log('result: ', result)

//     // assert
//     expect(result).toBe('1')
//   })
// })
