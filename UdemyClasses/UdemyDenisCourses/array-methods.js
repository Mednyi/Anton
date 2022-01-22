// 1 Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString» То есть дефисы удаляются, а все слова после них получают заглавную букву.

function camelize(str) {
  return str.split('-').map(
    (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
  )
  .join('');
}

// 2 Напишите функцию filterRange(arr, a, b), которая принимает массив arr, ищет в нём элементы между a и b и отдаёт массив этих элементов.Функция должна возвращать новый массив и не изменять исходный.

function filterRange(arr, a, b) {
  return arr.filter(item => (a <= item && item <= b));
}

// 3 Напишите функцию filterRangeInPlace(arr, a, b), которая принимает массив arr и удаляет из него все значения кроме тех, которые находятся между a и b. То есть, проверка имеет вид a ≤ arr[i] ≤ b. Функция должна изменять принимаемый массив и ничего не возвращать.

function fileterRangeInPlace(arr, a, b) {
  for (let i = 0; i < arr.length; i++) {
    let val = arr[i];

    if (val < a || val > b) {
      arr.splice(i, 1);
      i--;
    }
  }
}

// 4 Сортировать в порядке по убыванию

let arr = [5, 2, 1, -10, 8]

function sortArray(arr) {
  return arr.sort((a, b) => b - a);
}

sortArray(arr);

// 5 У нас есть массив строк arr. Нужно получить отсортированную копию, но оставить arr неизменённым. Создайте функцию copySorted(arr), которая будет возвращать такую копию

function copySorted(arr) {
  return arr.slice().sort();
}

// 6 