'use strict'

/**
 * Абстракция и Инкапсуляция
 * -Название
 * -Режиссёр
 * -Наш рейтинг
 * -Длительность
 * -Страна производитель
 * -Актёры
 * -Трейлер
 */

class Film {
  #name;
  #author;
  #rating;
  #length;

  constructor(name, author, length) {
    this.#name = name;
    this.#author = author;
    this.#length = length;
  }

  get name() {
    return this.#name;
  }

  get author() {
    return this.#author;
  }

  get length() {
    return this.#length;
  }
}

const film = new Film('Avatar', 'Cameron', 240);
console.log(film);

// Inheritence

const Book = function(title, author) {
  this.title = title;
  this.author = author;
}

Book.prototype.buy = function() {
  console.log('Buy');
}

const AudioBook = function(title, author, lengMin) {
  Book.call(this, title, author);
  this.title = title;
  this.author = author;
  this.lengMin = lengMin;
}

AudioBook.prototype = Object.create(Book.prototype);
AudioBook.prototype.constructor = AudioBook;

AudioBook.prototype.log = function() {
  console.log(`${this.title} - ${this.lengMin}`);
}

// Inheritence in ES 6

class Book2 {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }

  buy() {
    console.log('Buy');
  }
}

class AudioBook2 extends Book2 {
  constructor(title, author, lengMin) {
    super(title, author);
    this.lengMin = lengMin;
  }

  log() {
    console.log(`${this.title} - ${this.lengMin}`);
  }
}


// TASK

class Enemy {
  health;

  constructor(health) {
    this.health = health;
  }

  receiveDamage(damage) {
    this.health = this.health - damage;
    console.log(this.health);
  }
}

class Sword {
  #damage;

  constructor(damage) {
    this.#damage = damage;
  }

  strike(enemy) {
    enemy.receiveDamage(this.#damage);
    console.log(this.#health);
  }
}

class Orc extends Enemy {
  constructor(health) {
    super(health);
  }

  receiveDamage(damage) {
    if (Math.random() > 0.5) {
      this.health = this.health - damage;
    }
    console.log(this.health);
  }
}

// Builder pattern for classes

class Wallet {
  balance = 0;

  add(sum) {
    this.balance += sum;
    return this;
  }

  remove(sum) {
    this.balance -= sum;
    return this;
  }
}

const wallet = new Wallet();
res = wallet
  .add(100)
  .remove(10)
  .add(10)
console.log(res);

class Builder {
  house = {};

  addRoof() {
    this.house.roof = 'Roof';
    return this;
  }

  addFloor() {
    this.house.floor = 'Floor';
    return this;
  }

  execute() {
    return this.house;
  }
}