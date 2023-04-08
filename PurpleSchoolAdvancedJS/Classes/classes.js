'use strict'

const Book = function(title, author) {
  this.title = title;
  this.author = author;
  this.isRead = false;
}

Book.prototype.read = function() {
  this.isRead = true;
}

class BookClass {
  isRead = false;

  constructor(title, author) {
    this.title = title;
    this.author = author;
  }

  read() {
    this.isRead = true;
  }
}

const lotr = new BookClass('lotr', 'Tolkien');

console.log(lotr);
console.log(lotr instanceof BookClass);
console.log(lotr.read());
console.log(lotr.__proto__);


// Setters and Getters

const task = {
  title: 'Task1',
  dueTo: new Date('2023/01/01'),

  get isOverDue() {
    return this.dueTo < new Date()
  },

  set isOverDue(isOverdueTask) {
    if (!isOverdueTask) {
      this.dueTo = new Date()
    }
  }
};

console.log(task.isOverDue);

class Task {
  constructor(title, dueDate) {
    this.title = title;
    this.dueDate = dueDate;
  }

  get isOverdue() {
    return this.dueDate < new Date();
  }

  set dueDate(date) {
    if (date < new Date()) {
      return;
    }
    this._dueDate = date;
  }
}


// Static methods and properties

class Test {
  static a = 1;
  static hello() {
    console.log('Hello');
  }

  static {
    let b = 5;
    this.a = 5;
  }
}

Test.hello();
console.log(Test.a);

// Private methods and properties

class Car {
  #vin = 6;
  speed;

  #changeVin() {
    console.log('changed');
  }

  test() {
    this.#changeVin();
  }

  static #field = 3;

  static {
    this.#field = 5;
  }
}


// TASK
/*
  Реализовать класс пользователя, со свойствами
    - логин
    - пароль
  Причем пароль при установке должен переворачиваться
  и в таком виде зранться.
  Пароль и логин  после создания изменить нельзя. Так же у  класса добавить методы
    - Смены пароля ( передаём старый и новый пароль)
    - Сверки пароля
*/

class User {
  #login;
  #_password;

  constructor(login, password) {
    this.#login = login;
    this.#password = password;
  }

  set #password(pass) {
    this.#_password = pass.split('').reverse().join('');
  }

  get #password() {
    return this.#_password.split('').reverse().join('');
  }

  get login() {
    return this.#login;
  }

  checkPassword(pass) {
    return this.#password === pass;
  }

  changePassword(oldPass, newPass) {
    if (!this.checkPassword(oldPass)) {
      return false;
    }
    this.#password = newPass;
    return true;
  }
}