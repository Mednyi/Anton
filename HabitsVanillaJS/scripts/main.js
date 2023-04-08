'use strict'

const capitals = function (word) {
	// Write your code here
  const newWord = word.split('');

  for (let i = 0; i < newWord.length; i++) {
    if (newWord[i].charAt() === newWord[i].toUpperCase()) {
      return newWord[i].indexOf();
    }
  }

  return [...newWord];
};
console.log(capitals('CodEWaRs'));


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


