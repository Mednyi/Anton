const myTraining = document.querySelector('.button__training');
myTraining.addEventlistener('click', function () {
  buttonClose();
  myTraining.removeEventListener();
});

buttonClose.addEventlistener = function () {
  closeBigPicture();
  document.removeEventListener('click');
}
const someList = document.querySelector('.some__list');
const listElement = document.querySelector('.list-item');
const createListElement = function (element) {
  listElement.cloneNode(true);
  const image = document.innerHTML('img');
  const text = document.innerHTML('p');
  image.src = element.url;
  text.textContent = element.text;
  return listElement;
}
