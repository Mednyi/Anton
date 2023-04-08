'use strict'

const User = function(email, password) {
  this.email = email;
  this.password = password;
}

const user1 = new User('a@a.ru', '13456');
const user2 = new User('a@a.ru', '13456');

console.log(user2 instanceof User);

// Создается пустой объект
// Вызывается User  функция
// this = пустому объекту
// объект связывается с prototype
// возвращается объект


// Prototype

const Book = function(title, author) {
  this.title = title;
  this.author = author;
  this.isRead = false;
}

Book.prototype.read = function() {
  this.isRead = true;
}

Book.prototype.cover = 'Paper';

const lordOfTheRing = new Book('Lord of the Ring', 'Tolkien');
lordOfTheRing.read();

console.log(lordOfTheRing.cover);
console.log(lordOfTheRing.hasOwnProperty('cover'));
console.log(lordOfTheRing.hasOwnProperty('author'));

console.log(lordOfTheRing.__proto__);
console.log(lordOfTheRing.__proto__ === Book.prototype);
console.log(lordOfTheRing.isPrototypeOf(lordOfTheRing));
console.log(lordOfTheRing.isPrototypeOf(Book));

// TASK
/*
  Реализовать на функциях и прототипах корзину товаров с методами
    - Добавить товар
    - Увеличить число товаров
    - Уменьшить число товаров (удалить если их 0)
*/

const product = { id: 1, name: 'Bread', count: 1 };

const Cart = function() {
  this.products = [];
}

Cart.prototype.addProduct = function(product) {
  if (this.products.find(product => product.id === product.id)) {
    return;
  }
  this.products.push(product);
}

Cart.prototype.increaseAmount = function(id) {
  this.products = this.products.map(product => {
    if (product.id === id) {
      product.count++;
      return product;
    }
    return product;
  })
}

Cart.prototype.decreaseAmount = function(id) {
  this.products = this.products
    .map(product => {
      if (product.id === id) {
        product.count--;
        return product;
      }
      return product;
    })
    .filter(product => product.count > 0)
}

const cart = new Cart();
cart.addProduct(product);
cart.increaseAmount(1);
console.log(cart);

// Prototype chaining