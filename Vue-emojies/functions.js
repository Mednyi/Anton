
// // check some age
function checkAge(age) {
  return age > 18 ? true : 'Родители разрешили?';
}

console.log(checkAge(45));
console.log(checkAge(5));
console.log(checkAge(17));
console.log(checkAge(23));

function checkAge2(age) {
  return age > 18 || 'Родители разрешили?';
}

console.log(checkAge2(23));

function getMinInteger(a, b) {
  return Math.min(a, b);
}

console.log(getMinInteger(12, 4));

function getMinInteger2(a, b) {
  if (a < b) {
    return a;
  } else {
    return b;
  }
}

console.log(getMinInteger2(2, 5));

function getMinInteger3(a, b) {
  return a < b ? a : b;
}

console.log(getMinInteger3(56, 6));

// Функция pow(x,n)

function pow(x, n) {
  let result = x;

  for (let i = 0; i < n; i++) {
    result *= x;
  }
  return result;
}

console.log(pow(2, 3));
console.log(pow(3, 3));
console.log(pow(3, 2));
console.log(pow(2, 2));

// Перепишите с использованием функции-стрелки
// Замените код Function Expression стрелочной функцией:

function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}

ask(
  "Вы согласны?",
  function() { alert("Вы согласились."); },
  function() { alert("Вы отменили выполнение."); }
);

const ask = (question, yes, no) => confirm(question) ? yes() : no();

ask("Вы согласны?", () => alert("Вы согласились."), () => alert("Вы отменили выполнение."));
