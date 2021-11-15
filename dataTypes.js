// Можно ли добавить свойство строке?

// Взгляните на следующий код:

let str = "Привет";

str.test();

alert(str.test);
// Как вы думаете, это сработает? Что выведется на экран?

// 1) Сумма пользовательских чисел
// Создайте скрипт, который запрашивает ввод двух чисел (используйте prompt) и после показывает их сумму.
// my way of resolving
let sumPromt = (a, b) => +prompt(a + b);


// another way of resolving
let a = +prompt("Введите первое число", "");
let b = +prompt("Введите второе число", "");

alert( a + b );

// 2 Почему 6.35.toFixed(1) == 6.3?

alert( Math.round(6.35 * 10) / 10); // 6.35 -> 63.5 -> 64(rounded) -> 6.4

// 3 Ввод числового значения

// Создайте функцию readNumber, которая будет запрашивать ввод числового значения до тех пор, пока посетитель его не введёт.

// Функция должна возвращать числовое значение.

// Также надо разрешить пользователю остановить процесс ввода, отправив пустую строку или нажав «Отмена». В этом случае функция должна вернуть null.

function readNumber() {
  let num;

  do {
    num = prompt("Введите число", 0);
  } while ( !isFinite(num) );

  if (num === null || num === '') return null;

  return +num;
}

alert(`Число: ${readNumber()}`);

// 4 Бесконечный цикл по ошибке

let i = 0;
while (i != 10) {
  i += 0.2;
}

// Потому что i никогда не станет равным 10.

// Запустите скрипт и вы увидите реальные значения i:

let i = 0;
while (i < 11) {
  i += 0.2;
  if (i > 9.8 && i < 10.2) alert( i );
}
// Ни одно из этих чисел не равно 10.

// Это происходит из-за потери точности, при прибавлении таких дробей как 0.2.

// Вывод: избегайте проверок на равенство при работе с десятичными дробями.


// 5 Случайное число от min до max

function getRandomNum(min, max) {
    return Math.floor(min + Math.random() * (max - min));
}

// 6 Случайное целое число от min до max

function randomInteger(min, max) {
  // случайное число от min до (max+1)
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

alert( randomInteger(1, 3) );