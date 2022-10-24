// 1 Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString» То есть дефисы удаляются, а все слова после них получают заглавную букву.

function camelize(str) {
  return str.split('-').map(
    (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
  )
  .join('');
}

// 2 Напишите функцию filterRange(arr, a, b), которая принимает массив arr, ищет в нём элементы между a и b и отдаёт массив этих элементов.Функция должна возвращать новый массив и не изменять исходный.

function filterRange(arr, a, b) {
  return arr.filter(item => (a <= item && item <= b));
}

// 3 Напишите функцию filterRangeInPlace(arr, a, b), которая принимает массив arr и удаляет из него все значения кроме тех, которые находятся между a и b. То есть, проверка имеет вид a ≤ arr[i] ≤ b. Функция должна изменять принимаемый массив и ничего не возвращать.

function fileterRangeInPlace(arr, a, b) {
  for (let i = 0; i < arr.length; i++) {
    let val = arr[i];

    if (val < a || val > b) {
      arr.splice(i, 1);
      i--;
    }
  }
}

// 4 Сортировать в порядке по убыванию

let arr2 = [5, 2, 1, -10, 8];

function sortArray(arr) {
  return arr.sort((a, b) => b - a);
}

sortArray(arr2);

// 5 У нас есть массив строк arr. Нужно получить отсортированную копию, но оставить arr неизменённым. Создайте функцию copySorted(arr), которая будет возвращать такую копию

function copySorted(arr) {
  return arr.slice().sort();
}

// 6 Создайте функцию конструктор Calculator, которая создаёт «расширяемые» объекты калькулятора.

// Задание состоит из двух частей.

//  a) Во - первых, реализуйте метод calculate(str), который принимает строку типа "1 + 2" в формате «ЧИСЛО оператор ЧИСЛО» (разделено пробелами) и возвращает результат.Метод должен понимать плюс + и минус -.

//  b) Затем добавьте метод addMethod(name, func), который добавляет в калькулятор новые операции. Он принимает оператор name и функцию с двумя аргументами func(a,b), которая описывает его.

//  class Calculator  {

//   // #methods = {
//   //   '-': (a, b) => a - b,
//   //   '+': (a, b) => a + b
//   // };

//   #calculate = function(str) {

//     let split = str.split(' ');
//     let a = +split[0];
//     let op = split[1];
//     let b = +split[2];

//     if (!this.methods[op] || isNaN(a) || isNaN(b)) {
//       return NaN;
//     }

//     return this.methods[op](a, b);
//   }

//   #methods = function(name, func) {
//     this.methods[name] = func;
//   }
// }


// 7 У вас есть массив объектов user, и в каждом из них есть user.name. Напишите код, который преобразует их в массив имён.

let vasya4 = { name: "Вася", age: 25 };
let petya4 = { name: "Петя", age: 30 };
let masha4 = { name: "Маша", age: 28 };

let users4 = [ vasya4, petya4, masha4];

let names = users4.map( user => user.name);

// 8 У вас есть массив объектов user, и у каждого из объектов есть name, surname и id.

// Напишите код, который создаст ещё один массив объектов с параметрами id и fullName, где fullName – состоит из name и surname.

let vasya2 = { name: "Вася", surname: "Пупкин", id: 1 };
let petya2 = { name: "Петя", surname: "Иванов", id: 2 };
let masha2 = { name: "Маша", surname: "Петрова", id: 3 };

let users2 = [vasya2, petya2, masha2];

let usersTransformed = users2.map( user => [ {id: user.id, fullName: user.name + user.surname}]);

let usersMapped = users2.map(user => ({
  fullName: `${user.name} ${user.surname}`,
  id: user.id
}));


// 9 Напишите функцию sortByAge(users), которая принимает массив объектов со свойством age и сортирует их по нему.

let vasya3 = { name: "Вася", age: 25 };
let petya3 = { name: "Петя", age: 30 };
let masha3 = { name: "Маша", age: 28 };

let arr3 = [vasya3, petya3, masha3];

function sortByAge() {
  return arr3.slice().sort((a, b) => a.age > b.age ? 1 : -1);
}

// 10 Напишите функцию shuffle(array), которая перемешивает (переупорядочивает случайным образом) элементы массива.

function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}


// алгоритм под названием Тасование Фишера — Йетса .Кроме того, если посмотреть с точки зрения производительности, то алгоритм «Тасование Фишера — Йетса» намного быстрее, так как в нём нет лишних затрат на сортировку.
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}


// 11 Напишите функцию getAverageAge(users), которая принимает массив объектов со свойством age и возвращает средний возраст. Формула вычисления среднего арифметического значения: (age1 + age2 + ... + ageN) / N.

let vasya5 = { name: "Вася", age: 25 };
let petya5 = { name: "Петя", age: 30 };
let masha5 = { name: "Маша", age: 29 };

let arr = [vasya5, petya5, masha5];

function getAverageAge() {
  return arr.reduce((acc, item) => acc + item.age, 0) / arr.length;
}



// 12 Пусть arr – массив строк. Напишите функцию unique(arr), которая возвращает массив, содержащий только уникальные элементы arr.

let strings = ["кришна", "кришна", "харе", "харе",
  "харе", "харе", "кришна", "кришна", ":-O"
];

function unique(arr) {
  let result = [];

  for (let str of arr) {
    if (!result.includes(str)) {
      result.push(str);
    }
  }

  return result;
}

function uniqueBestDecision(arr) {
  return Array.from(new Set(arr));
}