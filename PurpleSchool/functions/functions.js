function getMilesToKm(miles) {
  const km = miles / 0.62137;

  return km;
}

function logName(name, surname) {
  console.log(`My name is ${name} ${surname}`);
}

logName('Anton', 'Zhilin');

function countDepositSum(depositInUSD, months, rate) {
  return depositInUSD * (1 + rate / 12) ** months;;
}

const example1 = countDepositSum(1000, 24, 0.12);

const example2 = countDepositSum(1000, 48, 0.10);


// Anonymous functions

function powerOfTwo(num) {
  return num * num;
}

const poft = function (num) {
  return num * num;
}

poft(5);


// Arrow functions

const poft2 = num => num * num;

const poft3 = num => {
  console.log(num);
  return num * num;
}

poft3(3);

// Training

function toPower(num, power) {
  const res = num ** power;

  return res;
}

const toPowerArrow = (num, power) => num ** power;

console.log(toPowerArrow(2, 4))

// Default params

function toPower(num, power) {
  const power2 = power ?? 2;
  const res = num ** power2;

  return res;
}

console.log(toPowerArrow(2));

function toPower(num, power = 2) {
  const res = num ** power;

  return res;
}

console.log(toPowerArrow(2));

// If else in function

function canAccessWebsite(age) {
  if (age < 18) {
    return;
  }
  return true;
}

const canAccessWebsiteArrow = (age) => age < 18;

function canAccessWebsite1(age) {
  if (age < 18) {
    return 'No';
  }
  return 'Yes';
}

const canAccessWebsiteArrow1 = (age) => age < 18 ? 'No' : 'Yes';

// Functions into other functions

const KG_IN_USD = 7;
const KM_IN_USD = 5;

function calculateWeight(present) {
  return present * KG_IN_USD;
}

function calculateKM(distance) {
  return distance * KM_IN_USD;
}

function getExchangePrice(present1, present2, distance) {
  const price1 = calculateWeight(present1);
  const price2 = calculateWeight(present2);
  const distancePrice = calculateKM(distance);

  return price1 + price2 + distancePrice;
}

console.log(getExchangePrice(1, 2, 34));


// TASK
// Задание для упражнения:
// Пользователь:
// Возраст
// Наличие работы
// Деньги
// Нужно проверить может ли он купить новый MacBook за 2000$? Он может брать не только свои деньги, но и взять кредит. Ему дадут 500$, только если ему больше 24-х лет и он имеет работу, 100$ если ему просто больше 24-х лет и 0 в ином случае. Напишите функцию, которая принимает данные пользователя и товара и возвращает true или false.

function checkCredit(age, hasJob = false) {
  switch (true) {
    case age > 24 && hasJob:
      return 500;
    case age > 24:
      return 100;
    default:
      return 0;
  }
}

function canBuyMacBook(productPrice, age, money, hasJob = false) {
  const creditMoney = checkCredit(age, hasJob);

  return productPrice <= money + creditMoney;
}

