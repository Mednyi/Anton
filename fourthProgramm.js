'use strict';

const numbersArr = [23, 34, 456, 31, 45, 567, 321, 907, 60, 78];

function bubbleSort (arr) {
  for (let j = arr.length - 1; j > 0; j--) {
    for (let i = 0; i < j; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
      }
    }
  }
}

const newArr10 = [9, 1, 9, 29, 45, 45, 560];
const min = 0;
for (let i = 0; i < newArr10.length; i++) {
  if (newArr10[i] < min) {
    min = newArr10[i];
  }
}

const newArr15 = [9, 1, 9, 29, 45, 45, 560];
const max = 0;
for (let i = 0; i < newArr15.length; i++) {
  if (newArr15[i] < max) {
    max = newArr15;
  }
}
