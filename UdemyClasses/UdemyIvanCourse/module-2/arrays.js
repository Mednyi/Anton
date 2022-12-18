const arr = [2, 3, 54, 5, 6, 7];

arr.forEach((item, i, arr) => {
  console.log(`${i}: ${item} inside array ${arr}`);
});

const family = ['Peter', 'Ann', 'Alex', 'Linda'];

const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

// 1) Напишите функцию showFamily, которая будет принимать в себя массив строк и возвращать сообщение в нужном формате.

// showFamily(family)  => ''

function showFamily(arr) {
  if (arr.length === 0) {
    return `Семья пуста`;
  } else {
    return `Семья состоит из: ${arr.join(' ')}`;
  }
}

function showFamily(arr) {
  let str = '';

  // arr.length === 0 ? str = 'Семья пуста' : str = 'Семья состоит из: ';

  arr.forEach(member => {
    str += `${member} `;
  });

  return str;
}


// 2) напишите функцию standardizeStrings, которая будет принимать в себя массив строк и будет выводить в консоль эти строки в нижнем регистре.

// Пример:

// standardizeStrings(favoriteCities)  выведет в консоль

// lisbon
// rome
// milan
// dublin
// Это частая задача в реальности, так как от пользователя нам могут прийти ответы в самых разных форматах. В том числе и с разными буквами :) Поэтому нам нужно привести строки в один формат для правильной работы.

function standardizeStrings(arr) {
  return console.log(arr.join(', ').toLowerCase());
}

function standardizeStrings(arr) {
  arr.forEach(city => {
    console.log(city.toLowerCase());
  });
}

// 3) Задача с собеседований. Напишите функцию reverse, которая принимает в себя строку и возвращает эту строку в обратном порядке.

// Пример:

// const someString = 'This is some strange string';
// reverse(someString) => 'gnirts egnarts emos si sihT'

// Функцию можно применить к любой строке. Если в функцию приходит не строка - вернуть сообщение "Ошибка!"

function reverse(str) {
  if (typeof(str) !== 'string') {
    return "Ошибка!";
  }

  return str.split('').revers().join('');
}

function reverse2(str) {
  let newString = '';

  for (let i = str.length - 1; i >= 0; i--) {
    newString += str[i];
  }

  return newString;
}

// 4) Представьте такую реальную ситуацию. У вас есть банкомат, который выдает деньги из двух разных банков в разных валютах. Один банк основной с базовыми валютами, второй дополнительный с прочими валютами:

const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];
// Вам нужно создать главную функцию банкомата availableCurr, которая принимает два аргумента: первый - это массив со всеми доступными валютами из двух банков сразу (сейчас представим, что они не могут повторяться), второй - необязательный аргумент, который указывает ту валюту, которая сейчас закончилась в банкомате. Если массив в первом аргументе пустой - то функция возвращает строку 'Нет доступных валют'. Функция возвращает строку в нужном виде.

// Пример:

// availableCurr(['UAH', 'RUB', 'CNY'], 'CNY')
// Вернет строку:

// Доступные валюты:
// UAH
// RUB
// Заметьте:

// - CNY (юань) исчез из списка валют, значит такая валюта закончилась

// - После валюты: стоит перенос строки \n, и после каждой валюты тоже. Это важно для тестов

// - Данные для первого аргумента должны приходить сразу из двух банков, причем сначала baseCurrencies, потом additionalCurrencies по порядку

function availableCurr(arr, missingCurr) {
  let i = 0;
  let allCurruncies = baseCurrencies.concat(additionalCurrencies);
  allCurruncies = arr;

  while (i < arr.length) {
    if (arr.length === 0 && !missingCurr) {
      return 'Нет доступных валют';
    } else {
      return ` Доступные валюты: ${arr[i]} \n ${arr[i]} \n`;
    }
  }
}

function availableCurr(arr, missingCurr) {
  let str = '';
  // arr.length === 0 ? str = 'Нет доступных валют' : str = 'Доступные валюты:\n';

  arr.forEach(function(curr, i) {
    if (curr !== missingCurr) {
      str += `${curr}\n`;
    }
  });

  return str;
}