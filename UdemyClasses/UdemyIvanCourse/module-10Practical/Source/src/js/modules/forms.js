import checkNumInputs from "./checkNumInputs";

const forms = () => {
  const form = document.querySelectorAll('form'),
        input = document.querySelectorAll('input');

  checkNumInputs('input[name="user_phone"]');

  const message = {
    loading: 'Загрузка....',
    success: 'Спасибо! Мы с вами скоро свяжемся.',
    failure: 'Что-то пошло не так....'
  };

  const postData = async (url, data) => {
    document.querySelector('.status').textContent = message.loading;
    let res = await fetch(url, {
      method: 'POST',
      body: data
    });

    console.log(res);

    return await res.text();
  }

  const clearInputs = () => {
    input.forEach(item => {
      item.value = '';
    });
  };

  form.forEach(item => {
    item.addEventListener('submit', (event) => {
      event.preventDefault();

      let statusMessage = document.createElement('div');
      statusMessage.classList.add('.status');
      item.appendChild(statusMessage);

      const formData = new FormData(item);

      console.log(...formData);
      console.log(typeof formData);

      postData('assets/server.php', formData)
        .then(result => {
          console.log(result);
          statusMessage.textContent = message.success;
        })
        .catch(() => statusMessage.textContent = message.failure)
        .finally(() => {
          clearInputs();
          setTimeout(() => {
            statusMessage.remove();
          }, 5000);
        })
    });
  });
};

export default forms;