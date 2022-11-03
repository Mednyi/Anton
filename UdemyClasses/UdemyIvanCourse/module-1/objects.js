const options = {
  name: 'test',
  width: 1024,
  height: 1024,
  color: {
    border: 'black',
    bg: 'red'
  },
  makeTest: function() {
    console.log("test");
  }
};

console.log(options.makeTest());

// console.log(options["color"]["border"]);

// options.name = 'as';

// console.log(options.name);

// delete options.name;

let counter = 0;

for (let key in options) {
  if (typeof(options[key]) === 'object') {
    for (let i in options[key]) {
      console.log(`Value ${key} has property ${options[key][i]}`);
    }
  } else {
    console.log(`Value ${key} has property ${options[key]}`);
    counter++;
  }
}

for (let key in options) {
  counter++;
  // Find out how many properties our object have
}

// Or you can find it out this way

const objKeysLength = Object.keys(options).length;


// DESTRUCTURING

const { border, bg } = options.color;
const { name1, width, height } = options;

// Скопировать объект вручную поверхностно

function copy(mainObj) {
  let objCopy = {};
  let key;

  for(key in mainObj) {
    objCopy[key] = mainObj[key];
  }

  return objCopy;
}

const numbers = {
  a: 2,
  b: 5,
  c: {
    x: 7,
    y: 4
  }
};

const newNumbers = copy(numbers);

console.log(newNumbers);


// Копирование с помощью метода

const newObj = Object.assign({}, numbers);

const newObj2 = Object.assign(options, numbers);

console.log(newObj2);

// Клонирование() объекта с помощью SPREAD оператора

const questions = {
  one: 'How are you?',
  two: 'How old are you?',
  three: 'What is your name?'
};

const cloneObject = {
  ...questions
};