

//  Каррирование - это метод вычисления функции с несколькими аргументами в последовательность функций с одним аргументом

const add = function(a) {
  return function(b) {
    return function(c) {
      return a + b + c
    }
  }
}

console.log(add(2)(4)(5));
