'use strict'




let weatherMap4 = new Map([
  ['London', '10'],
  ['Moskow', '7'],
  ['Paris', '14']
]);

for (let [key, value] of weatherMap4) {
  [key, value] = [value, key];
}

weatherMap4  = new Map([...weatherMap4].map(el => el.reverse()));

console.log(weatherMap4);


