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