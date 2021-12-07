const myTraining = document.querySelector('.button__training')
myTraining.addEventlistener('click', buttonClose())

buttonClose.addEventlistener = function () {
  closeBigPicture()
  document.removeEventListener('click')
}

// Создаю ДОМ элементы в ручную

const renderListItem = function (element) {
  const listItem = document.createElement('li')
  const image = document.createElement('img')
  const text = document.createElement('p')
  listItem.appendChild(image)
  listItem.appendChild(text)
  image.src = element.url
  text.textContent = element.text
  return listItem
}

const renderList = function (animals) {
  const list = document.createElement('ul')
  const fragment = document.createDocumentFragment()
  animals.forEach((animal) => {
    fragment.appendChild(renderListItem(animal))
  })
  list.appendChild(fragment)
}

console.log(renderList) //?

// Мультивставка: insertAdjacentHTML и DocumentFragment

// Отсортировать таблицу
// Есть таблица:

// Имя	Фамилия	Отчество	Возраст
// Вася	Петров	Александрович	10
// Петя	Иванов	Петрович	15
// Владимир	Ленин	Ильич	9
// ...	...	...	...
// Строк в таблице много: может быть 20, 50, 100… Есть и другие элементы в документе.

// Как бы вы предложили отсортировать содержимое таблицы по полю Возраст? Обдумайте алгоритм, реализуйте его.

// Как сделать, чтобы сортировка работала как можно быстрее? А если в таблице 10000 строк (бывает и такое)?

// P.S. Может ли здесь помочь DocumentFragment?

// P.P.S. Если предположить, что у нас заранее есть массив данных для таблицы в JavaScript – что быстрее: отсортировать эту таблицу или сгенерировать новую?

function makeTable() {
  var tableHolder = document.getElementById('table-holder');

  var contents = '<thead><th>Имя</th><th>Фамилия</th><th>Отчество</th><th>Возраст</th></thead>';
  contents += '<tbody>';
  for (var i = 0; i < 100; i++) {
    contents += "<tr><td> ... </td><td>Разные</td><td>Данные</td><td>" + ((i + 50) % 30) + "</td></tr>";
  }
  contents += '</tbody>';

  tableHolder.innerHTML = '<table>' + contents + '</table>';
}

/* перенести элементы в массив, отсортировать его и перевставить */
function sort1() {
  var tbody = document.getElementsByTagName('tbody')[0];
  var rows = [];

  for (var i = tbody.children.length - 1; i >= 0; i--) {
    var child = tbody.removeChild(tbody.children[i]);
    rows.push(child);
  }

  rows.sort(function(a, b) {
    return a.lastChild.innerHTML - b.lastChild.innerHTML;
  })

  for (var i = 0; i < rows.length; i++) {
    tbody.appendChild(rows[i]);
  }

};

/* скопировать ссылки в массив, отсортировать его и перевставить */
function sort2() {
  var tbody = document.getElementsByTagName('tbody')[0];
  var rows = [];

  for (var i = 0; i < tbody.children.length; i++) {
    rows.push(tbody.children[i]);
  }

  rows.sort(function(a, b) {
    return a.lastChild.innerHTML - b.lastChild.innerHTML;
  })

  for (var i = 0; i < rows.length; i++) {
    tbody.appendChild(rows[i]);
  }

};

  /* создать массив из значений и ссылок, отсортировать, перевставить
    doRemove = предварительно вынуть из документа
  */
function sortOpt(doRemove) {
  var tbody = document.getElementsByTagName('tbody')[0];
  var table = tbody.parentNode;
  if (doRemove) table.removeChild(tbody);

  var rows = [];
  for (var i = 0; i < tbody.children.length; i++) {
    var elem = tbody.children[i];
    rows.push({
      value: elem.lastChild.innerHTML,
      elem: elem
    });
  }

  rows.sort(function(a, b) {
    return a.value - b.value;
  });

  for (var i = 0; i < rows.length; i++) {
    tbody.appendChild(rows[i].elem);
  }

  if (doRemove) table.appendChild(tbody);
};

function bench(f, elem) {
  var sum = 0;
  for (var i = 0; i < 100; i++) {
    makeTable();
    var d = new Date;
    f();
    sum += new Date - d;
  }
  elem.innerHTML = sum + 'мс';
};

function benchMake(elem) {
  var sum = 0;
  for (var i = 0; i < 100; i++) {
    var d = new Date;
    makeTable();
    sum += new Date - d;
  }
  elem.innerHTML = sum + 'мс';
};


