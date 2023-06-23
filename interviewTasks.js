// 1 Задача с собеседования
// Задача вернуть отсортированный массив уникальных классов , где на первом месте идут классы чаще всего повторяющиеся

let classNames = ['header', 'menu', 'menu-item', 'menu-item', 'menu-item', 'footer', 'menu', 'link', 'link', 'link', 'link'];

// mY solution

// const sortClassNames = (arr) => {
//   // let result = [];

//   // for (let i = 0; i < arr.length; i++) {
//   //   if (arr[i].length === arr[i].length) {
//   //     result += arr[i];
//   //   }\
//   // }

//   // return result;

//   const sortedArr = arr.sort((a, b) => b.localeCompare(a));

//   // const unique = array1.filter((item, index, array) => array.indexOf(item) === index)

//   const uniqueArr = Array.from(new Set(sortedArr));
//   return uniqueArr;
// }

// right solution

const sortClassNames2 = (arr) => {
  let countClassNames = {};
  let uniqueClassNames = [];

  for (let i = 0; i < arr.length; i ++) {
    let current = arr[i];

    if (countClassNames[current]) {
      countClassNames[current] += 1;
    } else {
      countClassNames[current] = 1;
      uniqueClassNames.push(current);
    }
  }

  let result = uniqueClassNames.sort((a,b) => {
    return countClassNames[b] - countClassNames[a];
  });

  return result;
}

console.log(sortClassNames2(classNames));



// 2 Задача с собеседования
// Задача про числа Фибоначчи

function fibonacci(num) {
  const result = [0, 1];

  for(let i = 2; i <= num; i++) {

    const prevNum1 = result[i - 1];
    const prevNum2 = result[i - 2];
    result.push(prevNum1 + prevNum2);
  }

  return result[num];
}

function fibonacciShort(num) {
  let a = 1,
      b = 1;

  for (let i = 3; i <= num; i++) {
    [a, b] = [b, a + b];
  }
  return b;
}
console.log(fibonacciShort(7));

function fibonacciRecursion(num) {
  if(num < 2) {
    return num;
  }

  return fibonacciRecursion(num - 1) + fibonacciRecursion(num - 2);
}

console.log(fibonacciRecursion(7));

// 3 Задача с собеседования
// Популярная задача на собеседованиях: анаграмма

anagram('friend', 'Finder'); //true
anagram('hello', 'bye'); //false

function buildCharObject(str) {
  const charObj = {};
  str = str.toLowerCase().replace(/[^\w]/g);

  for (let char of str) {
    charObj[char] = charObj[char] + 1 || 1;
  }

  return charObj;
}

function anagram(strA, strB) {
  const aCharObj = buildCharObject(strA);
  const bCharObj = buildCharObject(strB);

  if (Object.keys(aCharObj).length !== Object.keys(bCharObj).length) {
    return false;
  }

  for (let char in aCharObj) {
    if (aCharObj[char] !== bCharObj[char]) {
      return false;
    }
  }
  return true;
}

// Oneliner
const anagram2 = (a,b) => [...a.toLowerCase()].sort().toString() === [...b.toLowerCase()].sort().toString();


// 4 Задача с собеседования
// FizzBuzz

fizzBuzz(24);

function fizzBuzz(num) {
  for (let i = 1; i <= num; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log('fizzbuzz');
    }
    else if (i % 3 === 0) {
      console.log('fizz');
    }
    else if (i % 5 === 0) {
      console.log('buzz');
    }
    else {
      console.log(i);
    }
  }
}


function fizzBuzz(num) {
  for (let i = 1; i <= num; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log('fizzbuzz');
    }
    else if (i % 3 === 0) {
      console.log('fizz');
    }
    else if (i % 5 === 0) {
      console.log('buzz');
    }
    else {
      console.log(i);
    }
  }
}


// 5 Задача с собеседования
// про лабиринт

let maze = [
  [1, 1, 1, 0, 0, 1],
  [1, 1, 1, 1, 0, 1],
  [0, 0, 0, 0, 0, 0],
  [0, 1, 1, 1, 1, 1],
  [0, 0, 0, 0, 0, 0],
  [1, 1, 1, 1, 1, 0]
];

console.log(maze);

function checkPath(start, end) {
  maze[start.y][start.x] = 5;

  let siblings = getValidSib(start);

  if (siblings.length > 0) {
    for (let i = 0; i < siblings.length; i++) {
      const current = siblings[i];

      const isSolved = current.x === end.x && current.y === end.y;
      const notVisited = maze[current.y][current.x] !== 5;

      if (isSolved || (notVisited && checkPath(current, end))) {
        // console.log(current);
        return true;
      }
    }
  }
  return false;
}

function getValidSib(cord) {
  const { x, y } = cord;

  let cords = [];

  if (maze[y - 1] !== undefined) {
    cords.push({ x: x, y: y - 1, val: maze[y - 1][x] });
  }
  if (maze[y + 1] !== undefined) {
    cords.push({ x: x, y: y + 1, val: maze[y + 1][x] });
  }
  if (maze[y][x - 1] !== undefined) {
    cords.push({ x: x - 1, y: y, val: maze[y][x - 1] });
  }
  if (maze[y][x + 1] !== undefined) {
    cords.push({ x: x + 1, y: y, val: maze[y][x + 1] });
  }

  return cords.filter((crd) => crd.val === 0);
}

console.log(checkPath({ x: 3, y: 0 }, { x: 5, y: 5 }));
console.log(maze);

// 6 Посчитать сколько раз элемент встречается в массиве
// {kiwi: 3, apple: 2, orange: 1}


const fruits = ['kiwi', 'apple', 'kiwi', 'orange', 'kiwi', 'orange', 'apple', 'orange', 'kiwi', 'apple'];

const countFruits = (arr) => {
  const count = {};

  for (let item of arr) {
    if (!count[item]) {
      count[item] = 1;
    } else {
      count[item]++;
    }
  }

  return count;
};

console.log(countFruits(fruits));

const countFruits2 = (arr) => {
  const count = {};

  return arr.reduce((acc, current) => {
    if (!count[current]) {

    }
  }, {});
};


// 7 Создать массив, который содержит только уникальные значения

const fruits2 = ['kiwi', 'apple', 'kiwi', 'orange', 'kiwi', 'orange', 'apple', 'orange', 'kiwi', 'apple'];

const newFruits = new Set(fruits2);

console.log(Array.from(newFruits));

// const fruits2 = ['kiwi', 'apple', 'kiwi', 'orange', 'kiwi', 'orange', 'apple', 'orange', 'kiwi', 'apple'];

// const uniqueItems = (array) => {
//   const unique = {};

//   array.forEach(item => {
//     unique[item] = true;
//   });

//   return Object.keys(unique);
// }

// console.log(uniqueItems(fruits2));



// 8 Создать функцию, которая сгруппирует студентов по возрасту.
// На выходе получить объект, где ключ - возраст,
// а значение - массив студентов
// {
//   '20': [{ name: 'alex', age: 20 }, { name: 'masha', age: 20 }],
//   '24': [{ name: 'mike', age: 24 }],
//   '18': [{ name: 'stas', age: 18 }],
// }
const students = [
  { name: 'alex', age: 20 },
  { name: 'mike', age: 24 },
  { name: 'masha', age: 20 },
  { name: 'stas', age: 18 },
];



// 9. Написать функцию, которая принимает два аргумента:
// массив из уникальных целых чисел и сумму в виде целого числа.
// Если сумма двух любых чисел массива из аргумента равна числу,
// которое приходит вторым аргументом, функция должна
// вернуть новый массив из этих двух чисел в любом порядке.
// Если решения нет, вернуть пустой массив.

// [-1, 11] или [11, -1] - так как -1 + 11 = 10;

const myNumbers = [3, 5, -4, 8, 11, 1, -1, 6];
const sum = 10;



// 10. Получить единый массив из любимых пицц каждого друга
// ['cheese', 'pepperoni', 'meat', 'fish']
const friends = [
  { name: 'alex', pizzas: ['cheese', 'pepperoni'] },
  { name: 'mike', pizzas: ['salami', 'margarita'] },
  { name: 'stas', pizzas: ['meat'] },
  { name: 'anna', pizzas: ['fish'] }
];



// 11. Записать строку (символы строки) в обратном порядке (2 способа)
// pizza => azzip
const myStr = 'pizza';