'use strict';

const APP = {};

(function () {
  const a = 1;

  function add(first, second) {
    return first + second;
  }

  function sub(first, second) {
    return first - second;
  }

  APP.calc = {
    a,
    add,
    sub
  }
})();

