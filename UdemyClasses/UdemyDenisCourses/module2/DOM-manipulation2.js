// <!DOCTYPE html>
{
  /* <html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <div>
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
  <a href="#">Some link</a>
</body>
</html> */
}
// Вопросы к этому заданию
// 1 Найти в коде список ul и добавить класс “list”

// 2 Найти в коде ссылку, находящуюся после списка ul, и добавить id=link

// 3 На li через один (начиная с самого первого) установить класс “item”

// 4 На все ссылки в примере установить класс “custom-link”

// ----------------------------

// 1
const ul = documnet.querySelector('ul')
ul.classList.add('list')

// 2
const link = ul.nextElementSibling
link.setAttribute('id', 'link')

//  Два решения. Первое через селектор ~. Второе через цикл while.
// 2.1
const link = document.querySelector('ul ~ a')
link.id = 'link'
console.log(link)

const list = document.querySelector('ul')
// Будущая ссылка
let link
// Следующий элемент после списка, стартовая точка.
let nextElement = list.nextElementSibling
// Проверяем пока не найдена ссылка или больше не осталось следующих элементов мы выполняем данный цикл.
while (!link || !nextElement) {
  // Если больше нет следующего элемента мы останавливаем цикл
  if (!nextElement) break
  // Если у следующего элемента тег ссылка то мы записываем ее в переменную
  if (nextElement.tagName === 'A') {
    link = nextElement
  }
  // записываем следующий элемент
  nextElement = nextElement.nextElementSibling
}

// 3
const [...liN2] = document.querySelectorAll('li:nth-child(odd)')
liN2.forEach((li) => li.classList.add('item'))

const [...allLi] = document.querySelectorAll('li')
allLi.forEach((li, index) => {
  if (!(index % 2)) {
    li.classList.add('item')
  }
})

// 4
const [...links] = document.links
links.forEach((link) => link.classList.add('custom-link'))
