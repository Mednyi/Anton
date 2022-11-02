// Largest Number

function largestNumber(num) {
  let placeholder;

  for (let i = 0; i < num; i++) {
    placeholder = placeholder.concat('9');
  }

  return parseInt(placeholder);
}

function largestNumber(num) {
  const placeholder = '9'.repeat(num);

  return parseInt(placeholder);
}

/**
 * Test Suite
//  */
// describe('largestNumber()', () => {
//   it('returns largest positive integer possible for digit count', () => {
//     // arrange
//     const num = 2

//     // act
//     const result = largestNumber(num)

//     // log
//     console.log('result: ', result)

//     // assert
//     expect(result).toBe(99)
//   })
// })

// Max Multiple

function maxMultiple(divisor, bound) {
  const remainder = bound % divisor;

  return bound - remainder;
}

/**
 * Test Suite
//  */
// describe('maxMultiple()', () => {
//   it('returns largest integer up to boundary', () => {
//     // arrange
//     const divisor = 3
//     const bound = 10

//     // act
//     const result = maxMultiple(divisor, bound)

//     // log
//     console.log('result: ', result)

//     // assert
//     expect(result).toBe(9)
//   })
// })
