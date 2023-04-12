'use strict'

// Async await

function getProducts() {
  fetch('https://dummysjson.com/products')
    .then(response => response.json())
    .then(data => console.log(data))
}

getProducts();

async function getProducts2() {
  // fetch('https://dummysjson.com/products')
  //   .then(response => response.json())
  //   .then(data => console.log(data))
  const productsResponse = await fetch('https://dummysjson.com/products/');
  const { products } = await productsResponse.json();
  console.log(products);

  const productResponse = await fetch('https://dummysjson.com/product/' + products[0].id);
  const product = await productResponse.json();
  console.log(product);
}


// Try catch

async function getProducts3() {
  try {
    const productsResponse = await fetch('https://dummysjson.com/products/');
    if (!productsResponse.ok) {
      throw new Error(productsResponse.status);
    }
    const { products } = await productsResponse.json();
    console.log(products);

    const productResponse = await fetch('https://dummysjson.com/product/' + products[0].id);
    const product = await productResponse.json();
    console.log(product);
  } catch (e) {
    console.log(e);
  } finally {
    console.log('Finally');
  }
}

// TASK
/**
 *
 */

function getMyCoordinates() {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      ({ coords }) => {
        resolve({
          latitude: coords.latitude,
          longitude: coords.longitude
        })
      },
      (err) => {
        reject(err)
      }
    );
  });
}

async function getMyCity() {
  try {
    const { latitude, longitude } = await getMyCoordinates();
    const response = await fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}`);
    if (!response.ok) {
      throw new Error(response.status);
    }
    const data = await response.json();
    console.log(data.city);
  } catch (e) {
    console.log(e);
  }

}

getMyCity();


// Async methods

class ProductRepository {
  async getProducts() {
    const response = await fetch('https://dummysjson.com/products/');
    console.log(await response.json());
  }
}

const repo = new ProductRepository();
repo.getProducts();

const asyncArrow = async () => {
  const response = await fetch('https://dummysjson.com/products/');
  console.log(await response.json());
}

// A parallel execution

async function getAllProducts() {
  const response = await fetch('https://dummysjson.com/products/');
  return response.json();
}

async function getProduct(id) {
  const response = await fetch('https://dummysjson.com/product/' + id);
  return response.json();
}

async function main() {
  const { products } = await getAllProducts();
  const res = await Promise.all(products.map(product => getProduct(product.id)));
  console.log(res)
  // for (const product of products) {
  //   const res = await getProduct(product.id);
  //   console.log(res);
  // }
}