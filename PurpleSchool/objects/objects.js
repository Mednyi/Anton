const userArray = ['Vasya', 'Pupkin', 24];
const user = {
  name: 'Vasya',
  surname: 'Pupkin',
  age: 24,
  skill: [
    'Programming',
    'Cooking'
  ],
  1: 1
};

user.name
user.skill
user['skill']
user['surname']


// TASK Sort the users

const users = [
  {name: 'Vasya', age: 15},
  {name: 'Petya', age: 18},
  {name: 'Katya', age: 40},
  {name: 'Anya', age: 25}
];

const sortedUsers = users.sort((a, b) => a.age - b.age);

// TASK
// Return new object { fullName: 'Vasya Pupkin', skillNum: 2}

const users2 = [
  {
    name: 'Вася',
    surname: 'Пупкин',
    age: 30,
    skills: ['Разработка', 'Dev0ps']
  },
  {
    name: 'Катя',
    surname: 'Белова',
    age: 18,
    skills: ['Дизайн']
  },
]

const newUsers = users.map(user => {
  return {
    fullName: `${user.name} ${user.surname}`,
    skillNum: user.skills.length
  }
});


// Methods of object

const men = {
  name: 'Vasya',
  surname: 'Pupkin',
  age: 24,
  getFullName: function() {
    return this.name + ' ' + this.surname;
  }
}

console.log(men.getFullName());


// TASK

/* Реализовать методы увеличения и уменьшения баланса,
при котором каждая операция сохраняется в массив
operations в виде { reason: 'Оплата налогов', sum: -100 }.
Возвращается true, если успешно и false, если не зватает баланса.
Также реализовать метод вывода числа операций по кошельку
*/

const wallet = {
  balance: 0,
  operations: [],
  increase: function(sum, reason) {
    this.balance += sum;
    this.operations.push({
      reason,
      sum
    })
    return true
  },
  decrease: function(sum, reason) {
    if (this.balance < sum) {
      console.log('There is not enougth balance');
      return false;
    }
    this.balance -= sum;
    this.operations.push({
      reason,
      sum: -sum
    })
    return true;
  },
  getOperationLength: function() {
    this.operations.length;
  }
};

console.log(wallet.increase(1000, 'Salary'));
console.log(wallet.getOperationLength());
console.log(wallet.decrease(2000, 'Buying notebook'));
console.log(wallet.getOperationLength());
console.log(wallet.decrease(500, 'Buying sellphone'));
console.log(wallet.getOperationLength());
console.log(wallet.balance);
console.log(wallet.operations);


// Object iteration

const cities = {
  msk: {
    let: 200,
    temp: 25
  },
  spb: {
    lt: 100,
    temp: 20
  }
}

let sumTemp = 0;
let citiesCount = Object.keys(cities).length;

for (const key in cities) {
  sumTemp += cities[key].temp;
}

for (const key of Object.keys(cities)) {
  sumTemp += cities[key].temp;
}

console.log(sumTemp / citiesCount);

// Destructuring in object and rest operator

let men2 = {
  name: 'Vasya',
  surname: 'Pupkin',
  age: 24,
}

const { name, surname, age } = men2;

const { age2, ...userWithoutAge } = men2;

const { age3} = men2;

const additionalData = {
  skills: ['Developing', 'Design'],
  creaditCard: '1234-5667-4567-5678'
}

men2.skills = additionalData.skills;
men2.creaditCard = additionalData.creaditCard;

men2 = {
  ...user,
  ...additionalData
}


// Optional chaining

const cities2 = {
  msk: {
    temp: {
      celcius: 25
    }
  },
  spb: {

  }
}

const city = 'msk';
if (cities[cite] != undefined && cities[city].temp != undefined) {
  console.log(cities[city].temp.celcius);
}

console.log(cities[city]?.temp?.celcius);


// TASK

/*
Сделать объект склад с методами добавления на склад, поиска по складу товара и расчета веса
*/

const warehouse = {
  goods: [],
  findGoodById: function(id) {
    return this.goods.find(g => g.id == id);
  },
  addGood: function(good) {
    const existedGood = findGoodById(good.id);
    if (existedGood) {
      return;
    }
    this.goods.push(good);
  },
  getWeightKg: function() {
    return this.goods.reduce((acc, el) => acc += el.weight?.kg ? el.weight.kg : 0, 0);
  },
};

const car = {
  id: 1,
  weight: {
    kg: 1000
  },
  brand: 'Ford'
};

const chair = {
  id: 2,
  weight: {
    kg: 2
  }
};

const paper = {
  id: 3,
  color: 'red'
};

warehouse.addGood(car);
warehouse.addGood(chair);
warehouse.addGood(paper);
console.log(warehouse.goods);

let findedItem = warehouse.findGoodById(6);
findedItem = warehouse.findGoodById(1);

const w = warehouse.getWeightKg()
console.log(w);

// How to create a copy of an object

const someUser = {
  name: 'Anton',
  id: 1
};

const newUser = Object.assign({}, someUser);

const anotherUser = {
  ...user
};


