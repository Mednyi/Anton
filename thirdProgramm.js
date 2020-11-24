'use strict';

const user = [
  {"name":"Mycah","password":"04-887-6629","salary":5500},
  {"name":"Jannelle","password":"40-900-8201","salary":6000},
  {"name":"Titos","password":"85-454-0170","salary":10000},
  {"name":"Jacquelin","password":"10-858-4114","salary":5600},
  {"name":"Jasper","password":"88-115-7660","salary":8900},
  {"name":"Rodrigo","password":"59-621-5493","salary":5400}
];

let search = 'J';

for (let i = 0; i < user.length; i++) {
  if (user[i].name[0] === search) {
    console.log(user[i]);
  }
}

let maxSalary = 0;
let userIndex = 0;

for (let i = 0; i < user.length; i++) {
  if (user[i].salary > maxSalary) {
    maxSalary = user[i].salary;
    userIndex = i;
  }
}
