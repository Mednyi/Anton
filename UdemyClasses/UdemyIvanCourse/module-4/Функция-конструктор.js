'use strict'

function User(name, id) {
  this.name = name;
  this.id = id;
  this.human = true;
  this.hello = function() {
    console.log(`Hello ${this.name}`);
  }
}

User.prototype.exit = function() {
  console.log(`Пользователь ${this.name} ушел`);
};

ivan.exit();

const ivan = new User('Ivan', 3);
const igor = new User('Igor', 3);

igor.hello();
ivan.hello();

console.log(jhon);
