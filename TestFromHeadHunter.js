const data = require('./data.json');

// Функция которая получает отсортированный массив животных
function getAnimalList(animal) {
  return data.filter(item => item.type === animal);
}

function sortAnimalByAge(firstList, secondList) {
  let newArr = [];

  return newArr.concat(firstList.sort((a,b) => b.age - a.age), secondList.sort((a,b) => a.age - b.age))
}

// Функция которая фильтрует массив животных поцвету
function filterAnimalByColor(arr, color) {
  return arr.filter(item => item.features.includes(color))
}

const task11Result = (animals) => {
  const result = {};
  // your code here

  // Функция счетчик животных

  function getAnimalQuantity(animal) {
    return getAnimalList(animal).length
  }

  // Функция подсчета среднего возраста всех животных в массиве

  function getAverageAge(arr) {
    return Math.round(arr.reduce((acc, item) => acc + item.age, 0) / data.length)
  }

  // Функция создает объект

  function createObj(dog, cat, avgage) {
    return {
      dog,
      cat,
      avgage,
    }
  }

  return result = createObj(getAnimalQuantity('dog'), getAnimalQuantity('cat'), getAverageAge(date));
};

console.log(task11Result(data));

const task12Result = (animals) => {
  const result = 0;
  // your code here

  return result = getAnimalList(animals).filter(item => item.breed && item.features.includes('black')).length;
};

console.log(task12Result(data));

const task13Result = (animals) => {
  const result = [];
  // your code here

  return result = animals.concat(filterAnimalByColor(getAnimalList('dog', 'white'), filterAnimalByColor(getAnimalList('cat', 'black'))));
};

console.log(task13Result(data));

const task14Result = (animals) => {
  const result = [];
  const i = animals.forEach(index => index);
  // your code here
  return result = sortAnimalByAge(getAnimalList(animals[i].type.cat), getAnimalList(animals[i].type.dog));
};

console.log(task14Result(data));

const myPowFunc = (number, n) => {
  const result = number;
  // your code here
  return result ** n;
};

console.log(myPowFunc(3, 4));

const myFlatFunc = (inputArray) => {
  const result = inputArray;
  // your code here
  return result.flat(Infinity);
};

console.log(myFlatFunc([1, 3, 5, [1, [4, 5], 'asdf', [76, [56, [66, 59]]]]]));
// result 1, 3, 5, 1, 4, 5, 'asdf', 76, 56, 66, 59
