'use strict'

console.log(10 === 10.0); /* true */
// 0 1
console.log(0.1 + 0.2 === 0.3); /* false */
console.log(0.1 + 0.2); /* 0.3000000000000000004 */

console.log(Number('10')); /* conver string to number */
console.log(+'10'); /* conver string to number */
console.log(Number.parseInt('10', 10)); /* conver string to number */
console.log(Number.parseInt('10 sec', 10)); /* conver string to number */

console.log(Number.parseFloat('10.4', 10)); /* conver string to number */
console.log(Number.parseFloat('10,3 sec', 10)); /* conver string to number */

console.log(Number.isNaN(Number('10sdfgdg'))); /* if isNaN true that means that there is no number */
console.log(Number.isNaN(10 / 0)); /* Infinity */
console.log(Number.isFinite(10 / 0)); /* false */
console.log(Number.isFinite(10)); /* true */

console.log(Number.isInteger(10)); /* true */
console.log(Number.isInteger(10.5)); /* false */

// Math

console.log(Math.sign(-100)); /* return -1*/
console.log(Math.sign(100)); /* return 1*/
console.log(Math.abs(-100)); /* return 100*/
console.log(Math.abs(100)); /* return 100*/

console.log(Math.exp());

console.log(Math.max(1, -2, 10, 0, 19)); /* return 19*/
console.log(Math.min(1, -2, 10, 0, 19)); /* return -2*/

const arr = [1, -2, 10, 0, 19];
console.log(Math.max(...arr));
console.log(Math.min(...arr));

console.log(Math.random());

// Rounding off

console.log(Math.round(1.4)); /* 1 */
console.log(Math.round(1.6)); /* 2 */
console.log(Math.round(1.49999)); /* 1 */

console.log(Math.ceil(1.1)); /* 2 */
console.log(Math.ceil(1)); /* 1 */
console.log(Math.ceil(0.1)); /* 1 */

console.log(Math.floor(0.1)); /* 1 */
console.log(Math.floor(2.9)); /* 1 */

console.log(Math.trunc(2.9));
console.log(Math.trunc(2.1));
console.log(Math.trunc(1.11111));

console.log(1.499999.toFixed(1)); /* 1.5 */
console.log(Number(1.4999999).toFixed(1)); /* 1.5 */


// TASK

/*
  Написать ф-цию , которая принимает min и max , и возвращает случайное число между ними, включая их
*/

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

random(1, 20);


console.log(random(1, 20));


// Operator %

console.log(15 / 2);
console.log(15 % 2); /* 14 / 2 + 1 = 15 */
console.log(14 % 2); /* 14 / 2 = 7 */

const isEven = n => n % 2 === 0;
const isOdd = n => n % 2 === 1;

function isEvenFunc(n) {
  return n % 2 === 0;
}


// Divisor of number

const bigNum = 35050000;
const bigNum2 = 350_500_000;

// BigInt

const max = 2 ** 53 - 1;
console.log(Number.MAX_SAFE_INTEGER);


// Internationalisation of numbers
// Intl Api

const options1 = {
  style: 'currency',
  currancy: 'RUB',
  useGrouping: false
}

const options2 = {
  style: 'currency',
  currancy: 'USD'
}

const options3 = {
  style: 'decimal'
}

const options4 = {
  style: 'percent'
}

const options5 = {
  style: 'unit',
  unit: 'celsius'
}

console.log(new Intl.NumberFormat('ru-Ru', options1).format(23000));
console.log(new Intl.NumberFormat('en-US', options2).format(23000));
console.log(new Intl.NumberFormat('ru-Ru', options3).format(10000));
console.log(new Intl.NumberFormat('ru-Ru', options4).format(0.1));
console.log(new Intl.NumberFormat('ru-Ru', options5).format(25));


// TASK
/* Conver currencies*/

function convertCurrencies(sum, basicCurrency, convertCurrency) {
  const allCurrencies = [
    { name: 'USD', mult: 1},
    { name: 'RUB', mult: 1 / 75},
    { name: 'EUR', mult: 1.1},
  ];

  const initial = allCurrencies.find(c => c.name === basicCurrency);

  if (!initial) {
    return null;
  }

  const convert = allCurrencies.find(c => c.name === convertCurrencies);

  if (!convert) {
    return null;
  }

  return new Intl
    .NumberFormat('ru-Ru', { style: 'currency', currency: convert.name})
    .format( sum * initial.mult / convert.mult);
}






