'use strict'

// Call, apply

const audi = {
  make: 'Audi',
  model: 'A3',
  year: 2021,
  damages: [],
  addDamage(part, rate) {
    console.log(`At auto ${this.make} ${this.model} ${this.year} added:
      - damaged ${part} with ${rate}
    `);
    this.damages.push({
      part,
      rate
    })
  }
};

audi.addDamage('Capote', 1)

const bmw = {
  make: 'BMW',
  model: 'X3',
  year: 2022,
  damages: [],
};

bmw.addDamage = audi.addDamage;
bmw.addDamage('Bumper', 2);

const addDamageFunc = audi.addDamage;
addDamageFunc('Bumper', 3); /* This function won't work, we need to do call or apply methods */
addDamageFunc.call(bmw, 'Bumper', 3);

addDamageFunc.apply(bmw, ['Bumper', 3]);

// Bind

// TASK
/*
  Создайте объект пользователя с паролем.
  С помощью функции ниже удалить пароль сделав
  функцию сброса пароля
*/

function removePassword(reset) {
  if (reset) {
    this.password = undefined;
  } else {
    this.password = '1';
  }
}

const someUser = {
  login: 'a@a.ru',
  password: '13245'
};

const resetUserPassword = removePassword.bind(someUser, true);
resetUserPassword();
console.log(someUser);

// Closure
function changeBalance() {
  let balance = 0;

  return function(sum) {
    balance += sum;
    console.log(`Balance: ${balance}`);
  }
}

const change = changeBalance();
change(100);
change(-50);
change(200);


// TASK
/* Сделать функию пользователя которая берет за основу userInfo и за счет замыкания создает новый объект, с которым можно работать как user1().increase(100)
*/

const userInfo = {
  balance: 0,
  operations: 0,
  increase(sum) {
    this.balance += sum; this.operations++;
  },
};

function user() {
  const userObj = {
    balance: 0,
    operations: 0,
    increase(sum) {
      this.balance += sum; this.operations++;
    },
  };
  return function() {
    return userObj;
  }
};

const user1 = user();
user1().increase(100);
user1().increase(100);
console.log(user1());

const user2 = user();
user2().increase(100);
user2().increase(100);
console.log(user2());