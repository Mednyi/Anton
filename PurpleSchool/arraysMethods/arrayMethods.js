// ForEach
const score = [5, 10, 0, 15];

for (const el of score) {
  console.log('Round: ' + el);
}

for (const [i, el] of score.entries()) {
  console.log(`Round ${i + 1}: ${el} `);
}

score.forEach((el) => console.log(`Round: ${el} `));

score.forEach((el, index) => console.log(`Round ${index + 1}: ${el} `));

score.forEach((scoreEl, index, arr) => console.log(`Round ${index + 1}: ${scoreEl} ${arr}`));

// Map

const transactionsInUSD = [10, -7, 50, -10, 100];

const transactionsInRUB = [];

for (const transaction of transactionsInUSD) {
  transactionsInRUB.push(transaction * 75);
}

const transactionsInRUB2 = transactionsInUSD.map((transaction, i) => transaction * 75);


// Filter

const operations = [100, -20, 7, -20, 50];

// const positiveOperations = [];
// // for (const operation of operations) {
// //   if (operation > 0) {
// //     positiveOperations.push(operation);
// //   }
// // }
// // console.log(positiveOperations);

const positiveOperations = operations.filter(operation => operation > 0);

const negativeOperations = operations.filter(operation => operation < 0);

console.log(positiveOperations);
console.log(negativeOperations);

const positiveRUBOperations = operations
  .filter(operation => operation > 0)
  .map(operation => operation * 75);

// TASK
/*
Имеется массив изменения цен prices, где внутри
1й элемент массива является ценой в момент Х,
2й - ценой в момент Y.
Нужно преобразовать данные в массив, где будут отображены
только положительные изменения цен: [100, 150]
*/

const prices = [[100, 200], [120, 100], [200, 350]];

const newPrices = prices.map(product => product[1] - product[0]).filter(price => price > 0);

console.log(newPrices);


// Reduce

const operations2 = [100, -20, 7, -30, 50];

let balance = 0;
for (const operation of operations2) {
  balance += operation;
}

const finalBalance = operations2.reduce((prevValue, operation, i) => {
  console.log(`Iteration: ${i}, prevValue: ${prevValue}, opertion: ${operation}`);
  return prevValue += operation;
}, 0);

const minElement = operations2.reduce((prevValue, operation) => {
  if (operation > prevValue) {
    return prevValue;
  } else {
    return operation;
  }
}, 0);


// TASK
// /*
// Найти среднее значение последоватедьности
// чисел с помощью reduce
// */

const arr = [1, 4, 4, 10];

const getAvarage = (arr) => {
  let result = 0;

  for (const element of arr) {
    result += element;
  }

  return result / arr.length;
}


const avarageArr = arr.reduce((acc, number, i) => {
  if (i != arr.length - 1) {
    return acc + number;
  } else {
    return (acc + number) / arr.length;
  }
}, 0);


// find and findIndex

const arr2 = [1, 4, 4, 10];

let elGT5;

for (const el of arr2) {
  if (el > 5) {
    elGT5 = el;
    break;
  }
}

console.log(elGT5);

elGT5 = arr.find(el => el > 5);

console.log(elGT5);

const elGT5Index = arr.findIndex(el => el > 5);

console.log(elGT5Index);


// TASK
// /*
// Написать функцию, которая возвращает true,
// если элемент есть, и false, если нет.
// */

const arr3 = [2, 4, 4, 10, 20];

function some(array) {
  return array.find(element => {
    if (!element) {
      return false;
    } else {
      return true;
    }
  })
}

function some2(array, element) {
  const result = array.find(el => el == element);

  return result == undefined ? false : true;
}

console.log(some(arr3, 3));
console.log(arr3.some(el => el === 2));

// flat and flatMap

const priceProducts = [[2, 4], [3, 4], [10, 20]];
const priceResult = priceProducts.flat(); /* [2, 4, 3, 4, 10, 20] */

console.log(priceResult);

const newPriceProducts = [[2, 4], [3, 4], [10,[20, 50]]];

const newPriceResult = newPriceProducts.flat(2) /* [2, 4, 3, 4, 10, 20, 50]*/

const newPriceResult2 = newPriceProducts.flatMap(el => el.concat([1]))


// sort

const users = ['Anya', 'Vasya', 'Katya', 'Masha'];
console.log(users);

users.sort(); /* ['Anya', 'Katya', 'Masha', 'Vasya'] */

const operations3 = [100, -300, -100, 50, 480];
console.log(operations3);

operations3.sort(); /* [-100, -300, 100, 480, 50] By defaul sorting as a string*/

console.log(operations3);

operations3.sort((a, b) => {
  if (a > b) {
    return 1;
  }
  if (a < b) {
    return -1;
  }
});

operations3.sort((a, b) => a - b);


// How to create an Array quickly

const arr4 = [1, 2, 3, 4, 5, 6];

const newArr2 = new Array(3);
newArr2.fill(4);
console.log(newArr2);

const arr5 = Array.from({ length: 5}, () => 5);
console.log(arr5);