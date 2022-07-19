function User(name) {
  this.name = name;

  this.sayHello = function() {
    console.log('My name is: ' + this.name)
  }
}

let oleg = new User('Oleg');

oleg.sayHello();


// Constructors may be converted to a class declaration

class User2 {
  constructor(name) {
    this.name = name;

    this.sayHello = function () {
      console.log('My name is: ' + this.name);
    };
  }
}

let vasay = new User('Vasay');

vasay.sayHello();

console.log(typeof vasay);


// Task 1

// Две функции - один объект
// важность: 2
// Возможно ли создать функции A и B в примере ниже, где объекты равны new A()==new B()?

// function A() { ... }
// function B() { ... }

// let a = new A;
// let b = new B;

// alert( a == b ); // true
// Если да – приведите пример вашего кода.

// Да, возможно.

// Если функция возвращает объект, то вместо this будет возвращён этот объект.

// Например, они могут вернуть один и тот же объект obj, определённый снаружи

let obj = {};

function A() {
  return obj;
}

function B() {
  return obj;
}

let a = new A();
let b = new B();

console.log(a === b);

// Task 2

// Создание калькулятора при помощи конструктора
// важность: 5
// Создайте функцию-конструктор Calculator, который создаёт объекты с тремя методами:

// read() запрашивает два значения при помощи prompt и сохраняет их значение в свойствах объекта.
// sum() возвращает сумму введённых свойств.
// mul() возвращает произведение введённых свойств.
// Например:

// let calculator = new Calculator();
// calculator.read();

// alert( "Sum=" + calculator.sum() );
// alert( "Mul=" + calculator.mul() );

function Calculator() {
  this.read = function() {
    this.a = +prompt('a?', 0);
    this.b = +prompt('b?', 0);
  }
  this.sum = function() {
    return this.a + this.b;
  }
  this.mul = function() {
    return this.a * this.b;
  }
}

let calculator = new Calculator();
console.log(calculator.sum());


// Task 3

// Создаём Accumulator
// важность: 5
// Напишите функцию-конструктор Accumulator(startingValue).

// Объект, который она создаёт, должен уметь следующее:

// Хранить «текущее значение» в свойстве value. Начальное значение устанавливается в аргументе конструктора startingValue.
// Метод read() использует prompt для получения числа и прибавляет его к свойству value.
// Таким образом, свойство value является текущей суммой всего, что ввёл пользователь при вызовах метода read(), с учётом начального значения startingValue.

// Ниже вы можете посмотреть работу кода:

// let accumulator = new Accumulator(1); // начальное значение 1

// accumulator.read(); // прибавит ввод prompt к текущему значению
// accumulator.read(); // прибавит ввод prompt к текущему значению

// alert(accumulator.value); // выведет сумму этих значений

function Accumulator(startingValue) {
  this.value = startingValue;

  this.read = function() {
    this.value += +prompt("Сколько нужно добавить?", 0);
  }
}

let accumulator = new Accumulator(1); // начальное значение 1

accumulator.read(); // прибавит ввод prompt к текущему значению
accumulator.read(); // прибавит ввод prompt к текущему значению

alert(accumulator.value); // выведет сумму этих значений

