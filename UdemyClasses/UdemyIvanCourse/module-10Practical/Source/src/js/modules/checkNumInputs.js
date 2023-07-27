const checkNumInputs = (selector) => {
  const numInputs = document.querySelectorAll(selector);

  numInputs.forEach(item => {
    item.addEventListener('input', () =>{
      // Check inputs that you can input only numbers, not any characters
      item.value = item.value.replace(/\D/, '');
    });
  });
};

export default checkNumInputs;