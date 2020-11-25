'use strict';

const numberArr = [23, 34, 456, 31, 45, 567, 321, 907, 60, 78];

function bubbleSort (arr) {
  for (let j = numberArr.length - 1; j > 0; j--) {
    for (let i = 0; i < j; i++) {
      if (numberArr[i] > numberArr[i + 1]) {
        let temp = numberArr[i];
        numberArr[i] = numberArr[i + 1];
        numberArr[i + 1] = temp;
      }
    }
  }
}
