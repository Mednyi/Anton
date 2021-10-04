// Given an array of integers, replace all the occurrences of elemToReplace to substitutionElem

function arrayReplace(array, elemToReplace, substitutionElem) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === elemToReplace) {
      array[i] = substitutionElem
    }
  }
  return array
}

/**
 * Test Suite
 */
describe('arrayReplace()', () => {
  it('adds a border around entire application', () => {
    // arrange
    const array = [1, 2, 1]
    const elemToReplace = 1
    const substitutionElem = 3

    // act
    const result = arrayReplace(array, elemToReplace, substitutionElem)

    // log
    console.log('result: ', result)

    // assert
    expect(result).toEqual([3, 2, 3])
  })
})

// Case Intensitive Palindrome

function caseInsensitivePalindrome(str) {
  const caselessStr = str.toLowerCase()
  const reversedCarelessStr = caselessStr.split('').reverse().join('')

  return caselessStr === reversedCarelessStr
}

function caseInsensitivePalindrome(str) {
  const caselessStr = str.toLowerCase()
  const reversedCarelessStr = ''

  for (let i = caselessStr.length - 1; i >= 0; i--) {
    reversedCarelessStr += caselessStr[i]
  }

  return caselessStr === reversedCarelessStr
}

/**
 * Test Suite
 */
describe('caseInsensitivePalindrome()', () => {
  it('returns true for a case insensitive palindrome', () => {
    // arrange
    const str = 'AaBaa'

    // act
    const result = caseInsensitivePalindrome(str)

    // log
    console.log('result 1: ', result)

    // assert
    expect(result).toBe(true)
  })

  it('returns false when not a case insensitive palindrome', () => {
    // arrange
    const str = 'abac'

    // act
    const result = caseInsensitivePalindrome(str)

    // log
    console.log('result 2: ', result)

    // assert
    expect(result).toBe(false)
  })
})
