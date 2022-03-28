// Перевернуть строку циклов

const reverse = (str) => {
    let result = '';
    for (let i = str.length - 1; i >= 0; i--) {
      result = result += str[i];
    }

    return result;
}

// Перевернуть строку Методами

const reverseStr = (str) => {
    return str.split("").reverse().join("");
}

// Задачи из LearnJs на строки

// 1) Сделать первый символ заглавным

// Напишите функцию ucFirst(str), возвращающую строку str с заглавным первым символом. Например: ucFirst("вася") == "Вася";

// function ucFirst(str) {
//     return str.split('').map((c, arr) => arr[c[0]].toUpperCase()).join('');
// }

// function ucFirst1(str) {
//     for (let char of str) {
//         str[char[0]].toUpperCase();
//     }
//     return str;
// }

function ucFirst(str) {
  if (!str) return str;

  return str[0].toUpperCase() + str.slice(1);
}

// Сделать первую букву большой
const getFirstLetterToUppercase = (str) => {
  let result = '';
  for (let i = 0; i < str.length; i += 1) {
    const shouldBeBig = (i === 0 || str[i - 1] === ' ');
    result += shouldBeBig ? toUpperCase(str[i]) : str[i];
  }

  return result;
}

// 2) Проверка на спам

// Напишите функцию checkSpam(str), возвращающую true, если str содержит 'viagra' или 'XXX', а иначе false.

// Функция должна быть нечувствительна к регистру:

// checkSpam('buy ViAgRA now') == true
// checkSpam('free xxxxx') == true
// checkSpam("innocent rabbit") == false

// function checkSpam(str) {
//     if (str.includes("viagra") || str.includes("XXX")) {
//         return true;
//     }
//     return false;
// }

function checkSpam(str) {
    let lowerStr = str.toLowerCase();

    return lowerStr.includes("viagra") || lowerStr.includes("xxx");
}

// 3) Усечение строки (Truncating  the string)

// Создайте функцию truncate(str, maxlength), которая проверяет длину строки str и, если она превосходит maxlength, заменяет конец str на "…",
//  так, чтобы её длина стала равна maxlength.

// Результатом функции должна быть та же строка, если усечение не требуется, либо, если необходимо, усечённая строка.

// Например:

// truncate("Вот, что мне хотелось бы сказать на эту тему:", 20) = "Вот, что мне хотело…"

// truncate("Всем привет!", 20) = "Всем привет!"

function truncate(str, maxlength) {
    if (str.length > maxlength) {
        str.slice(0, maxlength - 1) + "...";
    }
    return str;
}

function truncate(str, maxlength) {
  return (str.length > maxlength) ?
    str.slice(0, maxlength - 1) + '…' : str;
}

// 4 Выделить число

// Есть стоимость в виде строки "$120". То есть сначала идёт знак валюты, а затем – число.

// Создайте функцию extractCurrencyValue(str), которая будет из такой строки выделять числовое значение и возвращать его.

// Например:

// alert( extractCurrencyValue('$120') === 120 ); // true

function extractCurrencyValue(str) {
  return +str.slice(1);
}


// Ищет в строке большие буквы

const bigLettersCount = (str) => {
  // BEGIN (write your solution here)
  return [...str].filter((char) => char.toUpperCase() === char).length;
  // END
};


const compare = (first, second) => {
  const firstCount = bigLettersCount(first);
  const secondCount = bigLettersCount(second);

  // BEGIN (write your solution here)
  if (firstCount > secondCount) {
    return 1;
  } else if (firstCount < secondCount) {
    return -1;
  } else {
    return 0;
  }
  // END
};

export const greaterThan = (first, second) => (
  compare(first, second) === 1);

export const lessThan = (first, second) => (
  compare(first, second) === -1);

export const isEqual = (first, second) => (
  compare(first, second) === 0);



// Реализуйте функцию getHiddenCard(), который принимает на вход номер
//  кредитки (состоящий из 16 цифр) в виде строки и возвращает его скрытую
//  версию, которая может использоваться на сайте для отображения. Если
//   исходная карта имела номер 2034399002125581, то скрытая версия выглядит
//    так ****5581. Другими словами, функция заменяет первые 12 символов,
//    на звездочки. Количество звездочек регулируется вторым необязательным
//    параметром. Значение по умолчанию — 4.

const getHiddenCard = (cardNumber, starsCount = 4) => {
  const visibleDigitsLine = cardNumber.slice(12);
  return '*'.repeat(starsCount) + visibleDigitsLine;
};


// Реализуйте функцию capitalize(), которая принимает непустую строку и приводит первую букву первого слова к верхнему регистру:

const capitalize = (text) => `${text[0].toUpperCase()}${text.slice(1)}`;