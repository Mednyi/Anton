const role1 = 'admin';
const role2 = 'user';
const role3 = 'superuser';

const roles = ['admin', 'user', 'superuser'];
const userInfo = ['Anna', 25];

console.log(roles[0]);
console.log(roles[1]);
console.log(roles[2]);
console.log(roles.length);

console.log(roles[roles.length - 1]);

console.log(roles.at(0));
console.log(roles.at(-1)); /* The last element of the array */

const userNames = new Array('Vasia', 'Petia', 'Katia');
console.log(userNames);

// The running the elements of the array

const users = ['Kate', 'Anna', 'Vika'];

users.push('Nik');

console.log(users);

users.unshift('Vasia');

console.log(users);

users.pop()

console.log(users);

users.shift();

console.log(users);


// The finding the element of the array

const roles2 = ['user', 'admin', 'manager'];

const elIndex = roles2.indexOf('admin');  /* Return the index of the element*/
const elIndex2 = roles2.indexOf('superuser');

if (roles2.indexOf('admin') >= 0) {
  console.log('Access is available');
}

console.log(roles2.includes('admin')); /* Return true or false if there is string like admin*/

if (roles2.includes('admin')) {
  console.log('Access is available');
}

// Slice, splice, concat, reverse

const roles3 = ['user', 'admin', 'manager'];

const res = roles3.slice(2);

const res2 = roles3.slice(2, 3);

const res3 = roles3.slice(-1);

const res4 = roles3.slice(1, -1);

const res5 = roles3.splice(2);

const res6 = roles3.splice(2, 2);

// From string to Array

const roles4 = ['user', 'admin', 'manager', 'superuser'];

const url = 'auth/user/login';
const result = url.split('/');

console.log(roles4.join('-'));


// TASK
// Дан список задач
// Сделать функции:
// Добавление задачи в конец
// Удаление задачи по названию
// Перенос задачи в начало списка по названию
// ! Всегда меняем исходный массив

const tasks = ['Задача 1'];

function addNewTask(task) {
  tasks.push(task);
}

function deleteTask(task) {
  const index = tasks.indexOf(task);

  if (index === -1) return; /* If there is no task at all */

  tasks.splice(index, 1)
}

function prioritizeTasks(task) {
  const index = tasks.indexOf(task);
  if (index === -1) return; /* If there is no task at all */
  const oldTask = tasks[index];

  tasks.splice(index, 1)
  tasks.unshifr(oldTask);
}

// DRY (Do not repeat yourself)

const tasks2 = ['Задача 1'];

function addNewTask(task) {
  tasks2.push(task);
}

function deleteTask(task) {
  const index = tasks.indexOf(task);

  if (index === -1) return; /* If there is no task at all */

  tasks2.splice(index, 1)
}

function prioritizeTasks(task) {
  const result = deleteTask(task);

  if (!result) {
    return;
  }
  tasks2.unshifr(result[0]);
}


// Destructuring

const userData = ['Anton', 18, 'Moskow'];

const [userName, age, city] = userData;

const [userName2, _, city2] = userData;


// Rest operator

const data = [1, 2, 3, 4, 5, 6];
const [one, two, ...others] = data;

// TASK
// Дан произвольный url вида - https://purpleschool.ru/course/javascript
// Нужно сделать функцию, которая выводит в консоль:
// Протокол (https)
// Доменное имя (purpleschool.ru)
// Путь внутри сайта (/course/javascript)

const url2 = 'https://purpleschool.ru/course/javascript';

function getUrlParts(url) {
  const data = url2.split('/');
  const [protocol, _, host, ...path] = data;
  if (protocol === 'https:' || protocol === 'http:') {
    if (!host.includes('.')) {
      return;
    }
    console.log(protocol, _, host, path);
    console.log(`Protocol: ${protocol.split(':')[0]}`);
    console.log(`Domen's name: ${host}`);
    console.log(`Path inside website: /${path.join('/')}`);
  }
}