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