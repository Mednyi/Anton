1) найти элемент массива, минимальный по модулю
2) вырезать из массива элементы с i-го по j-й индекс (i и j любые)
3) перевернуть массив
4) поменять местами i-й и j-й элементы массива
5) поменять местами максимальный и минимальный элементы массива
6) определить элемент, наиболее часто встречающийся в массиве


1) const array2 = [9, -10, 11, -1, 100, -200];
   let min = Math.abs(array2[0]);
   for (let i = 0; i < array2.length; i++) {
    if (Math.abs(array2[i]) < min) {
      min = Math.abs(array2[i]);
    }
   }

2)  const array3 = [9, -10, 11, -1, 100, -200];
    const output = [];
    const start = 2;
    const end = 4;

    for (let i = 0; i < array3.length; i++) {
      if (i < start && i > end) {
        output.push(array3[i]);
      }
    }


3) const array1 = [12, 23, 56, 112, 968];
   const output = [];

   for (let i = array1.length - 1; i >= 0; i--) {
    output.push(array1[i]);
   }
    // второй способ перевернуть массива
    // 0 array1.length - 1 -i
    // 1 array1.length - 1 - i
  const length = Math.floor(array1.length / 2);
  for (let i = 0; i < length; i++) {
    let buffer = array1[i];
    array1[i] = array1[array1.length - 1 - i];
    array1[array1.length - 1 - i] = buffer;
  }

4) const array4 = [23, 45, 10, 2, 6, 90, 13, 123, 209, 7];
   const ith = 3;
   const jth = 6;

  console.log(array4[ith], array4[jth]);

  const buffer = array4[ith];

  array4[ith] = array4[jth];

  array4[jth] = buffer;

  // [23, 45, 10, 13, 6, 90, 2, 123, 209, 7]

5) const array5 = [23, 45, 10, 2, 6, 90, 13, 123, 209, 7];
  let min = array5[0];
  let max = array5[0];
  let ith = 0;
  let jth = 0;
 for (let i = 0; i < array5.length; i++ ) {
  if (array5[i] < min) {
    min = array5[i];
    ith = i;
  }
  if (array5[i] > max) {
    max = array5[i];
    jth = i;
  }
}

const buffer = array5[ith];
array5[ith] = array5[jth];
array5[jth] = buffer;

// 6) const array6 = [23, 45, 10, 2, 6, 90, 13, 123, 209, 7, 45, 100];
  let mostFreq = array6[0];
  let maxFreq = 0;
  for (let i = 0; i < array6.length; i++) {
    let freq = 0;
    for (let j = i; j < array6.length; j ++) {
      if (array6[i] === array6[j]) {
        freq++;
      }
    }
    if (freq > maxFreq) {
      maxFreq = freq;
      mostFreq = array6[i];
    }
  }


// Requests for server
// First example(variation)
const API_URL = 'https://22.javascript.pages.academy/kekstagram/data';
const API_POST_URL = 'https://22.javascript.pages.academy/kekstagram';

const getData = () => new Promise((resolve, reject) => {
  fetch(API_URL).then((response) => response.json())
    .then((data) => resolve(data))
    .catch((error) => reject(error));
});

const postData = (data) => new Promise((resolve, reject) => {
  fetch(API_POST_URL, {
    method: 'POST',
    body: data,
  }).then((response) => response.json().then((data) => {resolve(data)}))
    .catch((error) => reject(error));
});

export default {getData, postData};

// Second example
const Urls = {
  GET: 'https://22.javascript.pages.academy/kekstagram/data',
  POST: 'https://22.javascript.pages.academy/kekstagram',
}

const request = (onSuccess, onError, method, data) => {
  fetch(
    Urls[method],
    {
      method: method,
      body: data,
    },
  )
    .then((response) => response.json())
    .then((data) => {
      onSuccess(data)
    }).catch(() => {
      onError()
    });
}

export {request}
