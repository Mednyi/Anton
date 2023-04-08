'use strict'

const messages = ['Boom!', 'Smash!!!'];

const timer = setTimeout((message1, message2) => {
  console.log(message1);
  console.log(message2);
}, 2000, ...messages);

console.log(1)

const timer2 = setTimeout((message1, message2) => {
  console.log(2);
}, 2000);

clearTimeout(timer2);

console.log(3)

// Performance

const mark1 = console.log(performance.now());

setTimeout(() => {
  const mark2 = console.log(performance.now());
  console.log(mark2 - mark1);
}, 1000);


// SetInterval

const interval = setInterval(() => {
  console.log(new Date());
}, 1000);

setTimeout(() =>{
  clearInterval(interval);
}, 5000);



// TASK

/*
  Таймер пиццы
  Сдулать таймер пиццы (ф-цию, принимающую время),
  который будет выводить в консоль секунды,
  оставшиеся до готовности пиццы и сообщение по готовности.
  00:04
  00:03
  00:02
  00:01
  00:00
  Готово!!!!!
*/

function pizzaTimer(ms) {
  const end = new Date().getTime() + ms;

  const interval = setInterval(() => {
    console.log(
      new Intl.DateTimeFormat('ru-Ru', {
        minute: 'numeric',
        second: 'numeric'
      }).format(end + 100 - new Date())
    );
  }, 1000);
  setTimeout(() => {
    clearInterval(interval);
    console.log('Done!!!');
  }, ms)
}