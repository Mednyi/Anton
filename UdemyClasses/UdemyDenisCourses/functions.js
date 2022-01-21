// Функция проверяющяя число на простое
function showPrime(n) {
  for (let i = 2; i < n; i++) {
    if (!isPrime(i)) continue;

    alert(i); // простое
  }
}

function isPrime(n) {
  for (let i = 2; i < n; i++) {
    if (n % i == 0) return false;
  }

  return true;
}

// Tasks from LearnJs
// 1 Перепишите функцию, используя оператор '?' или '||'

function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm('Родители разрешили?');
  }
}

function checkAge(age) {
  return age > 18 ? true : confirm('Родители разрешили?');
}

function checkAge(age) {
  return (age > 18) || confirm('Родители разрешили?');
}

// 2 Напишите функцию min(a,b), которая возвращает меньшее из чисел a и b.

function min(a, b) {
  return a < b ? a : b < a ? b : a;
}

// 3 Напишите функцию pow(x,n), которая возвращает x в степени n. Иначе говоря, умножает x на себя n раз и возвращает результат.

function getPow1(x, n) {
  return x ** n;
}

function getPow2(x, n) {
  return Math.pow(x, n);
}

function getPow3(x, n) {
  let result = x;

  for (let i = 1; i < n; i++) {
    result *= x;
  }

  return result;
}

// Udemy Denis course  tasts

function foo(x) {
  console.log(x);
  console.log(arguments);

  for (let i = 0; i < arguments.length; i++) {
    console.log(arguments[i]);
  }
}

foo(11, "some string", [1, 2, 3])

// 1 Создать функцию multiply, которая будет принимать любое количество чисел и возвращать их произведение: multiply(1,2,3) = 6 (1*2*3) Если нет ни одного аргумента, вернуть ноль: multiply() // 0

function multiply() {
  if (!arguments.length) return 0;

  let result = 1;

  for (let i = 0; i < arguments.length; i++) {
    result *= arguments[i];
  }

  return result;
}

multiply(2, 4, 5, 6);
multiply();

// 2 Создать функцию, которая принимает строку и возвращает строку-перевертыш: reverseString(‘test’) // “tset”.

function reverseString(str) {
  let string = String(str);
  let reversedString = '';

  for (let i = string.length; i--; ) {
    reversedString += string[i];
  }
  return reversedString;
}

// 3 
// Создать функцию, которая в качестве аргумента принимает строку из букв и возвращает строку, где каждый символ разделен пробелом и заменен на юникод - значение символа:getCodeStringFromText(‘hello’) // “104 101 108 108 111” подсказка: для получения кода используйте специальный метод 

function getCodeStringFromText(str) {
  let string = String(str);
  let strFromText = '';

  for (let i = 0; i < string.length; i++) {
    strFromText += string[i].charCodeAt() + ' ';
  }
  return strFromText.trim();
}

// 4 Создать функцию угадай число. Она принимает число от 1-10 (обязательно проверить что число не больше 10 и не меньше 0). Генерирует рандомное число от 1-10 и сравнивает с заданным числом если они совпали то возвращает “Вы выиграли” если нет то “Вы не угадали ваше число 8 а выпало число 5”. Числа в строке указаны как пример вы подставляете реальные числа.

function guessTheNumber(num) {
  const number = Number(num);

  if (typeof number !== 'number' || isNaN(number)) return new Error('Provide a valid number');

  if (number < 0 || number > 10) return new Error('Please provide number in range 0 - 10');

  const random = Math.ceil(Math.random() * 10);

  if (random === number) return 'You win!';

  return `You are lose, your number is ${number}, the random number is ${number}`
}
