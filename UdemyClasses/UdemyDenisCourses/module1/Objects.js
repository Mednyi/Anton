// Object exzample

const person = {
  name: ['Bob', 'Smith'],
  age: 32,
  gender: 'male',
  interests: ['music', 'skiing'],
  bio() {
    alert(this.name[0] + ' ' + this.name[1] + ' is ' + this.age + 'years old. He likes ' + this.interests[0] + ' and ' + this.interests[1] + '.');
  },
  greeting() {
    alert('Hi! I\'m ' + this.name[0] + '.');
  }
}

person.name;
person.name[0];
person.age;
person.interests[1];
person.bio();
person.greeting();

// Tasks from Learn JS
// 1
const user = {};
user.name = 'Jonn';
user.surname = 'Smith';
user.name = 'Pete';
delete user.name;

// 2
// Check an object whether it empty or not

let schedule = {};

const isEmpty = (obj) => {
  for (let key in obj) {
    return false;
  }
  return true;
}

// 3
// Можно ли изменить объект, объявленный с помощью const? Как вы думаете?

const user = {
  name: "John"
};

// это будет работать?
user.name = "Pete";

// 4
// Сумма свойств объекта

let salaries = {
  John: 100,
  Ann: 200,
  Pete: 130
}

let sum = 0;
for (let key in salaries) {
  sum += salaries[key];
}

// 5 Умножаем все числовые свойства на 2

let menu = {
  width: 200,
  height: 300,
  title: 'My name'
}

const multiplyNumeric = (obj) => {
  for (let key in obj) {
    if (typeof obj[key] === 'number') {
      obj[key] *= 2;
    }
  }
}