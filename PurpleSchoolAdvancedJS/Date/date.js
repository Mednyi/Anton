'use strict'

const now = new Date();
console.log(now);
console.log(new Date('02-01-2023'));
console.log(new Date('02/01/2023'));
console.log(new Date('2023/01/02'));
console.log(new Date('10 Jan 2023'));
console.log(new Date('10 Янв 2023'));
console.log(new Date('Dec 22 2022 20:40:03'));

console.log(new Date(2024, 11, 31, 10, 5, 10));
console.log(new Date(Date.now()));

console.log(now.getFullYear());
console.log(now.getMonth());
console.log(now.getDate());
console.log(now.getDay());
console.log(now.getHours());
console.log(now.getMinutes());
console.log(now.getTime());

// Operation with date

const date1 = new Date(2024, 10, 15);
const date2 = new Date(2024, 11, 15);
console.log(Number(date1));
console.log(date2 - date1);

function getDaysBetweenDates(firstDate, secondDate) {
  return (firstDate - secondDate) / (1000 * 60 * 60 * 24);
}

// Compare dates

const first = new Date(2024, 10, 4);
const second = new Date(2024, 10, 3);

console.log(first < second); /* false */
console.log(first == second); /* false */
console.log(first === second); /* false */

console.log(first.getTime() == second.getTime()); /* true */
console.log(first.getTime() === second.getTime()); /* true */

console.log(Number(first) === Number(second)); /* true */
console.log(+first === +second); /* true */

// TASK

/*
Сделать ф-цию , которая принимает пользователя и проверяет , есть ли у него сегодня день рождения или нет
*/

const user1 = {
  name: 'Vanay',
  birthDay: '12/23/2022'
};

function isBirthDay(user) {
  const birthDayDate = new Date(user.birthDay);
  const now = new Date();

  if (birthDayDate.getMonth() !== now.getMonth()) {
    return false;
  }
  if (birthDayDate.getDate() !== now.getDate()) {
    return false;
  }
  return true;
}

// // Internationalisation of dates

const data2 = new Date();
console.log(new Intl.DateTimeFormat('ru-Ru').format(date));

const options2 = {
  hour: 'numeric',
  minute: 'numeric'
};
console.log(new Intl.DateTimeFormat('ru-Ru', options2).format(date));

const options3 = {
  hour: 'numeric',
  minute: 'numeric',
  month: 'long',
  weekday: 'short',
  year: '2-digit'
};
console.log(new Intl.DateTimeFormat('en-US', options3).format(date));
console.log(new Intl.DateTimeFormat('ru-Ru', options3).format(date));