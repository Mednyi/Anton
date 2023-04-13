'use strict'

// Working with elements
// console.log(document);
// console.log(document.head);
// console.log(document.body);
// console.log(document.querySelector);
// console.log(document.querySelectorAll);

// console.log(document.getElementById);
// console.log(document.getElementsByClassName);
// console.log(document.getElementsByTagName);

// const el = document.getElementsByClassName('wrapper');

// const button = document.createElement('button');
// button.innerHTML = 'text';

// el.append(button); // add element to the end
// el.prepend(button); // add element to the begining

// el.before(button); // add element before
// el.after(button); // add element after

// el.remove(button); // remove element

// Visual positioning

window.pageXOffset
window.pageYOffset

document.documentElement.clientWidth
document.documentElement.clientHeight

function generate(event) {
  console.log(event.target.getBoundingClientRect());

  console.log(`X offset: ${window.pageXOffset}`);
  console.log(`Y offset: ${window.pageYOffset}`);
  console.log(`clientWidth: ${document.documentElement.clientWidth}`);
  console.log(`clientHeight: ${document.documentElement.clientHeight}`);

  const el = document.querySelector('.down');
  const rect = el.getBoundingClientRect();

  window.scrollTo({
    left: window.pageXOffset + rect.left,
    top: window.pageYOffset + rect.top,
    behavior: 'smooth'
  })
}

// How to move about DOM elements

// const wrapper = document.querySelector('.wrapper');
// console.log(wrapper);

const inner = document.querySelector('.inner');
const button = document.querySelector('.button');

console.log(inner);
console.log(inner.childNodes);
console.log(inner.children);
console.log([...inner.children]);

console.log(inner.parentNode);
console.log(inner.parentElement);

console.log(button.closest('.inner'));

console.log(button.previousElementSibling);
console.log(button.previousSibling);

console.log(button.nextElementSibling);
console.log(button.nextSibling);

console.log(button.parentElement.children);

