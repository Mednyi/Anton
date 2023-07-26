'use strict'

const flights = ['Russia', 'USA', 'London', 'London', 'USA'];

const setFlights = new Set(flights);
console.log(setFlights);
console.log(setFlights.size);
console.log(setFlights.has('Russia'));
console.log(setFlights.add('Paris'));
console.log(setFlights.delete('London'));
console.log(setFlights.clear());

// How to iterate over the Set structre

for (const flight of setFlights) {
  console.log(flight);
}

// From Set to the array

console.log([...setFlights]);


const javaScriptTypes = [1, 'string', false, 1, 'string', false, false, 1, undefined, undefined, undefined, null, null, null, null];

const uniqueArray = new Set(javaScriptTypes);

console.log(uniqueArray);

for (const item of uniqueArray) {
  console.log(item);
}

console.log([...uniqueArray]);