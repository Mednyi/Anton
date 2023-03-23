const money = 100;

if (money > 50) {
  console.log('Can buy our product');
} else if (money > 5) {
  console.log('A mini product are bought');
} else {
  console.log('Do not have enough money');
}

// TASK
// Васи положил 12 000$ на вклад 7% годовых с капитализацией 1 раз в месяц. Вывести в консоль, сможет ли он купить дом за 13 500$ через 2 года после снятия вклада. И остаток после покупки.
// Итог = Сумма * (1 + Ставка в месяц не в %) ^ срок в месяцах

const deposit = 12000;
const rate = 0.07;
const depositLength = 24;
const result = deposit * (1 + rate / 12) ** 24;
const houseCost = 13500;

if (result > 13500) {
  console.log(`We have: ${result}. Can buy a house. Remainder ${result - houseCost}`);
} else {
  console.log('Need more money');
}


// Operators of equality

const secretNumber = 7;

if (secretNumber === 7) {
  console.log('Угодал строго')
}

if (secretNumber == 7) {
  console.log('Угодал не строго')
}

// Switch statement
const role = 'manager';

if (role === 'manager') {
  console.log('Manager');
} else if (role === 'admin') {
  console.log('Admin');
} else if (role === 'ceo') {
  console.log('CEO');
} else {
  console.log('We do not know you fucking wanker');
}


switch (role) {
  case 'manager': /* role === 'manager' */
    console.log('Manager');
    break;
  case 'admin':
    console.log('Admin');
    break;
  case 'ceo':
    console.log('CEO');
    break;
  default:
    console.log('We do not know you fucking wanker');
}

const num = 1;

switch (true) {
  case num > 0:
    console.log('Положительный');
    break;
  case num < 0:
    console.log('Отрицфтельный');
    break;
  default:
    console.log('Ноль!');
}