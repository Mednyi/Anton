/* Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" -
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение:
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */

'use strict';

// Возьмите свой код из предыдущей практики

document.addEventListener('DOMContentLoaded', () => {
  const movieDB = {
    movies: [
      "Логан",
      "Лига справедливости",
      "Ла-ла лэнд",
      "Одержимость",
      "Скотт Пилигрим против..."
    ]
  };

  const advertisment = document.querySelectorAll('.promo__adv img');
  const poster = document.querySelector('.promo__bg');
  const genre = poster.querySelector('.promo__genre');
  const movieList = document.querySelector('.promo__interactive-list');
  const addForm = document.querySelector('form.add');
  const addInput = addForm.querySelector('.adding__input');
  const checkbox =addForm.querySelector('[type="checkbox"]');

// 1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" -
// новый фильм добавляется в список. Страница не должна перезагружаться.
// Новый фильм должен добавляться в movieDB.movies.
// Для получения доступа к значению input - обращаемся к нему как input.value;
// P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

  addForm.addEventListener('submit', (event) => {
    event.preventDefault();

    let newFilm = addInput.value;
    const favorite = checkbox.checked;

    if (newFilm) {

      // 2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

      if (newFilm.length > 21) {
        newFilm = `${newFilm.substring(0, 22)}...`;
      }

//       4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение:
// "Добавляем любимый фильм"

      if (favorite) {
        console.log("Добавляем любимый фильм");
      }

      movieDB.movies.push(newFilm);
      sortArr(movieDB.movies);

      createMovieList(movieDB.movies, movieList);
    } else {
      throw new Error('Incorrect input, please input any letters');
    }

    event.target.reset();
  });

  const deleteAd = (element) => {
    element.forEach(item => {
      item.remove();
    });
  }

  const makeStyleChanges = () => {
    genre.textContent = 'драма';

    poster.style.backgroundImage = 'url("img/bg.jpg")';
  };

  const sortArr = (arr) => {
    arr.sort();
  };

  // movieList.forEach(item => {
  //     item.remove();
  // });

  movieDB.movies.sort();

  function createMovieList(films, parent) {
    parent.innerHTML = '';

    sortArr(films);

    films.forEach((film, i) => {
    parent.innerHTML += `
      <li class="promo__interactive-item">${i + 1} ${film}
      <div class="delete"></div>
      </li>
    `});

    // 3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

    document.querySelectorAll('.delete').forEach((btn, i) => {
      btn.addEventListener('click', () => {
        btn.parentElement.remove();
        movieDB.movies.splice(i, 1);

        createMovieList(films, parent);
      });
    });
  }

  deleteAd(advertisment);
  makeStyleChanges();
  createMovieList(movieDB.movies, movieList);
});