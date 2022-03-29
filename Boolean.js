// Напишите функцию isPensioner(), которая принимает один параметр — возраст
// человека, и проверяет, является ли он пенсионным. Пенсионером считается человек,
//  достигший возраста 60 лет и больше.

const isPensioner = age => age >= 60;

const isPensioner2 = (age) => {
  if (age >= 60) {
    return true;
  }

  return false;
}


// Напишите функцию isMister(), которая принимает строку и проверяет,
// является ли она словом 'Mister'.

const isMister = (text) => {
  if (text === 'Mister') {
    return true;
  }

  return false;
}

const isMister1 = (greeting) => greeting === 'Mister';


// Напишем функцию проверки чётности:
const isEven = number => number % 2 === 0;


// Другой пример: напишем функцию, которая принимает строку
//  и проверяет, заглавная ли первая буква.

const isFirstLetterInUpperCase = (string) => {
  const firstLetter = string[0];
  return firstLetter.toUpperCase() === firstLetter;
}



// Реализуйте метод, который проверяет формат указанного телефона.
// Если телефон начинается с +, значит это международный формат.

const isInternationalPhone = (phone) => phone[0] === '+';


// Вот функция, которая принимает пароль и говорит, соответствует
// ли он условиям, или не соответствует:

const isStrongPassword = (password) => {
  const length = password.length;
  return length > 8 && length < 20;
};



// Ниже пример расширенной функции определения корректности пароля:

const hasSpecialChars = (str) => {} /* проверяет содержание специальных символов в строке */;

const isStrongPassword2 = (password) => {
  const length = password.length;
  // Скобки задают приоритет. Понятно что к чему относится.
  return (length > 8 && length < 20) || hasSpecialChars(password);
};


// Реализуйте метод isLeapYear(), который определяет является ли год
// високосным или нет. Год будет високосным, если он кратен
// (то есть делится без остатка) 400 или он одновременно кратен 4 и не
//  кратен 100. Как видите, в определении уже заложена вся необходимая
//  логика, осталось только переложить её на код:

const isLeapYear = (number) => {
  if (number % 400 === 0 || (number % 4 === 0 && number % 100 !== 0)) {
    return true;
  }

  return false;
}

const isLeapYear2 = (year) => {
  const result = year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0);
  return result;
};