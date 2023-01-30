Number.isInteger(10); // Is number in (Z - integers) enum; will return true for 10;
Number.parseFloat('10.5'); // will parse String as Float number
Number.parseInt('100'); // will parse String as Integer
//
Number.prototype.toFixed(10); // format number to contain only 10 fraction digits.
Number.prototype.toLocaleString('ru-RU', { style: 'currency', currency: 'RUB' }); // will return localized number with currency character at the end
Number.prototype.toString(); // will convert Number to String

// String
// String.length;// is the length of string
String.prototype.includes('string'); // returns true if string includes substring passed as argument
String.prototype.indexOf('string'); // finds index of first occurrence of substring in string
String.prototype.lastIndexOf('string'); // finds index of last occurrence of substring in string

const arr = [1, 2, 3, 4, 5];

// 1 forEach - перебор элементов массива
// const newArr = arr.forEach((item, index, arr) => console.log(item, index, arr));

// 2 map - перебор элементов массива и возврат нового массива на основе текущего
// const newArr = arr.map((item, index, arr) => item * 2);
// console.log(newArr);

// 3 reduce - перебор элементов массива и возврат новой структуры данных
// 0 acc = {} 1
// 1 acc = {'1': 0}

// const something = arr.reduce((acc, item, index, arr) => {
//   acc[item] = index;
//   return acc;
// }, {});

// const something = arr.reduce((acc, item) => acc + item);

// console.log(something);

// 4 find - позволяет найти элемент по условию и сразу возвращает его
// const element = arr.find((item, index, arr) => item === 3);
// console.log(element);

// 5 findIndex - как и find, но возвращает индекс
// const idIndex = arr.find((item, index, arr) => item === 3);
// console.log(element);

// 6 filter - возвращает новый массив по истинному условию
// const filteredArr = arr.filter((item, index, arr) => {
//   return item > 3;
// });

// 7 push - вставляет элементы  в конец массива и мутирует его и дополнительно
// возвращает новую длину массива
// arr.push(10);

// 8  unshift - вставляет элементы в начало массива и мутирует его
//  и дополнительно возвращает новую длину массива
// arr.unshift(10, 11, 12 , 13);

// 9 pop - удаляет элемент из конца массива и одновременно возвращает и мутирует его
// const lastEl = arr.pop();
// console.log(lastEl);


// 10 shift - удаляет элемент из начала массива и одновременно возвращает и мутирует его
// const firstEl = arr.shift();
// console.log(firstEl);

// 11 concat - создает новый массив с переданными значениями в конце,
// не мутирует исходный массив
// const newArr = arr.concat([12, 14, 15, 16]);
// console.log(newArr);

// 12 join - объединяет все элементы массива (или массивоподобного объекта) в строку
// const str = 'asdgfdgdgfdgfg';
// const strArr = str.split('');
// const newStr = strArr.join('-');
// console.log(newStr);
// console.log(arr.join());
// console.log(arr.join(''));
// console.log(arr.join('-'));

// 13 sort - позволяет отсортировать массив
// arr.sort((a, b) => a - b);
// console.log(arr);

// 14 isArray - позволяет проверить массив ли это
// console.log(Array.isArray(arr));

// 15 splice - позволяет удалять и вставлять элементы
// arr.splice(index, deleteCount, elementsToAdd);
// arr.splice(2, 1, 45);
// console.log(arr);

// 16 slice - позволяет вернуть новый подмассив из переданного
// const numbers = [1, 10, 3, 17, 5];
// const newNumbers = numbers.slice(2);
// console.log(newNumbers);

// 17 indeOf - возвращает индекс элемента массива
// const numbers = [1, 10, 3, 17, 5];
// const foundId = numbers.indexOf(2);
// console.log(foundId);

// 18 lastIndexOf

// 19 includes - возвращает true, либо false при нахождении
// const numbers = [1, 10, 3, 17, 5];
// const foundId = numbers.includes(3);
// console.log(foundId);

// 20 reverse



