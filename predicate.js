
const isRightNum = num => (num > 10 && num <= 5) || (num / 7 === 1);

function or(p1, p2) {
  return function(x) {
      return p1(x) || p2(x);
  }
}

function negative(x) {
  return x < 0;
}

function positive(x) {
  return x > 0;
}

function and(p1, p2) {
  return function(x) {
      return p1(x) && p2(x);
  }
}

function not(p) {
  return function(x) {
      return !p(x);
  }
}

function less(x) {
  return function(y) {
      return y < x;
  }
}

function greater(x) {
  return function(y) {
      return y > x;
  }
}