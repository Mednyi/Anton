'use strict'

// const button = document.querySelector('.button');
// const inner = document.querySelector('.inner');
const wrapper = document.querySelector('.wrapper');

// button.addEventListener('click', function(event) {
//   console.log('button');
//   console.log(event.target);
//   console.log(event.currentTarget);
//   this.style.backgroundColor = 'purple';
// });
// for (let i = 0; i < 100; i++) {
//   const el = document.createElement('div');
//   el.innerHTML = `User id${i}`;
//   el.setAttribute('data-id', i);
//   // el.addEventListener('click', () => {
//   //   console.log(`Deleted user ${i}`)
//   // });
//   wrapper.append(el);
// }

// wrapper.addEventListener('click', (e) => {
//   const i = e.target.getAttribute('data-id');
//   console.log(`Deleted user ${i}`);
//   wrapper.childNodes.forEach(item => item.addEventListener('click', (e) => {
//     e.stopPropagation();
//     item.remove();
//   }));
// });

// inner.addEventListener('click', function (event) {
//   console.log('inner');
//   console.log(event.target);
//   console.log(event.currentTarget);
//   this.style.backgroundColor = 'tomato';
//   event.stopPropagation();
// });

// wrapper.addEventListener('click', function (event) {
//   console.log('wrapper');
//   console.log(event.target);
//   console.log(event.currentTarget);
//   this.style.backgroundColor = 'brown';
// });


// A global events of DOM elements

document.addEventListener('DOMContentLoaded', function(e) {
  console.log('DOMContentLoaded');
  console.log(e);
});

window.addEventListener('load', function (e) {
  console.log('DOMContentLoaded');
  console.log(e);
});

window.addEventListener('beforeunload', function (e) {
  e.preventDefault();
  e.returnValue = '';
});