const myTraining = document.querySelector('.button__training');
myTraining.addEventlistener('click', buttonClose());

buttonClose.addEventlistener = function () {
  closeBigPicture();
  document.removeEventListener('click');
}

// Создаю ДОМ элементы в ручную

const renderListItem = function (element) {
  const listItem = document.createElement('li');
  const image = document.createElement('img');
  const text = document.createElement('p');
  listItem.appendChild(image);
  listItem.appendChild(text);
  image.src = element.url;
  text.textContent = element.text;
  return listItem;
}

const renderList = function (animals) {
  const list = document.createElement('ul');
  const fragment = document.createDocumentFragment();
  animals.forEach((animal) => {
    fragment.appendChild(renderListItem(animal));
  });
  list.appendChild(fragment);
}
