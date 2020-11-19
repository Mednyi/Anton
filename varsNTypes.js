// Variables
// Defining variables
var a; // define variable in global scope. Obsolete, adds a to window object
let b; // define local variable b
const c = 10; // define constant variable c
// Variables initialization
b = 100;

// Variable types
// Each primitive type has its own allocation size in memory
// Each type has its own literal
// Primitive types
// Number
let num = 100; // 100 - literal of Number type, num - variable of type Number
num = -100;
num = 10.10;
// Boolean
let bool = true; //Logical type. Literals of Boolean : true(1) or false(0)
// String
let str = 'Hello world'; // '<content>' "<content>" `<content>` - string literals
let interpolated = `The price is ${num}`; // String interpolation
// Undefined
let undef = undefined // Default value for all the non-initialized variables
// Non-primitive types (Composite types)
// Object
const obj = {  // obj will contain link to block of memory which contains object {a:10}
    a: 10
}
const arr = [1,2,3,4,6];
// Function
const func = function(x) {return x**2}; // func will contain link to block of memory, which contains procedure
// BigInt
const bignumber = 123n;
