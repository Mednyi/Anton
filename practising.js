'use strict';

const people = {
  name1: 'Anton',
  name2: 'Alex',
  name3: 'Vera',
};

if (people.name1 === 'Anton') {
  console.log('Привет мне!');
} else if (people.name2 === 'Alex') {
  console.log('Привет Папа!!!');
} else if (people.name3 === 'Vera') {
  console.log('Привет Мама!!!');
} else {
  console.log('Привет незнакомец');
}

// Считаю овец с помощью цикла while
let sheepCounted = 0;

while (sheepCounted < 10) {
  console.log(`Посчитано овец: ${sheepCounted}`);
  sheepCounted++;
}
console.log('Xxpppppp');

// Напечаетать все степени тройки с помощью for , while

for (let x = 1; x < 10000; x *= 3) {
  console.log(x);
}

let x = 1;
while (x < 10000) {
  console.log(x);
  x *= 3;
}

// Упражнение №1 Прекрасные животные

const animals = ['Кот', 'Рыба', 'Лемур', 'Комодский варан'];

for (let i = 0; i < animals.length; i++) {
  animals[i] += '- Прекрасное животное';
  console.log(animals);
}

// Упражнение № 2 Генератопр случайных строк
const randomStringLength = 6;
let alphabet = 'абвгдеёжзиклмнопрстуфхцчыьъэюя';
let randomString = '';

while (randomString.length < randomStringLength) {
  let randomIndex = Math.round(Math.random() * alphabet.length);

  randomString += alphabet[randomIndex];
}

// Упражнение № 3 Хакерский язык
let input = 'javascript is awesome';
let output = '';

for (let i = 0; i < input.length; i++) {
  if (input[i] === 'a') {
    output += '4';
  } else if (input[i] === 'e') {
    output += '3';
  } else if (input[i] === 'i') {
    output += '1';
  } else {
    output += input[i];
  }
}
console.log(output);
