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

  request.addEventListener('load', function() {
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

request.addEventListener('load', function() {
  const { products } = JSON.parse(this.responseText);
  const sum = products.reduce((acc, product) => acc += product.price, 0);

  console.log(sum / products.length);
  console.log(sum);

  const request = new XMLHttpRequest();
  request.open('GET', 'https://dummyjson.com/products' + products[0].id);
  request.send();

  request.addEventListener('load', function() {
    const data = JSON.parse(this.responseText);
    console.log(data);

    const request = new XMLHttpRequest();
    request.open('GET', 'https://dummyjson.com/products' + products[1].id);
    request.send();

    request.addEventListener('load', function() {
      const data = JSON.parse(this.responseText);
      console.log(data);
    })
  })

  // this is a callback hell
});