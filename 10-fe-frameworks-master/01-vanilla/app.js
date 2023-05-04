// const input = document.querySelector('input')
// const ul = document.querySelector('ul')
// let ALL_USERS

// async function start() {
//   const res = await fetch('https://jsonplaceholder.typicode.com/users')
//   ALL_USERS = await res.json()
//   render(ALL_USERS)
// }

// input.addEventListener('input', () => {
//   render(
//     ALL_USERS.filter((i) =>
//       i.name.toLowerCase().includes(input.value.toLowerCase())
//     )
//   )
// })

// function render(data) {
//   const html = data.map((i) => `<li>${i.name}</li>`).join('')
//   ul.innerHTML = html
// }

// start()

//
const data = [
  { name: "Саша", age: 19 },
  { name: "Катя", age: 21 },
  { name: "Миша", age: 17 },
  { name: "Федя", age: 23 },
  { name: "Клава", age: 22 }
];



function calcAvgAge(array) {
  // Напишите код здесь
  return Math.floor(array.map(item => item.age).reduce((acc, item) => acc + item) / array.length);
}

console.log(calcAvgAge(data));
