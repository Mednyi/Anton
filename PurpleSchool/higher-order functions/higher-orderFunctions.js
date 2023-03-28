function add(a, b) {
  return a + b;
}

function substract(a, b) {
  return a - b;
}

function power(a, b) {
  return a**b;
}

// High order function
function calculate(a, b, fn) {
  console.log(fn.name);
  const result = fn(a, b);

  return result;
}

calculate(3, 4, add);


// Return function from other function

function power(pow) {
  return function(num) {
    return num ** pow
  }
}

const powerOfTwo = power(2);
const powerOfThree = power(3);

console.log(power(5)(4));

// TASK arrow function

const power = pow => num => num ** pow;