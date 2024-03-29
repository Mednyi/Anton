'use script'

/*
  Динамичуески создать N элементов с текстом и поле для поиска.
  При вводе вполе, выделять элементы, которые содержат введённый текст.
*/

const wrapper = document.querySelector('.wrapper');

for (let i = 0; i < 100; i++) {
  const el = document.createElement('div');
  el.innerHTML = i;
  el.style.color = 'blue';
  el.style.textAlign = 'center';
  wrapper.append(el);
}

function search(event) {
  const inputValue = event.target.value;

  for (const el of [...wrapper.children]) {
    if (el.innerHTML.includes(inputValue)) {
      el.classList.add('yellow');
      continue;
    }
    el.classList.remove('yellow');
  }
}