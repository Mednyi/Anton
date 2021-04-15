'use strict';

// Основные знания
// Базовые

// 1
const multiply = (num1, num2) => num1 * num2;

// 2
const getStrig = (name, surname, age) => `Привет ${name} ${surname}
с возрастом ${age} лет`;

// 3
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

// 4
const getDayWeek = (number) => {
  const weekDays = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Сублота', 'Воскресенье'];
  return weekDays[number - 1];
}

getDayWeek(6);

// 5
const getFirstWords = (str) => {
  const sentenses = str.split('.');
  return sentenses.map(sentense => sentense.trim().split(' ')[0]).join(', ');
}


// 6
const sayGreeting = (name) => {
  const time = {
    утро: [4, 12],
    день: [12, 18],
    вечер: [18, 21],
    ночь: [21, 3]
  }

  const now = new Date();
  const hour = now.getHours();
  
  const currentTime = Object.keys(time).find(item => time[item][0] <= hour && time[item][1] >= hour);
  return `Доброе ${curentTime} ${name}`;
}

// 7
const getAge = () => {
  const ages = {
    ребёнок: [1, 17],
    молодой: [18, 30],
    зрелый: [30, 55],
    старый: [55, Infinity]
  }

  for (let i = 1; i < 100; i++ )  {
    const currentAge = Object.keys(ages).find(item => ages[item][0] <= i && ages[item][1] >= i);
    console.log(`${i} ${currentAge}`)
  }
}

const getAge1 = () => {
  let currentAge;
  for (let i = 1; i < 100; i++) {
    if (i >= 1 && i <= 17) {
      console.log(`${i} ребёнок`);
    }

    if (i >= 18 && i <=30) {
      console.log(`${i} молодой`);
    }

    if (i >= 30 && i <= 55) {
      console.log(`${i} зрелый`);
    }

    if (i >= 55 && i <= Infinity) {
      console.log(`${i} старый`);
    }
  }
}

// 8
const getPersonData = (name, age) => {
  if (age >= 1 && age <= 17) {
    console.log(`${name} имеет возраст ${age} ребёнок`);
  }
  
  if (age >= 18 && age <= 30) {
    console.log(`${name} имеет возраст ${age} молодой`);
  }

  if (age >= 30 && age <= 55) {
    console.log(`${name} имеет возраст ${age} зрелый`);
  }

  if (age >= 55 && age <= Infinity) {
    console.log(`${name} имеет возраст ${age} старый`);
  }
}