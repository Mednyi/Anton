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

// Ask Kostay about another solution of chessBoard task
const squares = Array.from(document.querySelectorAll('.grid div'))

//Challenge: We use what we have learnt in the previous three lessons in order 
//to visually colour a game board in our browser. At the moment the board is empty. 
//Please colour the squares, similar to like you would on a chess board using the 
//for loop.

//Don't forget to share your code in the #share-your-code channel on discord.


for (let i = 0; i < squares.length; i++) {
  if (i % 2 === 0) {
      squares[i].classList.add('even')
  } else squares[i].classList.add('odd')
}

// Массивы

// 1
const checkNumers = (arr) => {
  for (let i = 0; i < arr.length; i++ ) {
    if (arr[i] % 2 !== 0) {
      return false
    }
  }
  return true;
}

// Решение с метоами Some and Every
const checkNumersSome = () => !arr.some((item) => item % 2 !== 0);

const checkNumersEvery = () => arr.every((item) => item % 2 === 0);


// 2
const checkNumers1 = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      return true;
    }
  }
  return false;
}

// Решение с метоами Some
const checkNumersAny = (arr) => arr.some((item) => item % 2 !== 0); 

// 3
 
const filterArr = (arr) => {
  const filteredNum = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 5 === 0) {
      filteredNum.push(arr[i]);
    }
  }
  return filteredNum;
}

const filterArr1 = (arr) => arr.filter(item => item % 5 === 0);

// 4

const getAverage = (arr) => {
  let sumNumber = 0;
  for (let i = 0; i < arr.length; i++) {
    sumNumber += arr[i];
  }
  return Number(sumNumber / arr.length).tofixed(2);
}

const getAverage1 = (arr) => arr.reduce((acc, item) => acc + item, 0) / arr.length;

// 5

const shiftArr = (arr) => {
  const firstEl = arr.shift();
  arr[arr.length - 1] = firstEl; 
}

// 6

const employees = [
  {
    name: 'Anna',
    age: 29
  },

  {
    name: 'Jonh',
    age: 45
  },

  {
    name: 'Ted',
    age: 34
  },

  {
    name: 'Monica',
    age: 23
  },

  {
    name: 'Paul',
    age: 35
  },

  {
    name: 'Dilon',
    age: 43
  }
]

const showEmployee = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    arr.map((item) => `${item[i]}`)
  }
  return item[i];
}