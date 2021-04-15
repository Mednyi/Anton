/////////////////////////////////////////
// Complex Data Types - Objects Part 2 //
/////////////////////////////////////////

// Objects: describe a peice of data in depth
const larry = {
    name: "larry",
    age: 20,
    friends: ["john", "lisa", "al"],
    isPetOwner: true,
    greeting: "Hello Friend!",
    sayGreeting: function(){
        console.log(this.greeting)
    }
}

const german = {
    name: "german",
    age: 38,
    friends: ['john', 'alice', 'ron'],
    isPetOwner: true;
    greeting: "Hello Friends!",
    sayGreeting: () => {
        console.log(this.greeting)
    }
}

const car = {
    model: "honda",
    wheels: 4,
    honkSound: "beerp",
    registeredDrivers: ['jane', 'john'],
    hasHadAccident: false,
    honk: function(){
        console.log(this.honkSound)
    }
}

// console.log(car.model)
// console.log(car["wheels"])
car.honk()

// console.log(larry.name)
larry.sayGreeting()

// dot notation
// larry.age

// bracket notation
// larry["age"]

// Functions & Methods
    // Function: a type of data that allows us to execute specific code when/as needed
        // login
    // Method: A function that is a property of an object
    
// this keyword inside of an object refers to itself

//Object example
const tank = {
    ammo: 100, // property
    armor: 100,
    fire () { // method
        this.ammo--;
    }
};
// How to produce objects?
// object factory
/**
 * tankFactory - produces and returns one tank
 * @param ammo - tank ammo
 * @param armor - tank armor
 * @returns {{ammo, armor}}
 */
const tankFactory = (ammo, armor) => ({
    ammo,
    armor
});
/**
 * tanksFactory - function to create any amount of tanks
 * @param count - count of tanks
 * @returns {[]} - array of created tanks
 */
const tanksFactory = (count) => {
    const tanks = [];
    for(let i = 0; i < count; i++) {
        const ammo = Math.floor(Math.random() * 99 + 1);
        const armor = Math.floor(Math.random() * 99 + 1);
        tanks.push(tankFactory(ammo, armor));
    }
    return tanks;
};
// Constructor function
const Tank = function(ammo, armor) {
    this.ammo = ammo;
    this.armor = armor;
    this.fire = function () {
        this.ammo--;
    };
};
const newTank = new Tank(100,200);
// 'new' works next way:
// 1. It creates new empty object {} let's call it emptyObj
// 2. It calls constructor function in the context of newly created object
//    emptyObj.Tank(100, 200)
// 3. returns newly created object to newTank

// Classes
// Class declaration
class Automobile {
    constructor(maxSpeed = 100, maxFuel = 100) {
        this.maxSpeed = maxSpeed;
        this.maxFuel = maxFuel;
    }
}
