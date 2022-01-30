const user = {
  firstName: 'Anton',
  lastName: 'Zhilin'
}

const { firstName, lastName } = user;

const user = {
  firstName: 'Anton',
  lastName: 'Zhilin',
  info: {
    work: 'Someplace',
    skills: ['HTML', 'CSS', 'JS']
  }
}

const { info: { work, skills} } = user;

// Array destructuring

const colors = ['white', 'green', 'blue', 'red'];

const [ white, green, blue, red ] = colors;

const [ white, ...otherColors] = colors;

const nestedArr = ['hello world', ['key', 'value']];

const [, [key, value]] = nestedArr;

const names = ['Denis', 'Anton', 'Aleksandr', 'Anatoliy'];

const [...newNames] = names; // copy an array of names

const colorNames = [...colors, ...names] // as same as concat method


// Udemy Denis course tasks
// 1 Используя rest оператор и деструктуризацию, создать функцию, которая принимает любое количество аргументов и возвращает объект, содержащий первый аргумент и массив из остатка:

// func(‘a’, ‘b’, ‘c’, ‘d’) →

// { first: ‘a’, other: [‘b’, ‘c’, ‘d’] }

function getFirstAndOther(first, ...other) {
  return {
    first,
    ...other
  }
}

const getFirstAndOther = (first, ...other) => ({ first, other});

// 2 Организовать функцию getInfo, которая принимает объект вида { name: ..., info: { employees: [...], partners: [ …] } } и выводит в консоль имя(если имени нет, показывать ‘Unknown’) и первые две компании из массива partners:

const organisation = {

  name: 'Google',

  info: { 
    employees: ['Vlad', 'Olga'], 
    partners: ['Microsoft', 'Facebook', 'Xing'] 
  }

};



getInfo(organisation);

function getInfo({ name: someName = 'Unknown', info: { employees: [name1, name2], partners: [partner1, partner2]}}) {
  console.log(someName, name1, name2, partner1, partner2);
}

function getInfo(
  {
    name = 'Unknow',
    info: { partners: [first = 'none', second = 'none'] = [] } = {}
  } = {}
) {
  console.log(`Name: ${name}`);
  console.log(`Partners: ${first}, ${second}`);
}


// 3 Используя деструктуризацию получить значения из следующих полей 
    // 1. name, balance, email

    // 2. из массива tags получить первый и последний элемент

    // 3. из массива friends получить значение поле name из первого элемента массива

    // Если какое то из полей не имеет значения то подставить значение по умолчанию.

let user = {
  "guid": "dd969d30-841d-436e-9550-3b0c649e4d34",
  "isActive": false,
  "balance": "$2,474.46",
  "age": 30,
  "eyeColor": "blue",
  "name": "Tameka Maxwell",
  "gender": "female",
  "company": "ENOMEN",
  "email": "tamekamaxwell@enomen.com",
  "phone": "+1 (902) 557-3898",
  "tags": [
    "aliquip",
    "anim",
    "exercitation",
    "non",
  ],
  "friends": [
    {
      "id": 0,
      "name": "Barber Hicks"
    },
    {
      "id": 1,
      "name": "Santana Cruz"
    },
    {
      "id": 2,
      "name": "Leola Cabrera"
    }
  ],
};

const { name = '', balance = '', email = '', tags: [first = '', , , last = ''] = [], friends: [{name: friendsName = ''}] = []} = user;


// 4 С помощью оператора rest, из объекта user (из предыдущей задачи) скопировать в новый массив значение следующих полей tags и friends.

let user = {
  "guid": "dd969d30-841d-436e-9550-3b0c649e4d34",
  "isActive": false,
  "balance": "$2,474.46",
  "age": 30,
  "eyeColor": "blue",
  "name": "Tameka Maxwell",
  "gender": "female",
  "company": "ENOMEN",
  "email": "tamekamaxwell@enomen.com",
  "phone": "+1 (902) 557-3898",
  "tags": [
    "aliquip",
    "anim",
    "exercitation",
    "non",
  ],
  "friends": [
    {
      "id": 0,
      "name": "Barber Hicks"
    },
    {
      "id": 1,
      "name": "Santana Cruz"
    },
    {
      "id": 2,
      "name": "Leola Cabrera"
    }
  ],
};

const newArr = [...user.tags, ...user.friends];