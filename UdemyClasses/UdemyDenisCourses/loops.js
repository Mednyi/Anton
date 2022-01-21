// Loops
// Вывести простые числа

// Напишите код, который выводит все простые числа из интервала от 2 до n.

// // Для всех i от 1 до 10 {
// проверить, делится ли число i на какое - либо из чисел до него
//   если делится, то это i не подходит, берём следующее
//   если не делится, то i - простое число
// }

let n = 10;

nextPrime:
for (let i = 2; i < n; i++) { // Для всех i...
  for (let j = 2; j < n; i++) { // проверить, делится ли число..
    if (i % j == 0) continue nextPrime; // не подходит, берём следующее
  }

  alert(i);
}

// 1 // На основе строки “i am in the easycode” сделать новую строку где первые буквы каждого слова
// будут в верхнем регистре.Использовать for или while.

const usualString = 'i am in the easycode';
let stringUppercase = '';

for (let i = 0; i < usualString.length; i++) {
  if (i === 0 || usualString[i - 1] === ' ') {
    stringUppercase += usualString[i].toUpperCase;
  } else {
    stringUppercase += usualString[i];
  }
}

console.log(stringUppercase);

// 2 Дана строка “tseb eht ma i”. Используя циклы, сделать строку-перевертыш (то есть последняя буква становится первой, предпоследняя - второй итд).


let str = 'tseb eht ma i';
let res = '';

for (let i = str.length; i--;) {
  res += str[i];
}

console.log(res);

const strReversed = str.split('').reverse().join('');
console.log(strReversed);

// 3 Факториал числа - произведение всех натуральных чисел от 1 до n включительно: 3! = 3 * 2 * 1, 5! = 5 * 4 * 3 * 2 * 1. С помощью циклов вычислить факториал числа 10. Использовать for.

let result = 1;

for (let i = 1; i <= 10; i++) {
  result *= i;
}
console.log(result);

// 4 На основе строки “JavaScript is a pretty good language” сделать новую строку, где каждое слово начинается с большой буквы, а пробелы удалены.Использовать for.

const basicString = 'JavaScript is a pretty good language';
let resultString = ' ';

for (let i = 0; i < basicString.length; i++) {
  if (i === 0 || basicString[i - 1] === ' ') {
    resultString += basicString[i].toUpperCase();
  } else if (basicString[i] !== ' ') {
    resultString += basicString[i];
  }
}

console.log(resultString);

// 5 Найти все нечетные числа в массиве от 1 до 15 включительно и вывести их в консоль. Массив [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15] Использовать for of.

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

for (let a of array) {
  if (array[a] % 2 === 0) {
    console.log(array[a]);
  }
}

// 6 Перебрать объект и если значение в свойстве это строка то переписать ее всю в верхнем регистре. Использовать for in.

let list = {
  name: 'denis',
  work: 'easycode',
  age: 29
}

for (let key in list) {
  if (typeof list[key] === 'string') {
    list[key] = list[key].toUpperCase();
  }
}

console.log(list);