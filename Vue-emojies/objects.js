let user2 = {
  name: 'Alex',
  age: 12,
  isStudent: false
};

for (let key in user2) {
  console.log(user2[key]);
}

// Task 1
// Привет, object
// важность: 5
// Напишите код, выполнив задание из каждого пункта отдельной строкой:

// Создайте пустой объект user.
// Добавьте свойство name со значением John.
// Добавьте свойство surname со значением Smith.
// Измените значение свойства name на Pete.
// Удалите свойство name из объекта.

const user = {};

user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name;

console.log(user);


// Task 2

//  Проверка на пустоту
// важность: 5
// Напишите функцию isEmpty(obj), которая возвращает true, если у объекта нет свойств, иначе false.

// Должно работать так:

// let schedule = {};

// alert( isEmpty(schedule) ); // true

// schedule["8:30"] = "get up";

// alert( isEmpty(schedule) ); // false


function isEmpty2(obj) {
  if ("key" in obj) {
    return true
  }
  return false
}

function isEmpty3(obj) {
  for (let key in obj) {
    // если тело цикла начнет выполняться - значит в объекте есть свойства
    return false;
  }
  return true;
}



// Task 3

// Объекты-константы?
// важность: 5
// Можно ли изменить объект, объявленный с помощью const? Как вы думаете?

// const user = {
//   name: "John"
// };

// // это будет работать?
// user.name = "Pete";

// Конечно, это сработает без проблем.

// Объявление const защищает только саму переменную от изменений.

// Другими словами, user хранит ссылку на объект. И это не может быть изменено. Но содержимое объекта менять можно.

const user3 = {
  name: "John"
};

// Работает!
user3.name = "Pete";

// // Ошибка
// user3 = 123;


// Task 4

// Сумма свойств объекта
// важность: 5
// У нас есть объект, в котором хранятся зарплаты нашей команды:

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}
// Напишите код для суммирования всех зарплат и сохраните результат в переменной sum. Должно получиться 390.

// Если объект salaries пуст, то результат должен быть 0.

function sumSalaries(object) {
  let sum = 0;

  for (let key in object) {
    sum = sum += object[key]
  }

  return sum;
}

sumSalaries(salaries);


// Task 5

// Умножаем все числовые свойства на 2
// важность: 3
// Создайте функцию multiplyNumeric(obj), которая умножает все числовые свойства объекта obj на 2.

// Например:

// // до вызова функции
let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

// multiplyNumeric(menu);

// // после вызова функции
// menu = {
//   width: 400,
//   height: 600,
//   title: "My menu"
// };
// Обратите внимание, что multiplyNumeric не нужно ничего возвращать. Следует напрямую изменять объект.

// P.S. Используйте typeof для проверки, что значение свойства числовое.

function multiplyNumeric(object,key) {
  for (key in object) {
    if (typeof object[key] === 'number') {
      object[key] *= 2
    }
  }
}

multiplyNumeric(menu);