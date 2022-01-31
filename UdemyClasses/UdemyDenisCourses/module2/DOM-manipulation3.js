//
/* <div>
    <article>
      <p>Lorem ipsum dolor sit amet, odio omnesque ius cu, quo ex atqui antiopam. At detracto menandri eos. Duo in causae viderer, graeci <a href="#">reprehendunt</a> has in. Decore <mark>nemore</mark> philosophia te pro, nobis legere causae ex mei, odio putant mentitum ea ius. Vix nostro deserunt explicari eu.</p>
    </article>
  </div>
  <ul>
    <li><a href="#">Link1</a></li>
    <li><a href="#">Link2</a></li>
    <li><a href="#">Link3</a></li>
    <li><a href="#">Link4</a></li>
  </ul><span></span>
  <a href="#">Some link</a> */
// Вопросы к этому заданию
// Не используя innerHTML, добавить в список несколько li с классом ‘new-item’ и текстом ‘item’ + номер li:
// <ul>
// <li><a href="#">Link1</a></li>
// ..
// <li class=”new-item”>item 5</li>
// <li class=”new-item”>item 6</li>
// </ul>

// 1 Вручную номер li не ставить оно должно подставляться в зависимости от кол-ва лишек в списке.

// 2 В каждую ссылку, которая находятся внутри списка ul добавить по тегу strong (в каждую ссылку один - strong).

// 3 В начало документа (в начало body) добавить картинку img с атрибутами src и alt (текст придумайте сами). В src добавьте реальный url к картинке. Для создания элемента используйте метод createElement.

// 4 Найти на странице элемент mark, добавить в конец содержимого текст “green” и на элемент установить класс green

// 5 Отсортировать li внутри списка в обратном порядке (по тексту внутри)

// ------------------------------------

// 1
const ul = document.querySelector('ul')

function createListItem() {
  // Текущее количество элементов в списке
  const currentCounts = list.children.length
  // Количество новых элементов
  const newLiCounts = 3

  for (let i = 0; i < newLiCounts; i++) {
    const li = document.createElement('li')
    li.classList.add('new-item')
  }

  li.textContent = `item ${currentCounts + i + 1}`
  ul.appendChild(li)
}

// Текущее количество элементов в списке
const currentCounts = list.children.length
// Количество новых элементов
const newLiCounts = 3

for (let i = 0; i < newLiCounts; i++) {
  let li = document.createElement('li')
  li.classList.add('new-item')
  li.textContent = `item ${currentCounts + i + 1}`
  list.appendChild(li)
}

// 2
const [...links] = document.querySelectorAll('ul a')
links.forEach((link) =>
  link.insertAdjacentHTML('beforeend', '<strong>Strong</strong>'),
)

// 3
const img = document.createElement('img')
img.setAttribute('src', 'https://via.placeholder.com/150/92c952')
img.setAttribute('alt', 'some image')
document.body.insertAdjacentHTML('afterbegin', img)

// 4
const mark = document.querySelector('mark')
mark.insertAdjacentText('beforeend', 'green')
mark.classList.add('green')

// 5
const [...items] = document.querySelector('ul li')
items.sort((a, b) => b - a)

const ul = document.querySelector('ul')

const listItems = [...ul.children].sort((a, b) => {
  return a.textContent - b.textContent ? -1 : 1
})

// Очищаем текущее содержимое списка
list.innerHTML = ''
// Генерируем новое содержимое из отсортированного массива элементов
listItems.forEach((item) => list.appendChild(item))
