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

