'use strict';

const someArr = [12, 234, 345, 1023, 19];

const getArrayMin = arr => {
  let min = someArr[0]; // min = 12
  for(let item of someArr) {
    if (item < min) min = item;
  }
  return min;
};

const getArrayMax = (arr) => {
  let max = someArr[0];
  for(let i = 1; i < someArr.length; i++) {
    if (someArr[i] > max) {
      max = someArr[i];
    }
  }
  return max;
}
