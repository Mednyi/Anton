function form() {
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
          request.open('GET', 'server.php');
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
}

export default form;