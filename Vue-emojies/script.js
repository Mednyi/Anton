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



// Реализуйте функцию hasChar(), которая проверяет (с учётом регистра), содержит ли строка указанную букву. Функция принимает два параметра:

// Строка
// Буква для поиска

const hasChar = (str, char) => {
  let i = 0;
  while (i < str.length) {
    if (str[i] === char) {
      return true;
    }

    i += 1;
  }

  return false;
};

const hasChar2 = (str, char) => {
  if (str.includes(char)) {
    return true;
  }
  return false;
}




// Рассмотрим простой алгоритм проверки простоты числа. Будем делить искомое число x на все числа из диапазона от двух до x - 1 и смотреть остаток от деления. Если в этом диапазоне не найден делитель, который делит число x без остатка, значит перед нами простое число.

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }

  let divider = 2;

  while (divider <= number / 2) {
    if (number % divider === 0) {
      return false;
    }

    divider += 1;
  }

  return true;
}

isPrime(1); // false
isPrime(2); // true
isPrime(3); // true
isPrime(4); // false

const getSomeNameTo = (name, str) => {
  if (name === str[name]) {
    return name;
  }

  return name.length;
}



//  Немного подумав, он разработал программу, которая бы шифровала сообщения по следующему алгоритму. Она бы брала текст и переставляла в нем каждые два подряд идущих символа.

// encrypt('move'); // 'omev'
// encrypt('attack'); // 'taatkc'
// // Если число символов нечётное
// // то последний символ остается на своем месте
// encrypt('go!'); // 'og!'
// Реализуйте функцию encrypt(), которая принимает на вход исходное сообщение и возвращает зашифрованное.

// Подумайте. Может ли эта функция расшифровать зашифрованное сообщение?

function encrypt(str) {
  let result = '';

  for (let i = 0; i < str.length; i += 2) {
    const nextSymbol = str[i + 1] || '';
    result = `${result}${nextSymbol}${str[i]}`;
  }

  return result;
}