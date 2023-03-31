'use strict';

console.log(document.head);
let panelText = document.querySelector('.panel').textContent;
console.log(panelText);
document.querySelector('.panel').textContent = 'My new text';
document.querySelector('.input').value = 'Text';

function submitForm() {
  const input = document.querySelector('.input').value;
  if (!input) {
    return;
  }
  document.querySelector('.panel').innerText = input;
  document.querySelector('.input').value = '';
}

function changeClick() {
  submitForm();
}

document.querySelector('.input').addEventListener('keydown', (e) => {
  if (e.code == 'Enter') {
    submitForm();
  }
})

const attribute = document.querySelector('.panel').getAttribute('class');

const attribute2 = document.querySelector('.panel').setAttribute('class', 'notification');

// Create an element dinamically

panelText = 'Panel';
const newElement = document.createElement('div');
newElement.setAttribute('user-id', 1);
newElement.classList.add('panel');
newElement.innerHTML = `<div>${panelText}</div>`

document.querySelector('.test').appendChild(newElement);


// JSON
const obj = JSON.parse('{ "a": 1 }');
console.log(obj.a);

const str = JSON.stringify(obj);

console.log(str);