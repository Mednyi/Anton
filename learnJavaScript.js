'use strict';

let myName = 'Anton';
let myFaterName = 'Aleksander';
let myWeight = 86;
let nextDay = 'Friday';
let myAge = 37;
let isRainyToday = false;
let counterCalories = 0;
let myPetName = 'Maya';

const FOUR = 4;
const MY_ENGLISH_SKILL = 'Advanced';
const MY_FLAT_AREA = 74;
const task = 'Купить кошачьей еды';
const tasks = [ 'Купить кошачьей еды', 'Почистить лоток'];
const sum1 = function (a, b) {
  return a + b;
};

const onButtonClick = function () {
  alert('Кто-то нажал на кнопку');
};

const buttonClickHandler = function () {
  alert('Кто-то нажал на кнопку');
};

function getSum (firstNumber, secondNumber) {
  return firstNumber + secondNumber;
}

getSum(10, 4);
const result = getSum(10, 4);

const sum = function (a, b) {
  return a + b;
};

// Tasks from learnJS

// 1) Обязателен ли "else"?

function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm('Родители разрешили?');
  }
}

function checkAge2(age) {
  if (age > 18) {
    return true;
  }
  // ...
  return confirm('Родители разрешили?');
}

// Оба варианта функций работают одинаково, отличий нет.

// 2) Перепишите функцию, используя оператор '?' или '||'

function checkAge3(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm('Родители разрешили?');
  }
}

function checkAge4(age) {
  return (age > 18) ? true : confirm('Родители разрешили?');
}

function checkAge5(age) {
  return (age > 18) || confirm('Родители разрешили?');
}


// 3) Функция min(a, b)

// Напишите функцию min(a,b), которая возвращает меньшее из чисел a и b.

// Пример вызовов:

// min(2, 5) == 2
// min(3, -1) == -1
// min(1, 1) == 1

function getMin(a, b) {
  if (a < b) {
    return a;
  }
  return b;
}

function getMin1(a, b) {
  return (a < b) ? a : b;
}

// 4) Функция pow(x,n)

// Напишите функцию pow(x,n), которая возвращает x в степени n. Иначе говоря, умножает x на себя n раз и возвращает результат.

// pow(3, 2) = 3 * 3 = 9
// pow(3, 3) = 3 * 3 * 3 = 27
// pow(1, 100) = 1 * 1 * ...* 1 = 1

function getPow(x, n) {
  return x *= n;
}

function getPow2(x, n) {
  let result = x;

  for (let i = 1; i < n; i++) {
    result *= x;
  }

  return result;
}

let x = prompt("x?", '');
let n = prompt("n?", '');

if (n < 1) {
  alert(`Степень ${n} не поддерживается, используйте натуральное число`);
} else {
  alert( getPow2(x, n) );
}

// Перепишите с использованием функции-стрелки

// Замените код Function Expression стрелочной функцией:

function ask(question, yes, no) {
  if (confirm(question)) {
    yes();
  }
  else {
    no();
  }
}

ask(
  "Вы согласны?",
  function() { alert("Вы согласились."); },
  function() { alert("Вы отменили выполнение."); }
);

let ask2 = (question, yes, no) => confirm(question) ? yes() : no();


// 6 Фильтрация по диапазону

// Напишите функцию filterRange(arr, a, b), которая принимает
// массив arr, ищет в нём элементы между a и b и отдаёт массив этих элементов.

// Функция должна возвращать новый массив и не изменять исходный.

// Например:



// let filtered = filterRange(arr, 1, 4);

// alert( filtered ); // 3,1 (совпадающие значения)

// alert( arr ); // 5,3,8,1 (без изменений)
let arr1 = [5, 3, 8, 1];

function filterRange(arr, a, b) {
  const newArr = [];
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] >= a && arr1[i] <= b) {
        newArr.push(arr[i]);
    }
  }
  return newArr;
}

filterRange(arr1, 1, 4);

// 7 Фильтрация по диапазону "на месте"

// Напишите функцию filterRangeInPlace(arr, a, b),
// которая принимает массив arr и удаляет из него все значения кроме тех,
// которые находятся между a и b. То есть, проверка имеет вид a ≤ arr[i] ≤ b.

// Функция должна изменять принимаемый массив и ничего не возвращать.

// Например:

// filterRangeInPlace(arr, 1, 4); // удалены числа вне диапазона 1..4

// alert( arr ); // [3, 1]
let arr2 = [5, 3, 8, 1];

function filterRangeInPlace(arr2, a, b) {
  for (let i = 0; i < arr2.length; i++) {
    if (arr2[i] < a || arr2[i] > b) {
      arr2.splice(i, 1);
    }
  }
}