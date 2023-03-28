const userName = 'Vasya Pupkin';
userName[0];
userName.charAt(2);

console.log(userName.length);
console.log(userName.indexOf('P'));
console.log(userName.lastIndexOf('a'));
console.log(userName.includes('upk')); /* return true */
console.log(userName.slice(5)); /* return true */
console.log(userName.slice(5, 8)); /* return true */


// TASK
/*
 выводить имя и фамилию в отдельные переменные
*/

const userName2 = 'Вася aka Teminator Пупкин';

const nameVasya = userName2.slice(0, userName2.indexOf(' '));
const surnameVasya = userName2.slice(-1, -6);
const surnameVasya2 = userName2.slice(userName2.lastIndexOf(' ') + 1, userName2.length);

console.log(`My ${nameVasya}, my surname ${surnameVasya2}`);

userName2.includes('а');
userName2.startsWith('В');
userName2.endsWith('ин');

// Преобразование строки

userName.toLowerCase();
userName.toUpperCase();
userName.replace('В', 'F');
userName.replaceAll('а', 'р');
userName.replace(/a/g, 'р');

userName.trimStart();
userName.trimEnd();
userName.trim();


// TASK  Задание: проверить является ли это номером телефона России
/* верные */
const num1 = '89103235356';
const num2 = '+79103235356';
const num3 = '+7(910)3235356';
const num4 = '+7(910) 323-53-56';
const num5 = ' +7(910) 323-53-56 ';
/* не верные */
const num1Error = '89103235';
const num2Error = '+7d910d323-53-56';
const num3Error = '9+7103235356';
const num4Error = '89103g35356';

function isPhoneNumber(string) {
  string = string.trim();
  string = string.replace('+7', '8');

  if (!string.startsWith('8')) {
    return false;
  }

  string = string.replaceAll('(', '');
  string = string.replaceAll(')', '');
  string = string.replaceAll(' ', '');
  string = string.replaceAll('-', '');

  if (string.length != 11) {
    return false;
  }
  let onlyNumber = true;

  for (const char of string) {
    if (isNaN(Number(char))) {
      onlyNumber = false;
      break;
    }
  }

  return onlyNumber;
}


// String to Array and back

const userFullName = 'Vasya Pupkin';
userFullName.split(' '); /* String to an Array */

const [firstName, familyName, lastName] = userFullName.split(' ');
console.log(firstName);
console.log(familyName);
console.log(lastName);

const arrStr = ['You', 'Know', 'JS'];
arrStr.join(' ');  /* 'You Know JS' */


// PadStart and PadEnd

const film = 'Star Wars';

console.log(film.padStart(6, '*'));
console.log(film.padEnd(7, '$'));
console.log(film.repeat(7));

// TASK
/*
замаскировать все, кроме последних 4х символов

************8353
*/

const card = '2342834503458353';

card.slice(-4).padStart(16, '*');