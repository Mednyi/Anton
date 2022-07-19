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

const prod = {
  price: 100,
  count: 50,
  getOverAll() {
    return this.price * this.count;
  }
}

// 6 Создать объект из предыдущей задачи. Создать второй объект, который описывает количество деталей и цену за одну деталь. Для второго объекта нужно узнать общую стоимость всех деталей, но нельзя создавать новые функции и методы. Для этого “позаимствуйте” метод из предыдущего объекта.

const prod2 = {
  price: 100,
  count: 50,
  getOverAll() {
    return this.price * this.count;
  }
}

const detail = {
  price: 150,
  count: 40
}

prod.getOverAll.call(detail);


// 7 Даны объект и функция: Не изменяя функцию или объект, получить результат функции getSquare для объекта sizes

let sizes = { width: 5, height: 10 },

getSquare = function () { return this.width * this.height };

getSquare.call(sizes);


// 8 Измените функцию getElementHeight таким образом, чтобы можно было вызвать getElementHeight() и получить 25.

let element = {
  height: 25,

  getHeight: function () { return this.height; }

};



let getElementHeight = element.getHeight.bind(element);

getElementHeight(); // undefined