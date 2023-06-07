window.addEventListener('DOMContentLoaded', function () {
  'use strict';

  /**
   * Tabs
   */

  let tab = document.querySelectorAll('.info-header-tab'),
    info = document.querySelector('.info-header'),
    tabContent = document.querySelectorAll('.info-tabcontent ');

  function hideTabContent(a) {
    for (let i = a; i < tabContent.length; i++) {
      tabContent[i].classList.remove('show');
      tabContent[i].classList.add('hide');
    }
  }

  hideTabContent(1);

  function showTabContent(b) {
    if (tabContent[b].classList.contains('hide')) {
      tabContent[b].classList.remove('hide');
      tabContent[b].classList.add('show');
    }
  }

  info.addEventListener('click', function (event) {
    let target = event.target;

    if (target && target.classList.contains('info-header-tab')) {
      for (let i = 0; i < tab.length; i++) {
        if (target == tab[i]) {
          hideTabContent(0);
          showTabContent(i);
          break;
        }
      }
    }
  });

  /**
   * Timer
   */

  let deadline = '2023-07-25';

  function getTimeRemaining(endtime) {
    let t = Date.parse(endtime) - Date.parse(new Date()),
      days = Math.floor((t / (1000 * 60 * 60 * 24))),
      hours = Math.floor((t / (1000 * 60 * 60))),
      minutes = Math.floor((t / 1000 / 60) % 60),
      seconds = Math.floor((t / 1000) % 60);

    return {
      'total': t,
      'days': days,
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds
    }
  }

  function setClock(id, endtime) {
    let timer = document.getElementById(id),
      days = timer.querySelector('.days'),
      hours = timer.querySelector('.hours'),
      minutes = timer.querySelector('.minutes'),
      seconds = timer.querySelector('.seconds'),
      timeInterval = setInterval(updateClock, 1000);

    function updateClock() {
      let t = getTimeRemaining(endtime);

      function getZero(num) {
        if (num < 10) {
          return '0' + num;
        } else {
          return num;
        }
      }

      days.textContent = getZero(t.days);
      hours.textContent = getZero(t.hours);
      minutes.textContent = getZero(t.minutes);
      seconds.textContent = getZero(t.seconds);

      if (t.total <= 0) {
        clearInterval(timeInterval);
        days.textContent = '00';
        hours.textContent = '00';
        minutes.textContent = '00';
        seconds.textContent = '00';
      }
    }
  }

  setClock('timer', deadline);

  /**
   * Modal
   */

  let more = document.querySelector('.more'),
    overlay = document.querySelector('.overlay'),
    close = document.querySelector('.popup-close');

  more.addEventListener('click', function () {
    overlay.style.display = 'block';
    this.classList.add('more-splash');
    document.body.style.overflow = 'hidden';
  });
  close.addEventListener('click', function () {
    overlay.style.display = 'none';
    more.classList.remove('more-splash');
    document.body.style.overflow = '';
  });

  /**
   * Send data from form to serve
   */

  let message = {
    loading: 'Загрузка...',
    success: 'Спасибо! Мы скоро с вами свяжемся!',
    failure: 'Что-то пошло не так!'
  }

  let form = document.querySelector('.main-form'),
    input = form.getElementsByTagName('input'),
    statusMessage = document.createElement('div');

  statusMessage.classList.add('status');

  // function sendForm(elem) {
  //   elem.addEventListener('submit', function (event) {
  //     event.preventDefault();
  //     elem.appendChild(statusMessage);

  //     let request = new XMLHttpRequest();
  //     request.open('GET', 'server.php'); /** настройки запроса */
  //     request.setRequestHeader('Content-type', 'application/json; charset=utf-8');

  //     let formData = new FormData(form);

  //     let obj = {};
  //     formData.forEach(function (value, key) {
  //       obj[key] = value;
  //     });
  //     let json = JSON.stringify(obj);
  //     request.send(json)

  //     request.addEventListener('readystatechange', function () {
  //       if (request.readyState < 4) {
  //         statusMessage.innerHTML = message.loading;
  //       } else if (request.readyState === 4 && request.status === 200) {
  //         statusMessage.innerHTML = message.success;
  //       } else {
  //         statusMessage.innerHTML = message.failure;
  //       }
  //     });
  //     for (let i = 0; i < input.length; i++) {
  //       input[i].value = '';
  //     }
  //   });
  // }

  // sendForm(form);

  function sendForm(elem) {
    elem.addEventListener('submit', function (e) {
      e.preventDefault();
      elem.appendChild(statusMessage);
      let formData = new FormData(elem);

      function postData(data) {
        return new Promise(function (resolve, reject) {
          let request = new XMLHttpRequest();
          request.open('POST', 'server.php');
          request.setRequestHeader('Content-type', 'application/json; charset=utf-8');

          request.onreadystatechange = function () {
            if (request.readyState < 4) {
              resolve();
            } else if (request.readyState === 4) {
              if (request.status == 200 && request.status == 300) {
                resolve();
              } else {
                reject();
              }
            }
          }
          request.send(data);
        })
      }

      function clearInput() {
        for (let i = 0; i < input.length; i++) {
          input[i].value = '';
        }
      }

      postData(formData)
        .then(() => statusMessage.innerHTML = message.loading)
        .then(() => {
          statusMessage.innerHTML = '';
        })
        .catch(() => statusMessage.innerHTML = message.failure)
        .then(clearInput)
    })
  }

  sendForm(form)

  // Slider

  let slideIndex = 1,
    slides = document.querySelectorAll('.slider-item'),
    prev = document.querySelector('.prev'),
    next = document.querySelector('.next'),
    dotsWrapper = document.querySelector('.slider-dots'),
    dots = document.querySelectorAll('.dot');

  function showSlides(n) {

    if (n > slides.length) {
      slideIndex = 1;
    }

    if (n < 1) {
      slideIndex = slides.length;
    }

    slides.forEach(item => item.style.display = 'none');

    dots.forEach(item => item.classList.remove('dot-active'));

    slides[slideIndex - 1].style.display = 'block';
    dots[slideIndex - 1].classList.add('dot-active');
  }

  function plusSlides(n) {
    showSlides(slideIndex += n);
  }

  function currentSlides(n) {
    showSlides(slideIndex = n);
  }

  showSlides(slideIndex);

  prev.addEventListener('click', function () {
    plusSlides(-1);
  });

  next.addEventListener('click', function () {
    plusSlides(1);
  });

  dotsWrapper.addEventListener('click', function (event) {
    for (let i = 0; i < dots.length + 1; i++) {
      if (event.target.classList.contains('dot') && event.target == dots[i - 1]) {
        currentSlides(i);
      }
      console.log(i);
    }
  });

  // Calculator

  let persons = document.querySelectorAll('.counter-block-input')[0],
    restDays = document.querySelectorAll('.counter-block-input')[1],
    place = document.querySelector('#select'),
    totalValue = document.querySelector('#total'),
    personsSum = 0,
    daysSum = 0,
    total = 0;

  totalValue.textContent = 0;


  persons.addEventListener('change', function () {
    personsSum = +this.value;
    total = (daysSum + personsSum) * 4000;

    if (restDays.value = '') {
      totalValue.innerHTML = 0;
    } else {
      totalValue.innerHTML = total;
    }
  });

  restDays.addEventListener('change', function () {
    daysSum = +this.value;
    total = (daysSum + personsSum) * 4000;

    if (persons.value = '') {
      totalValue.innerHTML = 0;
    } else {
      totalValue.innerHTML = total;
    }
  });

  place.addEventListener('change', function () {
    if (restDays.value == '' || persons.value == '') {
      totalValue.innerHTML = 0;
    } else {
      let a = total;
      totalValue.innerHTML = a * this.options[this.selectedIndex].value;
    }
  });
});
