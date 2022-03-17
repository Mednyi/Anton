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


// 6 Фильтрация по диапазону

// Напишите функцию filterRange(arr, a, b), которая принимает
// массив arr, ищет в нём элементы между a и b и отдаёт массив этих элементов.

// Функция должна возвращать новый массив и не изменять исходный.

// Например:



// let filtered = filterRange(arr, 1, 4);

// alert( filtered ); // 3,1 (совпадающие значения)

// alert( arr ); // 5,3,8,1 (без изменений)
let arr = [5, 3, 8, 1];

function filterRange(arr, a, b) {
    const newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= a && arr[i] <= b) {
            newArr.push(arr[i])
        }
    }
    return newArr;
}

filterRange(arr, 1, 4);

// 7 Фильтрация по диапазону "на месте"

// Напишите функцию filterRangeInPlace(arr, a, b),
// которая принимает массив arr и удаляет из него все значения кроме тех,
// которые находятся между a и b. То есть, проверка имеет вид a ≤ arr[i] ≤ b.

// Функция должна изменять принимаемый массив и ничего не возвращать.

// Например:

// filterRangeInPlace(arr, 1, 4); // удалены числа вне диапазона 1..4

// alert( arr ); // [3, 1]
let arr = [5, 3, 8, 1];

function filterRangeInPlace(arr, a, b) {
    for (i = 0; i < arr.length; i++) {
        if (arr[i] < a || arr[i] > b) {
            arr.splice(i, 1);
        }
    }
}