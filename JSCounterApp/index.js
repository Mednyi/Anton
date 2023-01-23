let count = 0;

let countText = document.getElementById('count');
const plus = document.getElementById('add');
const minus = document.getElementById('minus');

countText.textContent = count;

plus.addEventListener('click', () => {
  if (count >= 11) return;

  count++;
  countText.textContent = count;
});

minus.addEventListener('click', () => {
  if (count === 0) return;

  count--;
  countText.textContent = count;
});

console.log("Helllooo");