'use strict';

const someArr = [12, 234, 345, 1023, 19];

const getArrayMin = arr => {
  let min = arr[0]; // min = 12
  for(let item of arr) {
    if (item < min) {
      min = item;
    }
  }
  return min;
};

const getArrayMax = (arr) => {
  let max = arr[0];
  for(let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
};
