'use strict'

// Creating a simple Promise

const prom = new Promise((resolve, reject) => {
  if (new Date() < new Date('01/01/2024')) {
    reject(new Error('Error'));
  }
  resolve('Success');
});

prom
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.log(error);
  })

function timeout(sec) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, sec + 1000);
  })
}

timeout(1)
  .then(() => {
    console.log(1);
    return timeout(1);
  })
  .then(() => {
    console.log(1)
  })


// TASK
/**
 * Сделать ф-цию myFetch, которая выполняет внутри XMLHttpRequest
 */

function myFetch(url) {
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();
    request.open('GET', url);
    request.send();

    request.addEventListener('load', function() {
      if (this.status > 400) {
        reject(new Error(this.status));
      }
      resolve(this.responseText);
    });

    request.addEventListener('error', function() {
      reject(new Error(this.status));
    });

    request.addEventListener('timeout', function() {
      reject(new Error('Timeout'));
    });
  })
}

myFetch('https://dummyjson.com/products/')
  .then(data => console.log(data))
  .catch(error => console.log(error))