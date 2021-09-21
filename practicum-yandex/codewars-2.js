// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

const strNumbers = '1234332456785586'

function fakeBin(x) {
  for (let i = 0; i < strNumbers.length; i++) {
    for (let j = 0; j < strNumbers.length; i++) {
      if (strNumbers[i] < 5) {
        return (strNumbers[j] = '0')
      } else if (strNumbers >= 5) {
        return (strNumbers[j] = '1')
      }
    }
  }
}
