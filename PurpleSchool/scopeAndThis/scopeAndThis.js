'use strict'

let myCoolVarable = 1;

if (true) {
  myCoolVarable = 3;
}

console.log(myCoolVarable);

// Scope chain

const successMessage = 'Success';

const user = {
  name: 'Vasya',
  roles: []
};

function addRole(user, role) {
  if (role == 'admin') {
    const message = 'Mistake';
    console.log(message);
    return user;
  }
  user.roles.push(role);
  console.log(successMessage);

  function logRoles() {
    console.log(user.roles);
  }
  logRoles();

  return user;
}

console.log(addRole(user, 'dev'));

// Example of "this" usage

console.log(this); /* this - Global object window */

function addNum(num1, num2) {
  console.log(this);
  return num1 + num2;
}

addNum();  /* this - in stric mode equal to undefined */


const addNum2 = (num1, num2) => {
  console.log(this);
  return num1 + num2;
}

addNum2();  /* this - in stric mode equal to Global objec window */

const user2 = {
  name: 'Vasya',
  surname: 'Pupkin',
  getFullName: function() {
    console.log(this);
    return this.name + ' ' + this.surname;
  }
};

user2.getFullName() /* this - in stric mode equal to object user2*/

const user3 = {
  name: 'Marina',
  surname: 'Katz'
};

user3.getFullName = user2.getFullName;
user3.getFullName(); /* this - in stric mode equal to object user3*/

// This in methods

const user4 = {
  firstName: 'Vasya',
  lastName: 'Pupkin',
  age: 20,
  getUserInfo: function() {
    console.log(this);
    console.log(`${this.firstName} ${this.lastName}`);

    function canDrink() { /* We need to make it an arrow function to solve this problem */
      if (this.age > 18) { /* this - in stric mode equal undefined*/
        console.log('Can drink yet!')
      } else {
        console.log('Can not drink!');
      }
    }
    canDrink();
  },
  getUserInfoArrow: () => {
    console.log(this);
    console.log(`${this.firstName} ${this.lastName}`); /* this - in stric mode equal undefined*/
  }
};

user4.getUserInfo();


// Arguments
// let, var, const, func, arguments
// Scope chain
// this

function sumNum(num1, num2) {
  console.log(this);
  console.log(arguments);
  return num1 + num2;
}


// TASK
 /*
Дополнить объект методом для получения имени:
- компании
- сео
- сотрудника
*/

const company = {
  name: "ООО Агро",
  employees: [
    {
      name: "Света",
      getName: function() {
        return this.name;
      }
    },
  ],
  ceo: {
    name: "Вася",
    getName: function() {
      return this.name;
    }
  },
  getName: function() {
    return this.name;
  }
};

company.getName();
company.ceo.getName();
company.employees.map(employee => employee.getName());
