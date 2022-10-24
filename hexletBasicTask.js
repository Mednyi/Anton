const reverse = (str) => {
  return str.split('').reverse().join('');
};

// Реализуйте функцию getNumberExplanation(), которая принимает на вход число и возвращает объяснение этого числа. Если для числа нет объяснения, то возвращается null:

const getNumberExplanation = (num) => {
  if (num === 666) {
    return 'devil number';
  } else if (num === 42) {
    return 'answer for everything';
  } else if (num === 7) {
    return 'prime number';
  } else {
    return null;
  }
};

console.log(getNumberExplanation(8));

//  with switch operator

const getNumberExplanation2 = (number) => {
  switch (number) {
    case 666:
      return 'devil number';
    case 42:
      return 'answer for everything';
    case 7:
      return 'prime number';
  }
};

const normalizeUrl = (url) => {
  if (!url.startsWith('https://')) {
    return `https://${url}`;
  } else {
    return url;
  }
};

normalizeUrl('yandex.ru');

// BEGIN (write your solution here)
const convertText1 = (str) => {
  const firstCharUpperCase = str.charAt(0).toUpperCase();
  if (str === '') {
    return '';
  } else if (firstCharUpperCase !== str[0]) {
    return reverse(str);
  } else {
    return str;
  }
};

// with ternary operator
const convertText2 = (str) => {
  const firstCharUpperCase = str.charAt(0).toUpperCase();

  return firstCharUpperCase !== str[0] ? reverse(str) : str;
};

console.log(convertText2);
// END
convertText1();
console.log(convertText1());

// Модифицируйте функцию printNumbers() так, чтобы она выводила числа в обратном порядке. Для этого нужно идти от верхней границы к нижней. То есть счётчик должен быть инициализирован максимальным значением, а в теле цикла его нужно уменьшать до нижней границы.


const printNumbers = (/** @type {number} */ initialNumber) => {
  // BEGIN (write your solution here)
  let i = initialNumber;

  while (i >= 1) {
    console.log(i);
    i -= 1;
  }
  console.log('finished!');
};

printNumbers(6);


// Реализуйте функцию joinNumbersFromRange(), которая объединяет все числа из диапазона в строку и возвращает её:
// joinNumbersFromRange(1, 1); // '1'
// joinNumbersFromRange(2, 3); // '23'
// joinNumbersFromRange(5, 10); // '5678910'

const joinNumbersFromRange = (start, finish) => {
  let i = start;
  let result = '';

  while (i <= finish) {
    result = result + i;
    i += 1;
  }
  return result;
};

joinNumbersFromRange(2, 4);


// Реализуйте функцию mySubstr(), которая извлекает из строки подстроку указанной длины. Она принимает на вход два аргумента (строку и длину) и возвращает подстроку, начиная с первого символа:

// const text = 'If I look back I am lost';
// console.log(mySubstr(text, 1));  # => 'I'
// console.log(mySubstr(text, 7));  # => 'If I lo'

const mySubstr = (text, length) => {
  let i = 0;
  let result = '';

  while (i < text.length) {
    result = text.slice(0, length);
    i += 1;
  }
  return result;
};

const mySubstr2 = (string, length) => {
  let resultString = '';
  let i = 0;
  while (i < length) {
    resultString += string[i];
    i += 1;
  }

  return resultString;
};


// Функция countChars() из теории считает, сколько раз входит буква в предложение и при этом учитывает регистр букв. То есть A и a с её точки зрения разные символы. Реализуйте вариант этой же функции, так чтобы регистр букв был не важен:

// countChars('HexlEt', 'e'); // 2
// countChars('HexlEt', 'E'); // 2

const countChars = (string, char) => {
  let i = 0;
  let stringToLowerCase = string.toLowerCase();
  let charToLowerCase = char.toLowerCase();
  let count = 0;

  while (i < stringToLowerCase.length) {
    if (stringToLowerCase[i] === charToLowerCase) {
      count = count + 1;
    }

    i += 1;
  }

  return count;
};

const countChars2 = (str, char) => {
  let i = 0;
  let count = 0;
  while (i < str.length) {
    if (str[i].toLowerCase() === char.toLowerCase()) {
      count = count + 1;
    }
    i = i + 1;
  }

  return count;
};


// Напишите функцию makeItFunny(), которая принимает на вход строку и возвращает её копию, у которой каждый n-ный элемент переведен в верхний регистр. n – задается на входе в функцию.

// Для определения каждого n-ного элемента понадобится остаток от деления %. Подумайте, как его можно использовать.

const makeItFunny = (str, n) => {
  let i = 0;
  let result = '';
  while (i < str.length) {
    const current = str[i];
    if ((i + 1) % n === 0) {
      result = `${result}${current.toUpperCase()}`;
    } else {
      result = `${result}${current}`;
    }
    i++;
  }

  return result;
};


let number = 10;

console.log(number);

var name = 'Ivan';

console.log(name);



// Сэмвелл обнаружил, что его сообщения перехватываются в замке «Близнецы» и там читаются. Из-за этого их атаки перестали быть внезапными. Немного подумав, он разработал программу, которая бы шифровала сообщения по следующему алгоритму. Она бы брала текст и переставляла в нем каждые два подряд идущих символа.

// encrypt('move');   // 'omev'
// encrypt('attack'); // 'taatkc'
// encrypt('car!'); // 'ac!r'

// // Если число символов нечётное,
// // то последний символ остаётся на своём месте
// encrypt('go!'); // 'og!'

const encrypt = (text) => {
  let result = '';

  for (let i = 0; i < text.length; i++) {
    if (text.length % 2 === 0) {
      result = `${result}${text[i + 1]}${text[i]}`;
    } else {
      result = `${result}${text[i + 1]}${text[i]}${text[text.length - 1]}`;
    }
  }

  return result;
};

const encrypt2 = (str) => {
  let result = '';
  for (let i = 0; i < str.length; i += 2) {
    const nextSymbol = str[i + 1] || '';
    result = `${result}${nextSymbol}${str[i]}`;
  }

  return result;
};

encrypt2('hello');
