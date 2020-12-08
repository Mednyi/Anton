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
 // Сумма четных положительных элементов массива

 const newArr6 = [2, -12, 100, 150, 7, -9, -10, 1];
 let sum = 0;
 for (let i = 0; i < newArr6.length; i++) {
  if (newArr6[i] % 2 === 0 && newArr6[i] >= 0) {
    sum += newArr6[i];
  }
 }

 // Максимальный элемент массива с четным индексом

const newArr7 = [2, -12, 100, 150, 7, -9, -10, 1];
let max = newArr7[0];
for (let i = 0; i < newArr7.length; i ++) {
  if (newArr7[i] > max && i % 2 === 0) {
    max = newArr7[i];
  }
}

// Элементы массива которые меньше среднего арифметического

const newArr8 = [2, -12, 100, 150, 7, -9, -10, 1];
let avarage = 0;
for (let i = 0; i < newArr8.length; i++) {
  avarage += newArr8[i];
}

avarage /= newArr8.length;

for (let i = 0; i < newArr8.length; i++) {
  if (newArr8[i] < avarage) {
    console.log(newArr8[i]);
  }
}

// Найти два минимальных элемента массива
/*
1. min1 = 2 min2 = 2;
2. min1 = -12 min2 = 2;
3...
4...
5...
6. min1 = -12 min2 = -9;
7. min1 = -12 min2 = -10;
8. min1 = -20 min2 = -12;
*/

const newArr9 = [2, -12, 100, 150, 7, -9, -10, -20];
let min1 = newArr9[0];
let min2 = newArr9[0];

for (let i = 0; i < newArr9.length; i++) {
  if (newArr9[i] < min1) {
    if (min1 < min2) {
      min2 = min1;
    }
    min1 = newArr9[i];
  } else if (newArr9[i] < min2) {
    min2 = newArr9[i];
  }
}

// Сжать массив, удалив элементы, принадлежащие интервалу [a,b]
/*
a = 2;
b = 5;
[2, -12, 100, 150, 7, -9, -10, -20]
[2, -12, 150, 7, -9, -10, -20, 0] i = 3
[2, -12, 7, -9, -10, -20, 0, 0] i = 4
[2, -12, -9, -10, -20, 0, 0, 0] i = 5
[2, -12, -10, -20, 0, 0, 0, 0] 
*/

const newArr10 = [2, -12, 100, 150, 7, -9, -10, -20];
const a = 2;
const b = 5;
let i = a;
while (i >= a && i <= b) {
  for (j = a; j < newArr10.length - 1; j++) {
    newArr10[j] = newArr10[j + 1];
  }
  newArr10[j] = 0;
  i++;
}
