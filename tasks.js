'use strict';

const multiply = (num1, num2) => num1 * num2;

const getStrig = (name, surname, age) => `Привет ${name} ${surname}
с возрастом ${age} лет`;

const getSex1 = (sex) => sex ? sex === 'M' ? 'Ваш пол мужской' : 'Ваш пол женский'
: 'Ваш поло не определен';

const getSex2 = (sex) => {
  if (sex === 'M') {
    return 'Ваш пол мужской';
  } else if (sex === 'Ж') {
    return 'Ваш пол женский';
  }
  return 'Ваш пол не определен';
}

const getDayWeek = (number) => {
  const weekDays = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Сублота', 'Воскресенье'];
  return weekDays[number - 1];
}

getDayWeek(6);

const getFirstWords = (str) => {
  const sentenses = str.split('.');
  return sentenses.map(sentense => sentense.trim().split(' ')[0]).join(', ');
}
