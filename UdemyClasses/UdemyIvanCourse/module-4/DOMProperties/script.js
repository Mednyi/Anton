'use strict';

const box = document.querySelector('.box'),
      btn = document.querySelector('button');
// const widthBox = box.clientWidth;
// const heightBox = box.clientHeight;

// const widthBox = box.offsetWidth;
// const heightBox = box.offsetHeight;

const widthBox = box.scrollWidth;
const heightBox = box.scrollHeight;
console.log(widthBox, heightBox);

btn.addEventListener('click', () => {
  // box.style.height = box.scrollHeight + 'px';
  console.log(box.scrollTop);
});

console.log(box.getBoundingClientRect().top);

const style = window.getComputedStyle(box);

console.log(style.display);

console.log(document.documentElement.clientWidth);
console.log(document.documentElement.scrollTop);
console.log(window.scrollBy(0, 400));
console.log(window.scrollTo());


