// Объекты

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}

const summariseSalary = (obj) => {
    return Object.values(obj).reduce((acc, item) => acc + item, 0);
}

// 2

let menu = {
    width: 200,
    height: 300,
    title: "My menu"
}

const multiplyNumeric = (obj) => {
   Object.keys(obj).forEach(element => {
       if (typeof obj[element] === 'number') {
         obj[element] *= 2; 
       }
   });
}

multiplyNumeric(menu);

// 3

const ladder = {
    step: 0,
    up() {
        step += 1;
    },
    down() {
        this.step -= 1;
    },
    showStep() {
        console.log(this.step)
    }
}
