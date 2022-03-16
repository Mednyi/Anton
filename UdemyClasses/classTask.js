// Создайте класс Temperature, который:
// - в конструкторе принимает число в градусах цельсия
// - Может предоставлять информацию о градусах как в  Цельсиях(клюс celsius), так и в
// Фаренгейтах(ключ fahrenheit)
// - для экземпляра класса позволяет изменять информацию класса, как по ключу
// celsius, так и по ключу fahrenheit
// - содержит статический метод fromFahrenheit для создания экземпляра с автоматически
// пересчитанным значением в Цельсиях

class Temperature {
    constructor(celsius) {
        this.celsius = celsius;
    }

    get fahrenheit() {
        return this.celsius * 1.8 + 32;
    }

    set fahrenheit(value) {
        this.celsius = (value - 32) / 1.8;
    }

    static fromFahrenheit(value) {
        return new Temperature(Math.round((value - 32) / 1.8));
    }
}