//

/* <button id="btn-msg" data-text=”Custom message”>Show message</button>
<button id="btn-generate">Generate item</button>
<p><strong id="tag">Tag:</strong></p>
<ul>
    <li>Item 1</li>
    <li>Item 2</li>
</ul> */
// Вопросы к этому заданию
// 1 По нажатию на кнопку "btn-msg" должен появиться алерт с тем текстом который находится в атрибуте data-text у кнопки.

// 2 При наведении указателя мыши на "btn-msg", кнопка становится красной; когда указатель мыши покидает кнопку, она становится прежнего цвета. Цвет менять можно через добавление класса.

// 3 При нажатии на любой узел документа показать в элементе с id=tag имя тега нажатого элемента.

// 4 При нажатии на кнопку btn-generate добавлять в список ul элемент списка Li с текстом Item + порядковый номер Li по списку, т.е Item 3, Item 4 и т.д

// --------------------

// 1
const btn1 = document.querySelector('#btn-msg');

function clickHandler(e) {
  alert(e.currentTarget.text);
}

btn1.addEventListener('click', clickHandler);

// teacher's way of solving

const btn2 = document.getElementById('btn-msg');
btn2.addEventListener('click', (e) => {
  //   alert(e.target.dataset.text);
  // или если элемент один можно обратится к нему
  //   alert(btn.dataset.text);
  // так же внутри обработчика события через this мы имеем доступ к элементу на который повешено событие
  //   alert(this.dataset.text);
  // или через currentTarget
  alert(e.currentTarget.dataset.text);
});

// 2
const btn = document.getElementById('btn-msg');
// У событий mouseover и mouseout есть аналоги mouseenter/mouseleave
btn.addEventListener('mouseover', (e) => {
  btn.classList.add('bg-red');
});
btn.addEventListener('mouseout', (e) => {
  btn.classList.remove('bg-red');
});

// 3
const tag = document.querySelector('#tag');

document.body.addEventListener('click', (e) => {
  tag.textContent = `Tag: ${e.target.nodeName}`;
});

// 4
const btnGenerate = document.querySelector('#btn-generate');
const ul = document.querySelector('ul');

function generateNewItem(e) {
  // get current position of item list
  const num = ul.children.length + 1;
  const text = `Item ${num}`;
  const li = document.createElement('li');
  li.textContent = text;

  ul.appendChild(li);
}

btn.addEventListener('click', generateNewItem);
