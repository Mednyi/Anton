// 1 Создать объект, который описывает ширину и высоту прямоугольника, а также может посчитать площадь фигуры: const rectangle = { width:..., height:..., getSquare:...};

const rectangle = {
  width: 100,
  height: 200,
  getSquare() {
    return this.width * this.height;
  }
}

// 2 Создать объект, у которого будет цена товара и его скидка, а также два метода: для получения цены и для расчета цены с учетом скидки:

const price = {
  price: 10,
  discount: '15%',
  getPrice() {
    return this.price;
  },
  getPriceWithDiscount() {
    const discount = parseFloat(this.discount);
    const priceWithDiscount = this.price - (this.price *(discount / 100));

    return priceWithDiscount;
  }
}

//  3  Создать объект, у которого будет поле высота и метод “увеличить высоту на один”. Метод должен возвращать новую высоту:

const obj = {
  height: 10,
  increaseHeight() {
    this.height += 1;
    return this.height;
  }
}

// 4 Создать объект “вычислитель”, у которого есть числовое свойство “значение” и методы “удвоить”, “прибавить один”, “отнять один”. Методы можно вызывать через точку, образуя цепочку методов:

const counter = {
  value: 1,
  double() {
    this.value *= 2;
    return this;
  },
  plusOne() {
    this.value += 1;
    return this;
  },
  minusOne() {
    this.value -= 1;
    return this; 
  }
}

// 5 Создать объект с розничной ценой и количеством продуктов. Этот объект должен содержать метод для получения общей стоимости всех товаров(цена * количество продуктов)
