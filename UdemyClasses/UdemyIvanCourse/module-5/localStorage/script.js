'use strict';

// localStorage.setItem('number', 5);

// localStorage.setItem('string', 'Hello');

// localStorage.removeItem('string');

// localStorage.clear();

// console.log(localStorage.getItem('number'));

const checkbox = document.querySelector('#checkbox'),
      form = document.querySelector('.form-signin'),
      change = document.querySelector('#color');

if (localStorage.getItem('isChecked')) {
  checkbox.checked = true;
}

if (localStorage.getItem('bg')  === 'changed') {
  form.style.backgroundColor = 'tomato';
}

checkbox.addEventListener('change', () => {
  localStorage.setItem('isChecked', true);
});

change.addEventListener('click', () => {
  if (localStorage.getItem('bg') === 'changed') {
    localStorage.removeItem('bg');
    form.style.backgroundColor = '#fff';
  } else {
    localStorage.setItem('bg', 'changed');
    form.style.backgroundColor = 'tomato';
  }
});

const person = {
  name: 'Ivan',
  age: 25
};

const serializePerson = JSON.stringify(person);
localStorage.setItem('ivan', serializePerson);

console.log(JSON.parse(localStorage.getItem('ivan')));
