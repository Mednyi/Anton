'use strict'

// Count user's salary

const user = [
  { name: 'Mycah', password: '04-887-6629', salary: 5500 },
  { name: 'Jannelle', password: '40-900-8201', salary: 6000 },
  { name: 'Titos', password: '85-454-0170', salary: 10000 },
  { name: 'Jacquelin', password: '10-858-4114', salary: 5600 },
  { name: 'Jasper', password: '88-115-7660', salary: 8900 },
  { name: 'Rodrigo', password: '59-621-5493', salary: 5400 },
]

let search = 'J'

for (let i = 0; i < user.length; i++) {
  if (user[i].name[0] === search) {
    console.log(user[i])
  }
}

let maxSalary = 0
let userIndex = 0

for (let i = 0; i < user.length; i++) {
  if (user[i].salary > maxSalary) {
    maxSalary = user[i].salary
    userIndex = i
  }
}

// Encode the message

let symbols = [
  'А',
  'Б',
  'В',
  'Г',
  'Д',
  'Е',
  'Ё',
  'Ж',
  'З',
  'И',
  'Й',
  'К',
  'Л',
  'М',
  'Н',
  'О',
  'П',
  'Р',
  'С',
  'Т',
  'У',
  'Ф',
  'Х',
  'Ц',
  'Ч',
  'Ш',
  'Щ',
  'Ъ',
  'Ы',
  'Ь',
  'Э',
  'Ю',
  'Я',
  'а',
  'б',
  'в',
  'г',
  'д',
  'е',
  'ё',
  'ж',
  'з',
  'и',
  'й',
  'к',
  'л',
  'м',
  'н',
  'о',
  'п',
  'р',
  'с',
  'т',
  'у',
  'ф',
  'х',
  'ц',
  'ч',
  'ш',
  'щ',
  'ъ',
  'ы',
  'ь',
  'э',
  'ю',
  'я',
  ' ',
  '.',
  ',',
  '—',
  '!',
]

// Encoded message
let encodedSymbols = [
  18,
  38,
  46,
  62,
  66,
  50,
  33,
  41,
  66,
  49,
  48,
  38,
  58,
  62,
  68,
  66,
  48,
  37,
  42,
  47,
  66,
  50,
  33,
  41,
  66,
  49,
  48,
  51,
  49,
  42,
  67,
]

// Decoded message
let decodedMessage = ''

for (let i = 0; i < encodedSymbols.length; i++) {
  decodedMessage += symbols[encodedSymbols[i]]
}

// Records in hop jumping

let qualificationDistance = 200
let attempts = [120, 150, 160, 201, 203, 180, 202]
let qualified = false
let averageBest = 0

/* Техническое задание

Мяу! Я провожу тренировки и хочу понять, пройду ли квалификацию.

В течение тренировки я делаю несколько прыжков, и собираю длины прыжков в массив attempts.

Программа должна выбрать три лучших прыжка, а затем посчитать среднее значение этих трёх прыжков и записать его в переменную averageBest.

Квалификационное значение хранится в переменной qualificationDistance.

Если среднее от лучших трёх прыжков больше квалификационного значения,
 то я прошёл квалификацию и переменная qualified должна содержать true. 
 Если квалификация не пройдена, то в qualified должно быть false.

*/
