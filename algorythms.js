// 1) Algo . Замена значения одной переменной на значение другой , через третью переменную.

let a = 2;
let b = 5;
let temp = a;
a = b;
b = temp;

// 2) Algo . Замена значения одной переменной на значение другой , через две переменных.

let a1 = 2;
let b1 = 5;
let temp1 = b1;
let temp2 = a1;
a1 = temp1;
b1 = temp2;

// Operating with arrays from LearnJs

// 1) Скопирован ли массив?
// Что выведет следующий код?

let fruits = ["Яблоки", "Груша", "Апельсин"];

// добавляем новое значение в "копию"
let shoppingCart = fruits;
shoppingCart.push("Банан");

// что в fruits?
alert( fruits.length ); // 4 (fruits = ["Яблоки", "Груша", "Апельсин", "Банан"])

// 2) Операции с массивами

//  Давайте произведём 5 операций с массивом.

// 1: Создайте массив styles с элементами «Джаз» и «Блюз».
// 2: Добавьте «Рок-н-ролл» в конец.
// 3: Замените значение в середине на «Классика». Ваш код для поиска значения в середине должен работать для массивов с любой длиной.
// 4: Удалите первый элемент массива и покажите его.
// 5: Вставьте «Рэп» и «Регги» в начало массива.
// Массив по ходу выполнения операций:

let styles = ["Джаз","Блюз"];
styles.push("Рок-н-ролл");
// styles[Math.floor((styles.length - 1 ) / 2)];
alert(styles.shift());
styles.unshift("Рэп", "Регги");

// 3) Вызов в контексте массива

// Каков результат? Почему?

let arr = ["a", "b"];

arr.push(function() {
  alert( this );
});

arr[2](); // ?

// Вызов arr[2]() синтаксически – старый добрый obj[method](), в роли obj – arr, а в роли method – 2.

// Итак, у нас есть вызов функции arr[2] как метода объекта. Соответственно, он получает в качестве this объект arr и выводит массив:

let arr2 = ["a", "b"];

arr2.push(function() {
  alert( this );
});

arr2[2](); // "a","b",function
// У массива в итоге 3 элемента: сначала их было 2, плюс функция.

// 4) Сумма введённых чисел

// Напишите функцию sumInput(), которая:

// Просит пользователя ввести значения, используя prompt и сохраняет их в массив.
// Заканчивает запрашивать значения, когда пользователь введёт не числовое значение, пустую строку или нажмёт «Отмена».
// Подсчитывает и возвращает сумму элементов массива.
// P.S. Ноль 0 – считается числом, не останавливайте ввод значений при вводе «0».

function sumInput() {
  let numbers = [];

  while (true) {
    let value = prompt("Введите число", 0);
    if (value === "" || value === null || !isFinite(value)) {
      break;
    }
    numbers.push(+value);
  }
  let sum;
  for (let number of numbers) {
    sum += number;
  }
  return sum;
}


// 5 Подмассив наибольшей суммы
// важность: 2
// На входе массив чисел, например: arr = [1, -2, 3, 4, -9, 6].

// Задача: найти непрерывный подмассив в arr, сумма элементов в котором максимальна.

// Функция getMaxSubSum(arr) должна возвращать эту сумму.

// Например:

// getMaxSubSum([-1, 2, 3, -9]) = 5 (сумма выделенных)
// getMaxSubSum([2, -1, 2, 3, -9]) = 6
// getMaxSubSum([-1, 2, 3, -9, 11]) = 11
// getMaxSubSum([-2, -1, 1, 2]) = 3
// getMaxSubSum([100, -9, 2, -3, 5]) = 100
// getMaxSubSum([1, 2, 3]) = 6 (берём все)
// Если все элементы отрицательные – ничего не берём(подмассив пустой) и сумма равна «0»:

// getMaxSubSum([-1, -2, -3]) = 0
// Попробуйте придумать быстрое решение: O(n2), а лучше за О(n) операций.

function getMaxSubSum(arr) {
  return arr.filter((n) => n > 0).reduce((a, b) => a + b);
}

function getMaxSubSum(arr) {
  let maxSum = 0; // если элементов не будет - возвращаем 0

  for (let i = 0; i < arr.length; i++) {
    let sumFixedStart = 0;
    for (let j = i; j < arr.length; j++) {
      sumFixedStart += arr[j];
      maxSum = Math.max(maxSum, sumFixedStart);
    }
  }

  return maxSum;
}

function getMaxSubSum(arr) {
  let maxSum = 0;
  let partialSum = 0;

  for (let item of arr) { // для каждого элемента массива
    partialSum += item; // добавляем значение элемента к partialSum
    maxSum = Math.max(maxSum, partialSum); // запоминаем максимум на данный момент
    if (partialSum < 0) {
      partialSum = 0;
    } // ноль если отрицательное
  }

  return maxSum;
}