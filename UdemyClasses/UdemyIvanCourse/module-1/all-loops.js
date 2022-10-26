// Классическая задачка по программированию про создание пирамидки из звездочек с помощью цикла

let result1 = "";
const piramidLength = 7;

for (let i = 0; i < piramidLength; i++) {
  for (let j = 1; j < i; j++) {
    result1 += "*";
  }

  result1 += "\n";
}

console.log(result1);

// Использование меток в циклах

first: for (let i = 0; i < 3; i++) {
  console.log(`First level: ${i}`);

  for (let j = 0; j < 3; j++) {
    console.log(`First level: ${j}`);

    for (let k = 0; k < 3; k++) {
      if (k === 2) {
        continue first;
      }
      console.log(`First level: ${k}`);
    }
  }
}

// Задачи:

// Заполните новый массив (result) числами из старого (arr). Количество элементов в массиве можно получить как arr.length, а к элементам обращаемся все так же: arr[0], arr[1] и тд.
// Должен получиться точно такой же массив

// Измените данный массив так, чтобы все числа были увеличены в 2 раза, а если попадается строка строка - то к ней было добавлено " - done".
// Для определения типа данных используйте typeof();
// Должно получиться: [ 10, 20, 'Shopping - done', 40, 'Homework - done' ]

// Разверните массив data наоборот при помощи цикла и запишите данные в массив result.
// Должно получиться: [ 'Homework', 20, 'Shopping', 10, 5 ]

function firstTask() {
  const arr = [3, 5, 8, 16, 20, 23, 50];
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    result[i] = arr[i];
  }

  console.log(result);
  return result;
}

firstTask();

function secondTask() {
  const data = [5, 10, "Shopping", 20, "Homework"];

  for (let i = 0; i < data.length; i++) {
    if (typeof data[i] === "number") {
      data[i] = data[i] * 2;
    } else if (typeof data[i] === "string") {
      data[i] = `${data[i]} - done`;
    }
  }

  console.log(data);
  return data;
}

secondTask();

function thirdTask() {
  const data = [5, 10, "Shopping", 20, "Homework"];
  const result = [];

  for (let i = 1; i <= data.length; i++) {
    result[i - 1] = data[data.length - i];
  }

  console.log(result);
  return result;
}

thirdTask();

// (**) Задача на формирование фигуры
// Это одна из классических задач в программировании на формирование самых разных фигур при помощи кода. Вы спросите, а зачем это вообще нужно? Ответов несколько:

// Существуют реальные задачи, когда вы кодом строите геометрию, символы и другие нужные вещи. Вспомните простые электронные табло на улицах, например

// Это хорошо прокачивает логику и разминает мозг

// Позволяет запомнить нюансы работы языка

// Иногда можно встретить просто нереальные вещи, построенные только при помощи кода. Но мы с вами займемся базовой фигурой. Сейчас вам необходимо написать код, который при помощи звездочек (*) в консоли нарисует вот такую фигуру:

//      *
//     ***
//    *****
//   *******
//  *********
// ***********
// (Подсказка: в конце фигуры есть перенос строки \n, который тоже учитывается в тестах. В КОНЦЕ КАЖДОЙ СТРОКИ НЕТ ПРОБЕЛОВ, ТОЛЬКО ПЕРЕНОС)

const lines = 5;
let result = '';
let spaceBar = '      ';
// Проверяется именно переменная result, формируйте строку в ней
// Мой вариант, неправильный
for (let i = 0; i < lines; i++) {

  for (let k = spaceBar.length; k > spaceBar.length; k--) {
    spaceBar -= ' ';

    for (let j = 0; j < i; j += 2) {
      result += '*';
   }
  }

  result += '\n';
}
// Правильный
for (let i = 0; i <= lines; i++) {
  for (let j = 0; j < lines - i; j++) {
      result += " ";
  }
  for (let j = 0; j < 2 * i + 1; j++) {
      result += "*";
  }
  result += "\n";
}
