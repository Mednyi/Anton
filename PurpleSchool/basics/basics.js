let name = 'Jhon';
const myName = 'Anton';

name = 'Ben';
console.log(myName, name);

// Порядок операторов
const isSuited = 100 - 10 > 90 - 5;


// Типы данных

const age = 18; /* Числа */
const surname = 'Jhon'; /* Строки */
const isAdmin = true; /* true or false */
const isAdmin2 = undefined; /* Не заданное занчение */
let data; /* Не заданное занчение */
let data1 = null;  /* Пустое значение */
const admin = Symbol('Admin'); /* Уникальное неизменное значение */
const big = BigInt(9999999999999999999n);

// Задача
// Ваша часовая ставка 80$ и вы готовы работать не более 5 часов в день 5 дней в неделю (кроме выходных).
// К вам приходит заказчик и предлагает заказ на 40 часов работы. Сейчас понедельник. Вы должны уехать через 11 дней.
// Выведете в консоль:
// Boolean переменную успеете ли вы взяться за работу
// Сколько вы за неё попросите?

// Данные
const payRateUSD = 80;
const projectHours = 40;
const availableHours = (11 - 2) * 5;

// Результат
console.log('Смогу ли я работать ' + (availableHours > projectHours));
console.log('Стоимость работ: ' + projectHours * payRateUSD + '$');