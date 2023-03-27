for (let i = 1; i < 10; i++) {
  console.log(`Our balance ${i}$`);
}

// Break and continue

const tasks = ['Task1', 'Task2'];

for (let i = 1; i < tasks.length; i++) {
  console.log(tasks[i]);
}

for (let i = 1; i < tasks.length; i++) {
  if (tasks[i] === 'Task2') {
    continue; /* Skip iteration */
  }
  console.log(tasks[i]);
}

for (let i = 1; i < tasks.length; i++) {
  if (tasks[i] === 'Task2') {
    break; /* Stop iteration */
  }
  console.log(tasks[i]);
}


// TASK

/* Задача вывести в консоль строку "Я люблю JS !" из массива,
проходя циклом в обратном порядке, не используя метод reverse.
const arr = ['!', 'JS', 'люблю', 'Я'];
*/

const arr = ['!', 'JS', 'люблю', 'Я'];
const result = [];

for (let i = arr.length - 1; i >= 0; i--) {
  result.push(arr[i]);
}

console.log(result.join(' '));

console.log(arr.reverse().join(' '));

// Loop in loop

for (let i = 1; i < 5; i++) {
  console.log(`Loop - 1 ${i}`);
  for (let j = 1; j < 5; j++) {
    console.log(`Loop - 2 ${j}`);
  }
}

const userTasks = [[1, 'Task-1'], [2, 'Task-2']];

for (let i = 0; i < userTasks.length; i++) {
  for (let j = 0; j < tasks[i].length; j++) {
    console.log(tasks[i][j]);
  }
}


// While

for (let i = 0; i < 5; i++) {
  console.log(`Output - ${i}`)
}

let i = 0;
while (i < 5) {
  console.log(`Output - ${i}`);
  i++;
}


const array = [1, 2, 4, 6, 7];

for (let i = 0; i < array.length; i++) {
  if (array[i] > 5) {
    break;
  }

  console.log(array[i])
}

let i1 = 0;
while (array[i1] <= 5 && i < array.length) {
  console.log(array[i1]);
  i++;
}

let j = 0;

do {
  console.log(array[i1]);
  j++;
} while(j < 0)


// For of , For in

for (let element of array) {
  console.log(element);
}

for (let index in array) {
  console.log(index);
  console.log(array[index]);
}


// TASK
// /*
// Есть выгрузка операций пользователя
// const operations = [1000, -700, 300, -500, 10000];
// а так же начальный баланс в 100$
// Необходимо сделать функции расчета:
// - Итогового баланса
// - Наличия отрицательного баланса (если после очередной операции баланс < 0, то выдавать false)
// - Расчета среднего расхода и среднего дохода
// */

const operations = [1000, -700, 300, -500, 10000];
const startingBalance = 100;

function getBalance(arrayOfOperations, initialBalance) {
  let balance = initialBalance;

  for (const element of arrayOfOperations) {
    balance += element;
  }

  return balance;
}

console.log(getBalance(operations, startingBalance))

function checkOperations(arrayOfOperations, initialBalance) {
  let balance = initialBalance;
  const isOk = true;

  for (const element of arrayOfOperations) {
    balance += element;

    if (balance < 0) {
      isOk = false;
      break;
    }
  }

  return isOk;
}

console.log(checkOperations(operations, startingBalance));

function getAvarageOperations(arrayOfOperations) {
  let positiveCount = 0;
  let negativeCount = 0;
  let positiveSum = 0;
  let negativeSum = 0;

  for (const element of arrayOfOperations) {
    if (element > 0) {
      positiveCount++;
      positiveSum += element;
    }

    if (element < 0) {
      negativeCount++;
      negativeSum += element;
    }
  }

  return [positiveSum / positiveCount, negativeSum / negativeCount];
}