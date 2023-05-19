'use strict'

const wheatherMap = new Map();
wheatherMap.set('London', '10');
wheatherMap.set('Moskow', '7');

wheatherMap.get('Moskow');
wheatherMap.get('not found');

wheatherMap.has('Moskow');

wheatherMap.size;

wheatherMap.delete('London');

wheatherMap.clear();

const notepad = new Map();
notepad.set("Anton", "7-925-739-86-12");
notepad.set("Denis", "7-916-494-88-89");

console.log(notepad);
console.log(notepad.get("Denis"));
console.log(notepad.size);
console.log(typeof notepad);
console.log(notepad.keys);

for (const [key, value] of notepad) {
  console.log(`Key: ${key} \n Value: ${value}`);
}

// Use Map

const weatherMap = new Map([
  ['London', '10'],
  ['Moskow', '7']
]);

console.log(weatherMap);

const weatherObject = {
  london: 10,
  moskow: 7,
  paris: 14
};

console.log(Object.entries(weatherObject));

const weatherMap2 = new Map(Object.entries(weatherObject));

// Map's iteration

const weatherMap3 = new Map([
  ['London', '10'],
  ['Moskow', '7'],
  ['Paris', '14']
]);

for (const [key, value] of weatherMap3) {
  console.log(key);
  console.log(value);
}

console.log([...weatherMap3]);
console.log(weatherMap3.keys());
console.log(weatherMap3.values());
console.log([...weatherMap3.keys()]);
console.log([...weatherMap3.values()]);


// TASK
/* Необходимо поменять местами ключи  и значения в следующем Map */

let weatherMap4 = new Map([
  ['London', '10'],
  ['Moskow', '7'],
  ['Paris', '14']
]);

console.log(weatherMap4 = new Map([...weatherMap4].map(el => el.reverse())));

// WeakMap

let a = {a: 1};
let b = {b: 1};

const map = new WeakMap();
map.set(a, 'testA');
map.set(b, 'testB');
map.get(a);
map.has(a);


a = null;
setTimeout(() => {
  console.log(map);
}, 1000);


// A simple cash realisation

let cash = new WeakMap();

function getValue(obj) {
  if (!cash.has(obj)) {
    const res = 1;
    cash.set(obj, res);
  }
  return cash.get(obj);
}

