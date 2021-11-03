'use strict'

//loops and arrays part 2

//Challenge: you are working at a very fancy new nightclub and in charge of letting people in based
//  on their age. If they are not 21 years of age, you cannot let them in. Please send them a nice
//  personalised message letting them know.

//Dont forget to share your code on the #share-your-code channel on discord.

const nightClubRegister = [
  {
    name: 'Ahmed',
    lastname: 'Abdool',
    age: 25,
    gender: 'male',
  },
  {
    name: 'Sally',
    lastname: 'Morgan',
    age: 18,
    gender: 'female',
  },
  {
    name: 'Dionne',
    lastname: 'Brown',
    age: 29,
    gender: 'female',
  },
  {
    name: 'Max',
    lastname: 'Forrester',
    age: 20,
    gender: 'male',
  },
]

for (let i = 0; i < nightClubRegister.length; i++) {
  if (nightClubRegister[i].age < 21) {
    if (nightClubRegister[i].gender === 'male') {
      console.log(
        'Sorry Mr ' +
          nightClubRegister[i].lastname +
          ', you are not old enough to attend',
      )
    }
    if (nightClubRegister[i].gender === 'female') {
      console.log(
        'Sorry Mrs/Miss ' +
          nightClubRegister[i].lastname +
          ', you are not old enough to attend',
      )
    }
  }
  if (nightClubRegister[i].age >= 21) {
    if (nightClubRegister[i].gender === 'male') {
      console.log(
        'Welcome Mr ' +
          nightClubRegister[i].lastname +
          ', you are on the list!',
      )
    }
    if (nightClubRegister[i].gender === 'female') {
      console.log(
        'Welcome Mrs/Miss ' +
          nightClubRegister[i].lastname +
          ', you are on the list!',
      )
    }
  }
}

//nested loops

//Using nested loops to print out addresses on a street. We need to print out the building number,
//  then the flat number. Each building has exactly 3 flats in it.

const buildings = 4

for (let i = 0; i < buildings; i++) {
  console.log('building ' + (i + 1))
  for (let j = 0; j < 3; j++) {
    console.log('building ' + (i + 1) + ' flat ' + (j + 1))
  }
}

// Functions

const quoteDisplay = document.querySelector('#quote')
const button = document.querySelector('button')

//Challenge: Write a function that will display a random Inspirational Quote
//from the quotes array, when the button is pressed.
const quotes = [
  'Do something today that your future self will thankyou for',
  'Dont worry, be happy!',
  'Your limitation is only your imagination',
]

function showQuote() {
  //your code
  let randomNumber = Math.floor(Math.random() * quotes.length)
  let randomQuote = quotes[randomNumber]
  quoteDisplay.innerHTML = randomQuote
}

button.addEventListener('click', showQuote)

// Destructuring object

//     **** Challenge ****

//     For this challenge destruture the following object.
// */

const student = {
  name: 'Kyle',
  age: 24,
  projects: {
    diceGame: 'Two player dice game using JavaScript',
  },
}

const {name, age, projects: { diceGame },} = student

// Challenge - For Of Loop

// Using the For of Loop, iterate through the array and print into the console, a message like:
// Tom lives in Lisbon

const students = [
  { name: 'John', city: 'New York' },
  { name: 'Peter', city: 'Paris' },
  { name: 'Kate', city: 'Sidney' },
]

for (student of students) {
  console.log(`${students.name} + lives in ${students.city}`)
}

/*
    **** Challenge ****
    
    Imagine you are going out to do some grocery shopping.
    So you have an array called shoppingList with all the products you want to buy.
    
    Now that you are inside of the shop, you have a basket with all the products from your list, but you want to add a few more.
    
    Create a new array called shoppingBasket, that will be a copy of the shoppingList array, and add some new products into it. 

*/

const shoppingList = ['eggs', 'milk', 'butter']

const shoppingBasket = [...shoppingList, 'potato', 'salad']

// **Classes Challenge**:

// Create a class Player with the following:
// - Add a Name and Country properties
// - Add a function that when it runs should print into the console ("Messi was born in Argentina");
// - Make sure to adapt this function to receive dynamic Names and Clubs.

// Create a Subclass called TennisPlayer that extends from the class Player
// - Add a new property Age.
// - Add a function that when it runs should print into the console something similar ("Rafael Nadal is 34 years old and knows how to play Tennis");
// - Make sure the Name and Age are dynamic.

class Player {
  constructor(name, country) {
    this.name = name
    this.country = country
  }

  introduce() {
    console.log(`${this.name} was born in ${this.country}`)
  }

  get metaData() {
    console.log(`${this.name} was born in ${this.country}`)
  }
}

const messi = new Player('Messi', 'Argentina')

class TennisPlayer extends Player {
  constructor(name, country, age) {
    super(name, country)
    this.age = age
  }

  playTennis() {
    console.log(
      `${this.name} is ${this.age} years old and knows how to play ${this.game}`,
    )
  }
}

const roger = new TennisPlayer('Roger Federer', 'Spain', 38)

roger.introduce()
roger.playTennis()
