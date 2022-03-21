// Get a random number

const random = Number(Math.random().toFixed(2) * 10);

// Get an integer from 0 to X(Where X is any of numbers) .

const X = 20;
const randomX = Math.round(Math.random() * X);

// Проверить результат вычисления 0.6 + 0.7 - как привести к нормальному виду

const fixNum = Number(0.6 + 0.7).toFixed(1);

//

// Конвертация числа в строку
String(44843);  // '44843'

// Конвертация строки в число
Number('590');    // 590
Number('aaa!!');  // NaN

// Конвертация числа в булево значение
Boolean(1);       // true
Boolean(0);       // false

// Конвертация булева значения в строку
String(true);     // 'true'
String(false);    // 'false'