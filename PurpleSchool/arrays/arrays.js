const role1 = 'admin';
const role2 = 'user';
const role3 = 'superuser';

const roles = ['admin', 'user', 'superuser'];
const userInfo = ['Anna', 25];

console.log(roles[0]);
console.log(roles[1]);
console.log(roles[2]);
console.log(roles.length);

console.log(roles[roles.length - 1]);

console.log(roles.at(0));
console.log(roles.at(-1)); /* The last element of the array */

const userNames = new Array('Vasia', 'Petia', 'Katia');
console.log(userNames);

// The running the elements of the array

const users = ['Kate', 'Anna', 'Vika'];

users.push('Nik');

console.log(users);

users.unshift('Vasia');

console.log(users);

users.pop()

console.log(users);

users.shift();

console.log(users);


// The finding the element of the array

const roles2 = ['user', 'admin', 'manager'];

const elIndex = roles2.indexOf('admin');  /* Return the index of the element*/
const elIndex2 = roles2.indexOf('superuser');

if (roles2.indexOf('admin') >= 0) {
  console.log('Access is available');
}




