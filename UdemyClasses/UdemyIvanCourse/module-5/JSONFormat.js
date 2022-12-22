'use strict'

const person = {
  name: 'Alex',
  tel: '+79243456767',
  parents: {
    mom: 'Vera',
    dad: 'Alex'
  }
};

// Глубокое клонирование объекта

const clone = JSON.parse(JSON.stringify(person));