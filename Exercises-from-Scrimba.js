'use strict';

//loops and arrays part 2

//Challenge: you are working at a very fancy new nightclub and in charge of letting people in based on their age. If they are not 21 years of age, you cannot let them in. Please send them a nice personalised message letting them know.

//Dont forget to share your code on the #share-your-code channel on discord.

const nightClubRegister = [
    {
        name: 'Ahmed',
        lastname: 'Abdool',
        age: 25,
        gender: 'male'
    },
    {
        name: 'Sally',
        lastname: 'Morgan',
        age: 18,
        gender: 'female'
    },
    {
        name: 'Dionne',
        lastname: 'Brown',
        age: 29,
        gender: 'female'
    },
    {
        name: 'Max',
        lastname: 'Forrester',
        age: 20,
        gender: 'male'
    }
]

for (let i = 0; i < nightClubRegister.length; i++) {
    if (nightClubRegister[i].age < 21) {
        if (nightClubRegister[i].gender === 'male') {
            console.log('Sorry Mr ' + nightClubRegister[i].lastname + ', you are not old enough to attend');
        }
        if (nightClubRegister[i].gender === 'female') {
            console.log('Sorry Mrs/Miss ' + nightClubRegister[i].lastname + ', you are not old enough to attend');
        }
    }
    if (nightClubRegister[i].age >= 21) {
        if (nightClubRegister[i].gender === 'male') {
            console.log('Welcome Mr ' + nightClubRegister[i].lastname + ', you are on the list!');
        }
        if (nightClubRegister[i].gender === 'female') {
            console.log('Welcome Mrs/Miss ' + nightClubRegister[i].lastname + ', you are on the list!');
        }
    }
}

//nested loops

//Using nested loops to print out addresses on a street. We need to print out the building number, then the flat number. Each building has exactly 3 flats in it.

const buildings = 4

for (let i =0; i < buildings; i++) {
    console.log('building ' + (i +1))
    for (let j=0; j < 3; j++) {
        console.log('building ' + (i +1) + ' flat ' + (j +1))
    }
}


// Functions

const quoteDisplay = document.querySelector('#quote');
const button = document.querySelector('button');

//Challenge: Write a function that will display a random Inspirational Quote
//from the quotes array, when the button is pressed.
const quotes = [
    'Do something today that your future self will thankyou for',
    'Dont worry, be happy!',
    'Your limitation is only your imagination'
]

function showQuote() {
    //your code
    let randomNumber = Math.floor(Math.random() * quotes.length);
    let randomQuote = quotes[randomNumber];
    quoteDisplay.innerHTML = randomQuote;
}

button.addEventListener('click', showQuote);