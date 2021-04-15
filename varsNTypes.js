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

//////////////////
// Conditionals //
//////////////////

// How we ask our program a question about our data and then run a specific set of code depending on the answer.

// var color = "yellow"

// if(color === "red"){
//     console.log("It is red!")
// } else if(color === "yellow"){
//     console.log("It is yellow!")
// } else if(color === "black"){
//     console.log("It is black!")
// } else {
//     console.log("The color is not red or yellow")
// }

var username = 'rick123'
var password = 'aL8#klfo'

if(username !== 'rick123'){
    console.log('username is incorrect')
} else if(password !== 'aL8#klfo'){
    console.log("password is incorrect")
} else {
    console.log("Access Granted")
}

/////////////////////
// Logic Operators //
/////////////////////

// Another category in the operator family

// 3 main logic operators

var username = "joe"
var password = "joe123"

// And
// &&
if(username === "jo" && password === "joe123"){
    console.log("Access granted")
} else {
    console.log("Username or password are incorrect")
}

// Or
// ||
if(!username || !password){
    console.log("Please provide username and password")
} else {
    console.log("Both were provided")
}

if(!username || !password){
    console.log("Please provide username and password")
} else {
    if(username === "joe" && password === "joe123"){
        console.log("Access granted")
    } else {
        console.log("Username or password are incorrect")
    }
}


// Negation
// !


/////////////////////
// Truthy & Falsey //
/////////////////////

// All data in javascript have an inherently Truthy or Falsey value.

// true false
// "dave"



// Falsey Values
 // 0
 // ""
 // null
 // undefined
 // false
 // NaN
 
 var user = {
    name: "DAVE",
    email: null,
    friends: ["rick", "sarah"],
    address: {
        street: "123 street",
        city: "gotham"
    },
    id: 0,
    nickname: undefined
}

// if(user.name){
//     console.log("It is true!")
// } else {
//     console.log("It is false!")
// }

console.log(user.name === true)