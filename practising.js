'use strict';

const name = ' ';

if (name === 'Anton') {
  console.log('Привет мне!');
} else {
  console.log('Привет незнакомец!');
}

if (name === 'Alex') {
  console.log('Привет Папа!!!');
} else if (name === 'Vera') {
  console.log('Привет Мама!!!');
} else {
  console.log('Привет незнакомец');
}

// Считаю овец с помощью цикла while
   const sheepCounted = 0;

   while (sheepCounted < 10) {
    console.log("Посчитано овец: "`${sheepCounted}`"!");
    sheepCounted++;
   }
   console.log('Xxpppppp');

// Напечаетать все степени тройки с помощью for , while

for (let x = 3; x < 10000; x += 2) {
  console.log(x);
}

const x = 0;
while (x < 10000) {
  x += 3;
  console.log(x);
}

// Упражнение №1 Прекрасные животные

const animals = ['Кот', 'Рыба', 'Лемур', 'Комодский варан'];

for (let i = 0; i < animals.length; i++) {
  animals[i] = animals[i] + '- Прекрасное животное';
  console.log(animals);
}

// Упражнение № 2 Генератопр случайных строк
let alphabet = 'абвгдеёжзиклмнопрстуфхцчыьъэюя';
let randomString = '';

while (randomString < 6) {
  randomString = alphabet.Math.floor(Math.random() * alphabet.length);
  console.log(randomString);
}

// Упражнение № 3 Хакерский язык
let input = 'javascript is awesome';
let output = ' ';

for (let i = 0; i < input.length; i++) {
  if ('a') {
    input = 'j4v4script is 4wesome';
  } else if ('e') {
    input = 'j4v4script is 4w3som3'
  } else if ('i') {
    input = 'j4v4scr1pt 1s 4w3som3'
  } else {
    input = 'j4v4script is 4w3s0m3';
  }
}
console.log(input);
