"use strict";

function doFirst() {
  //  Do somethig
  setTimeout(function() {
    console.log(1);
  }, 500);
}

function doSecond() {
  console.log(2);
}


function learJS(lang, callback) {
  console.log(`I am learnig: ${lang}`);
  callback();
}

function done() {
  console.log('I have just passed this lesson');
}

learJS('JavaScript', done);