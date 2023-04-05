'use strict'

function pipeFix(numbers){

}

console.log(pipeFix([1,4]));


let weatherMap4 = new Map([
  ['London', '10'],
  ['Moskow', '7'],
  ['Paris', '14']
]);

console.log(weatherMap4);

for (const [key, value] of weatherMap4) {
  [key, value] = [value, key];
}