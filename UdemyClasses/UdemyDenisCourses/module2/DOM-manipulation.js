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
//     Вопросы к этому заданию
//  1   Найти параграф и получить его текстовое содержимое (только текст!)

//  2   Создать функцию, которая принимает в качестве аргумента узел DOM и возвращает информацию (в виде объекта) о типе узла, об имени узла и о количестве дочерних узлов (если детей нет - 0).

//  3 Получить массив, который состоит из текстового содержимого ссылок внутри списка: getTextFromUl(ul) ---> ["Link1", "Link2", "Link3"]

//  4   В параграфе заменить все дочерние текстовые узлы на “-text-” (вложенные теги должны остаться). Конечный результат:

//     -text-<a href="#">reprehendunt</a>-text-<mark>nemore</mark>-text-

// 1
const paragraph = document.querySelector('p')
paragraph.textContent

// 2
function getNodeInfo(node) {
  if (!node instanceof Element) return

  return {
    nodeType: node.nodeType,
    tagName: node.tagName,
    childNode: node.childNode.length,
  }
}

// 3
const list = document.querySelector('ul')

function getTextFromUl(ul) {
  if (!(ul instanceof HTMLElement)) return
  const [...links] = ul.querySelectorAll('a') || []
  return links.map((a) => a.textContent)
}

// 4
const [...pChildNodes] = document.querySelector('p').childNodes
pChildNodes.forEach((child) => {
  if (child.nodeType === 3) {
    child.textContent = '-text-'
  }
})
