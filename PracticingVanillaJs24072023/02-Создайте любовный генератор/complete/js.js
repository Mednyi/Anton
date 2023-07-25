const firstName = prompt("Напишите первое имя"),
    secondName = prompt("Напишите второе имя")

const randomNumber = (Math.floor(Math.random() * 100))

if (randomNumber < 33) {
    alert(`Результат совместимости имен ${firstName} и ${secondName} равен ${randomNumber} вам нужно поискать человека с другим именем`);
} else if (randomNumber >= 33 && randomNumber < 66) {
    alert(`Результат совместимости имен ${firstName} и ${secondName} равен ${randomNumber} Совместимость хорошая, но можно лучше`);
} else if (randomNumber >= 66) {
    alert(`Результат совместимости имен ${firstName} и ${secondName} равен ${randomNumber} Вы идеально подходите друг другу`);
} else {
    alert('Упс.... Какое то странное число');
}

let height = 0;
let width = 2;

console.log(height || width);
console.log(height ?? width);

// function fn1() {
//     function fn2() {
//         const a = 3;

//         console.log(a);
//     }

//     fn2();
// }

// console.log(fn1());


function ask(question, yes, no) {
    if (confirm(question)) {
        yes();
    } else {
        no();
    }
}

function showOk() {
    alert('Thanks for your confirmation');
}

function showNo() {
    alert('There is wankers answer');
}

// ask('Do you agree?', showOk, showNo);

ask('Do you agree', () => { console.log() }, () => { console.log() })

// arrow function

let sum = (a, b) => a + b;

console.log(sum(12, 3))
