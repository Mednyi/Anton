'use strict'

function showThis(a, b) {
  console.log(this);

  function sum() {
    console.log(this);
    return a + b;
  }

  console.log(sum());
}

showThis(4, 5);

const obj = {
  a: 15,
  b: 20,
  sum: function() {
    console.log(this);
  }
};

obj.sum();


function User(name, id) {
  this.name = name;
  this.id = id;
  this.human = true;
  this.hello = function() {
    console.log(`Hello ${this.name}`);
  }
}

let ivan = new User('Ivan', 25);

function sayName(surname) {
  console.log(this);
  console.log(this.name + surname);
}

const user = {
  name: 'John'
}

sayName.call(user, 'Smith');
sayName.apply(user, ['Smith']);

function count(num) {
  return this * num;
}

const double = count.bind(2);

console.log(double(3));
console.log(double(13));


// 1) Обычная ф-ция: this = window, но если use strict - this = undefined
// 2) Контекст у методов объекта - сам объект
// 3) this в кострукторах и классах - это новый экземпляр объекта
// 4) Ручная привязка this: call, apply, bind


// Пример ручной привязки контекста

const numbers1 = {
  numberA: 5,
  numberB: 10,
  sum: function() {
    console.log(this === numbers1); // => true
    function calculate() {
      // this is window or undefined in strict mode
      console.log(this === numbers1); // => false
      return this.numberA + this.numberB;
    }
    return calculate();
  }
};
console.log(numbers1.sum()); // => NaN or throws TypeError in strict mo

const numbers = {
  numberA: 5,
  numberB: 10,
  sum: function() {
    console.log(this === numbers); // => true
    function calculate() {
      console.log(this === numbers); // => true
      return this.numberA + this.numberB;
    }
    // use .call() method to modify the context
    return calculate.call(this);
  }
};
console.log(numbers.sum()); // => 15