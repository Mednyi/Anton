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


// Копирование с помощью метода Object.assign

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

const personalPlanPeter = {
  name: "Peter",
  age: "29",
  skills: {
    languages: ['ru', 'eng'],
    programmingLangs: {
      js: '20%',
      php: '10%'
    },
    exp: '1 month'
  },
  showAgeAndLangs: function(plan) {
    const { age } = plan;
    const { languages } = plan.skills;
    let str = `Мне ${age} и я владею языками: `;

    languages.forEach(function(lang) {
      str += `${lang.toUpperCase()} `;
    });

    return str;
  }
};

// Задачи:

// 1) Напишите функцию showExperience, которая будет принимать в себя объект со всеми данными и возвращать строку с опытом.

// Пример:

// showExperience(personalPlanPeter) => '1 month'

// P.S. желательно использовать деструктуризацию, но не обязательно

function showExperience(plan) {
  return `${plan.skills.exp}`;
}

// with destracturing

function showExperience(plan) {
  const { exp } = plan.skills;
  return exp;
}

// 2) Напишите функцию showProgrammingLangs, которая будет принимать в себя объект со всеми данными и возвращать строку в нужном виде.

// Пример:

// showProgrammingLangs(personalPlanPeter)  =>

// "Язык js изучен на 20% Язык php изучен на 10%"

// Причем функция должна работать вне зависимости от количества языков. Если ни один не указан, то возвращается пустая строка.

// P.S. Для переноса строки используется \n в конце строки.

function showProgrammingLangs(plan) {
  let str = '';
  const { programmingLangs } = plan.skills;
  for (let key in programmingLangs) {
    str += `Язык ${key} изучен на ${programmingLangs[key]}\n`;
  }

  return str;
}

// 3) Создайте метод showAgeAndLangs внутри объекта personalPlanPeter. При его вызове метод будет принимать в себя объект и возвращать строку в нужном виде.

// Пример:

// personalPlanPeter.showAgeAndLangs(personalPlanPeter)
// => 'Мне 29 и я владею языками: RU ENG'