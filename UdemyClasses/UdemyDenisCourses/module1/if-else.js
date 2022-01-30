let item = { name: 'Intel core i7', price: '100$', discount: '15%' };

const price = parseInt(item.price);
const discount = parseInt(item.discount);

// my way to solve
if (item.hasOwnProperty('discount') && item.discount !== NaN && item.price !== NaN) {
  item.priceWithDiscount = (item.price.parseInt() * item.discount.parseInt()) / 100;
} else {
  console.log(item.price);
}

// 2

if (!isNaN(price) && !isNaN(discount)) {
  const priceWithDiscount = price - (price * (discount / 100));
  console.log(priceWithDiscount);
} else {
  console.log(price);
}

// Написать условие если у item есть поле discount и там есть значение которое не NaN а также есть поле price значение которого также не NaN то в объекте item создать поле priceWithDiscount и записать туда цену с учетом скидки и вывести ее в консоль, обратите внимание что поля discount и price это строки и вам из них нужно получить числа чтобы выполнить расчет.иначе если поля discount нет то вывести просто поле price в консоль.
console.table(item);
