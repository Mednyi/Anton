// // let user2 = {
// //   name: 'Ivan',
// //   age: 30,
// //   sayHello() {
// //     console.log('Hello from ' + this.name);
// //   }
// // }

// // let permission1 = { canView: true };
// // let permission2 = { canEdit: true };

// // let clonedUser2 = Object.assign({}, user2);
// // clonedUser2 = Object.assign(user2, permission1, permission2);

// // console.log(clonedUser2);
// // console.log(user2.sayHello());


// // let clone = {};

// // for (let key in user2) {
// //   clone[key] = user2[key]
// //   console.log(clone[key]);
// // }

// // console.log(user2 === clone);

// // Task 1

// // Проверка синтаксиса
// // важность: 2
// // Каким будет результат выполнения этого кода?

// // let user = {
// //   name: "Джон",
// //   go: function() { console.log(this.name) }
// // };

// // (user.go)();
// // P.S. Здесь есть подвох :)


// // Task 2

// // Объясните значение "this"
// // важность: 3
// // В представленном ниже коде мы намерены вызвать obj.go() метод 4 раза подряд.

// // Но вызовы (1) и (2) работают иначе, чем (3) и (4). Почему?

// // let obj, method;

// // obj = {
// //   go: function() { alert(this); }
// // };

// // obj.go();               // (1) [object Object]

// // (obj.go)();             // (2) [object Object]

// // (method = obj.go)();    // (3) undefined

// // (obj.go || obj.stop)(); // (4) undefined


// // Task 3

// // Использование "this" в литерале объекта
// // важность: 5
// // Здесь функция makeUser возвращает объект.

// // Каким будет результат при обращении к свойству объекта ref? Почему?

// function makeUser() {
//   return {
//     name: "Джон",
//     ref: this
//   };
// };

// let user3 = makeUser();

// console.log(user3.ref.name); // Каким будет результат?

// // А вот противоположный случай:

// function makeUser() {
//   return {
//     name: "Джон",
//     ref() {
//       return this;
//     }
//   };
// };

// let user = makeUser();

// console.log(user.ref().name); // Джон


// Task 4

// Создайте калькулятор
// важность: 5
// Создайте объект calculator (калькулятор) с тремя методами:

// read() (читать) запрашивает два значения и сохраняет их как свойства объекта.
// sum() (суммировать) возвращает сумму сохранённых значений.
// mul() (умножить) перемножает сохранённые значения и возвращает результат.
// let calculator = {
//   // ... ваш код ...
// };

// calculator.read();
// alert( calculator.sum() );
// alert( calculator.mul() );

const calculator = {
  read() {
    this.a = console.log('a?', 0)
    this.b = console.log('b?', 0)
  },
  sum() {
    return this.a + this.b
  },
  multiply() {
    return this.a * this.b
  }
}

console.log(calculator.read());

// Task 5

// Цепь вызовов
// важность: 2
// Это ladder (лестница) – объект, который позволяет подниматься вверх и спускаться:
// Теперь, если нам нужно сделать несколько последовательных вызовов, мы можем выполнить это так:

// ladder.up();
// ladder.up();
// ladder.down();
// ladder.showStep(); // 1
// Измените код методов up, down и showStep таким образом, чтобы их вызов можно было сделать по цепочке, например так:

// ladder.up().up().down().showStep(); // 1
// Такой подход широко используется в библиотеках JavaScript.

let ladder = {
  step: 0,
  up() {
    this.step++;
    return this
  },
  down() {
    this.step--;
    return this
  },
  showStep: function() { // показывает текущую ступеньку
    console.log(this.step);
  }
};

console.log(ladder.up().up().down().showStep());