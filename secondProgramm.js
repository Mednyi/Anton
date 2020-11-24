'use strict';

const someArr = [12, 234, 345, 1023, 19];

const getArrayMin = (arr) => {
  let len = someArr.length;
  let min = Infinity;

  while (len--) {
    if (someArr[len] < min) {
      min = someArr[len];
    }
  }
  return min;
};

const getArrayMax = (arr) => {
  let len = someArr.length;
  let max = -Infinity;

  while (len--) {
    if (someArr[len] > max) {
      max = someArr[len];
    }
  }
  return max;
}
