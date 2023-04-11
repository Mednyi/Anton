'use strict'

// Get data from server with XMLHttpRequest

// const request = new XMLHttpRequest();
// request.open('GET', 'https://dummyjson.com/products/1');
// request.send();

// request.addEventListener('load', function() {
//   const data = JSON.parse(this.responseText);

//   console.log(data);
// });

function request(id) {
  const request = new XMLHttpRequest();
  request.open('GET', 'https://dummyjson.com/products/' + id);
  request.send();

  request.addEventListener('load', function () {
    const data = JSON.parse(this.responseText);

    console.log(data);
  });
}

request(1);
request(2);
request(3);

// TASK
/*
  Получить среднюю цену 30 товаров из API
  // https://dummyjson.com/products/
*/

const request = new XMLHttpRequest();
request.open('GET', 'https://dummyjson.com/products');
request.send();

request.addEventListener('load', function () {
  const { products } = JSON.parse(this.responseText);
  const sum = products.reduce((acc, product) => acc += product.price, 0);

  console.log(sum / products.length);
  console.log(sum);

  const request = new XMLHttpRequest();
  request.open('GET', 'https://dummyjson.com/products' + products[0].id);
  request.send();

  request.addEventListener('load', function () {
    const data = JSON.parse(this.responseText);
    console.log(data);

    const request = new XMLHttpRequest();
    request.open('GET', 'https://dummyjson.com/products' + products[1].id);
    request.send();

    request.addEventListener('load', function () {
      const data = JSON.parse(this.responseText);
      console.log(data);
    })
  })

  // this is a callback hell
});

// Promises

const res = fetch('https://dummyjson.com/products/1').then(response => response.json()).then(data => data);

// Promise chaining

// fulfilled
fetch('https://dummyjson.com/products')
  .then(response => response.json())
  .then(({ products }) => {
    console.log(products);
    return fetch('https://dummyjson.com/products/' + products[0].id);
  })
  .then(response => response.json())
  .then(data => {
    console.log(data);
  })

// reject
fetch('https://dummysjson.com/products')
  .then(
    response => response.json(),
    error => console.log(error)
  )
  .then(({ products }) => {
    console.log(products);
    return fetch('https://dummyjson.com/products/' + products[0].id);
  })
  .then(response => response.json())
  .then(data => {
    console.log(data);
  })
  .catch(error => console.log(error));

// finally

fetch('https://dummysjson.com/products')
  .then(
    response => response.json(),
    error => console.log(error)
  )
  .then(({ products }) => {
    console.log(products);
    return fetch('https://dummyjson.com/products/' + products[0].id);
  })
  .then(response => response.json())
  .then(data => {
    console.log(data);
  })
  .catch(error => console.log(error))
  .finally(() => {
    console.log('Do something finally');
  })

// TASK


function createSelect(array) {
  const el = document.querySelector('.filter');
  el.innerHTML = `<select>
    ${array.map(arrEl => `<option value=${arrEl}>${arrEl}</option>`)}
  </select>`
}

function getCategories() {
  fetch('https://dummyjson.com/products/categories')
    .then(response => response.json())
    .then(data => createSelect(data))
    .catch(error => console.error(`Error: ${error}`))
}


// TASK
/**
 * Сделать функцию, которая принимает строку и текст ошибки и возвращает уже Promise c JSON из тела запроса
 */

function getData(url, errorMessage, method = 'Get') {
  return fetch(url, {
    method
  })
    .then(
      response => {
        if (!response.ok) {
          throw new Error(`${errorMessage} ${response.status}`);
        }
        return response.json()
      }
    )
}

getData('https://dummyjson.com/products', 'Can not get products')
  .then(({ products }) => {
    console.log(products);
    return getData('https://dummyjson.com/products/' + products[0].id, 'Can not get product');
  })
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    const el = document.querySelector('.filter');
    el.innerHTML = error.message
  })