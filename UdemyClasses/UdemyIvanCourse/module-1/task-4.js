/* Задание на урок:

1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы

2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.

3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку.
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены -
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/

'use strict';

// Код возьмите из предыдущего домашнего задания

let numberOfFilms;

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
  start: function() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
      numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
  },
  someMethod: function() {
    for (let i = 0; i < 2; i++) {
      const question1 = prompt('Один из последних просмотренных фильмов?', '');
      const question2 = prompt('На сколько оцените его?', '');

      if (question1 != null && question2 != null & question1 != '' && question2 != '' && question1.length < 50) {
        personalMovieDB.movies[question1] = question2;
      } else {
        console.log('error');
        i--;
      }
    }
  },
  // 2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
  // false - выводит в консоль главный объект программы
  showMyDB: function showMyDB() {
    if (personalMovieDB.privat === false) {
      console.log(personalMovieDB);
    }
  },
  // 3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос
// "Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
// genres
  writeYourGenres: function() {
    for (let i = 1; i <= 3; i++) {
      personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
    }
  },
  toggleVisibleMyDB: function() {
    if (!this.privat) {
      this.privat = true;
    } else {
      this.privat = false;
    }
  }
};


