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
