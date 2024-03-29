//Object example
const tank = {
    ammo: 100, // property
    armor: 100,
    fire () { // method
        this.ammo--;
    }
};
// Functions
// Function declaration
/**
 * add - function name
 * @param a - function argument
 * @param b - function argument
 * ..... as much arguments as needed
 * @returns {*} - function returns a value, function may not return anything
 *
 * function <function name> (arg1, arg2, ...) {
 *     <function body>
 *     [return <value>]
 * }
 * function declaration is available from any point of code (it is "lifted" up as a variable declared by var)
 * function declaration will be set as the method of the "global" object - window
 */
function add (a, b) {
    return a+b;
}

// function expression
/**
 * function expression is available only after its declaration
 * addExpression - function expression
 * @param a
 * @param b
 * @returns {*}
 */
const addExpression = function (a, b) {
    return a+b;
};

// arrow function expression
const addExpressionArrow = (a, b) => {
    return a + b;
};
const addExpressionArrow1 = (a, b) => a + b;
const addExpressionArrowobj = (a, b) => {
    return {
        a, // equivalents a: a
        b  // equivalents b: b
    };
};
const addExpressionArrowobj2 = (a, b) => ({a, b}); // returns object {a:a, b:b}

// Function invocation
// <function name>(<argument list>);
const returnedValue = addExpression(10,10); // will return 20

// IIFE
// Immediately invoked function expression
// (<function>)()
const result = (function (a, b) {
    if(a > b) { // a and be will be caught from upper level of lexical environment
        return a + b;
    } else {
        return a * b;
    }
})();
;(function (a, b) {
    return a+b;
})();

// Context (this) always equals to Object which has invoked the function


const person = {
    name: 'Anton',
    age: 39,
    isMarried: false
};

console.log(person.name);
person.job = 'No job';

console.log(person.job);