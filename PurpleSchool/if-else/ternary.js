const bmwX3Price = 100000;
const fordFocusPrice = 10000;
const budget = 20000;
let message;

if (budget > bmwX3Price) {
  message = 'BMW';
} else {
  message = 'Велосипед';
}

console.log(`I want to buy ${budget > bmwX3Price ? 'BMW' : 'Велосипед'}`);

10 > 0 ? console.log('Greater than 0') : console.log('Not greater')

const str = 10 > 0 ? 'Greater than 0' : 'Not greater';

console.log(`I want to buy ${str}`);


// TASK
// Методом prompt получите ответ пользователя на вопрос "Сколько будет 7 + или - 15?". Если ответ верен, выведите в консоли "Успех", если нет - "Вы робот!", а если он введёт "Я не робот", то тоже "Успех".

const question = promt('Сколько будет 7 + или - 15?');

switch (true) {
  case question === 'Я не робот':
  case Number(question) === 22:
  case Number(question) === -8:
    console.log('Успех');
    break;
  default:
    console.log('Вы робот!');
}