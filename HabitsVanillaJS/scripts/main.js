'use strict'

const capitals = function (word) {
	// Write your code here
  const newWord = word.split('');
  let result = [];

  for (let i = 0; i < newWord.length; i++) {
    if (newWord[i] === newWord[i].toUpperCase()) {
      result.push(newWord.indexOf(newWord[i]));
    }
  }
  return result;
};
console.log(capitals('CodEWaRs'));

// function request(id) {
//   const request = new XMLHttpRequest();
//   request.open('GET', 'https://dummyjson.com/products/1' + id);
//   request.send();

//   request.addEventListener('load', function() {
//     const data = JSON.parse(this.responseText);

//     console.log(data);
//   });
// }

// request(1);
// request(2);
// request(3);

function nameShuffler(str) {
  const newStr = [...str];
  console.log(newStr);
  //Shuffle It
  return newStr.reverse().join(' ');
}

nameShuffler('john McClane');




