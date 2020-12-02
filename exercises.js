'use strict';
// Максимальный элемент
const newArr = [5, 1, 9 , 34 , 3];
let max = newArr[0];
for (let i = 0; i < newArr.length; i++) {
  if (newArr[i] > max) {
    max = newArr[i];
  }
}
// Минимальный элемент из массива
const newArr4 = [];
let min = newArr4[0];
for (let i = 0; i < newArr4.length; i++) {
  if (newArr4[i] < min) {
    min = newArr4[i];
  }
}
// Вывод четного чисел из массива
const newArr1 = [1, 2, 9, 100, 102, 7, 21, 24];
for (let i = 0; i < newArr1.length; i++) {
  if (newArr1[i] % 2 === 0) {
    console.log(newArr1[i]);
  }
}
// Максимальный четный элемент из массива
const newArr2 = [1, 2, 9, 100, 102, 7, 21, 24];
let max = -Infinity;
for (let i = 0; i < newArr2.length; i++) {
  if (newArr2[i] % 2 === 0 && newArr2[i] > max) {
    max = newArr2[i];
  }
}

// Максимальный элемент с четным индексом
const newArr3 = [1, 2, 9, 100, 102, 7, 21, 24];
let max = newArr3[0];
for (let i = 0; i < newArr3.length; i++) {
  if (i % 2 === 0 && newArr3[i] > max) {
    max = newArr3[i];
  }
}
