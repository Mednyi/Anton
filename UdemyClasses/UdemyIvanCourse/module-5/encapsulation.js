'use strict';

// getter and setter

const human = {
    name: 'Ivan',
    age: 32,

    get humanAge() {
        return this.age;
    },

    set humanAge(num) {
        this.age = num;
    }
}

human.humanAge;

class User {
    constructor(name, age) {
        this.name = name;
        this._age = age;
    }

    #surname = 'Petrychenko';

    say = () => {
        console.log(`Имя пользователя: ${this.name} ${this.#surname}, возраст ${this._age}`);
    }

    get age() {
        return this._age;
    }

    set age(age) {
        if (typeof age === 'number' && age > 0 && age < 110) {
            this._age = age;
        } else {
            console.log('Недопустимое значение!');
        }
    }
}

const ivan = new User('Ivan', 27);
