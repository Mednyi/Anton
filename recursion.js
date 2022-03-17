
// Recursion
// Функция вызывает саму себя
// 1. Базовое условие(терминальное)
// 2. Правило движения по рекурсии

function factorial(n) {
  if (n === 0) return 1;

  return n * factorial(n - 1);
}
console.log(factorial(5));

// Напишите функцию smallestDivisor(). Она должна находить наименьший целый делитель числа.
// Попробуйте разделить число на 2.
// Если число делится без остатка, то это наименьший делитель.
// Если нет, то попробуйте следующий делитель.
// Если ничего не делит число без остатка, то переданное число
// является простым, так что его наименьший делитель — оно само (не считая 1)

const smallestDivisor1 = (num) => {
  // BEGIN (write your solution here)
  const iter = (counter, acc) => {
    if ((counter % acc) == 0) {
      return acc;
    }
    else if (counter == 1) return counter;
    return iter(counter, acc + 1);
  }
  return iter(num, 2);
  // END
};


// императивный итеративный процесс


const smallestDivisor= (num) => {
  if (num < 1) {
    return NaN;
  }
  if (num === 1) {
    return num;
  }

  let divisor = 2;

  while (num % divisor !== 0) {
    divisor = divisor + 1;
  }

  return divisor;
};