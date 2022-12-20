'use strict';

const box = document.querySelector('.box');

let observer1 = new MutationObserver(mutationRecords => {
  console.log(mutationRecords);
});

observer1.observe(box, {
  childList: true
});

// To stop observing

observer1.disconnect();


// Пример динамической подсветки синтаксиса
// Вот работающий пример.

// Если вы запустите этот код, он начнёт наблюдать за элементом ниже, подсвечивая код любого примера, который появляется там:

let observer = new MutationObserver(mutations => {

  for(let mutation of mutations) {
    // проверим новые узлы, есть ли что-то, что надо подсветить?

    for(let node of mutation.addedNodes) {
      // отслеживаем только узлы-элементы, другие (текстовые) пропускаем
      if (!(node instanceof HTMLElement)) continue;

      // проверить, не является ли вставленный элемент примером кода
      if (node.matches('pre[class*="language-"]')) {
        Prism.highlightElement(node);
      }

      // или, может быть, пример кода есть в его поддереве?
      for(let elem of node.querySelectorAll('pre[class*="language-"]')) {
        Prism.highlightElement(elem);
      }
    }
  }

});

let demoElem = document.getElementById('highlight-demo');

observer.observe(demoElem, {childList: true, subtree: true});

// динамически вставить содержимое как фрагменты кода
demoElem.innerHTML = `Фрагмент кода ниже:
  <pre class="language-javascript"><code> let hello = "world!"; </code></pre>
  <div>Ещё один:</div>
  <div>
    <pre class="language-css"><code>.class { margin: 5px; } </code></pre>
  </div>
`;