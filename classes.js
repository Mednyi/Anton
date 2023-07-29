'use strict';
import usersMock from './MOCK_DATA.js';

class User {
  constructor(id, name, email, password, birthDate = new Date()) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.password = password;
    this.birthDate = birthDate;
  }
  changePassword(newPassword) {
    this.password = newPassword;
  }
}

const createUsers = () => {
  const users = [];
  for (var i = 0; i < usersMock.length; i++) {
    users.push(new User(...Object.values(usersMock[i])));
  }
  return users;
};


// Bind contex to class method

class Transport {
  constructor(type, price, vendor, model) {
    this.type = type;
    this.price = price;
    this.vendor = vendor;
    this.model = model;
  }

  getInfo() {
    return `${this.vendor}, ${this.model}`;
  }

  getPrice() {
    return this.price.toLocaleString('ru-RU') + ' ₽';
  }
}

class Car extends Transport {
  constructor(vendor, model, doorsCount, price) {
    super('car', price, vendor, model);
    this.doorsCount = doorsCount;
  }

  getInfo = this.getInfo.bind(this);
  getPrice = this.getPrice.bind(this);
  getDoorsCount = this.getDoorsCount.bind(this);

  getDoorsCount() {
    return `Кол-во дверей: ${this.doorsCount}`;
  }
}

class Bike extends Transport {
  constructor(vendor, model, maxSpeed, price) {
    super('bike', price, vendor, model);
    this.maxSpeed = maxSpeed;
  }

  getInfo = this.getInfo.bind(this);
  getPrice = this.getPrice.bind(this);
  getMaxSpeed = this.getMaxSpeed.bind(this);

  getMaxSpeed() {
    return `Макс. скорость: ${this.maxSpeed} км/ч`;
  }
}

const car1 = new Car('KIA', 'Rio', 5, 1200000);
const { getDoorsCount } = car1;
console.log(car1.getDoorsCount());
console.log(car1.vendor);

const simpleUser = {
  name: 'Bart Simpson',
  age: 23,
  title: 'student'
};

const simpleUserCopy1 = {...simpleUser, descr: 'Some descr'};
const simpleUserCopy2 = Object.assign({}, simpleUser);
const simpleUserCopy3 = Object.create(simpleUser);

console.log(simpleUser, simpleUserCopy1, simpleUserCopy2, simpleUserCopy3);