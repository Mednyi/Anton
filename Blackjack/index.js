let cards = []
let sum = 0
let hasBlackJack = true
let isAlive = false
let message = ''
const messageEl = document.getElementById('message-el')
let sumEl = document.getElementById('sum-el')
let cardsEl = document.getElementById('cards-el')
let playerEl = document.getElementById('player-el')

let player = {
  name: 'Anton',
  chips: 145,
}

playerEl.textContent = player.name + ': $' + player.chips

console.log(cards)

function getRandomCard() {
  let randomNumber = Math.floor(Math.random() * 13) + 1
  if (randomNumber > 10) {
    return 10
  } else if (randomNumber === 1) {
    return 11
  } else {
    return randomNumber
  }
}

function startGame() {
  isAlive = true
  let firstCard = getRandomCard()
  let secondCard = getRandomCard()
  cards = [firstCard, secondCard]
  sum = firstCard + secondCard

  rendertGame()
}

function rendertGame() {
  cardsEl.textContent = 'Cards: '

  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + ' '
  }

  sumEl.textContent = 'Sum: ' + sum

  if (sum <= 20) {
    message = 'Do you want to draw a new card?'
  } else if (sum === 21) {
    message = "You've got Blackjack!"
    hasBlackJack = true
  } else {
    message = "You're out of the game!"
    isAlive = false
  }
  messageEl.textContent = message
}

function newCard() {
  if (isAlive === true && hasBlackJack === false) {
    console.log(123)
    // 1. Create a card variable, and hard code its value to a number (2-11)
    let card = getRandomCard()
    // 2. Add the new card to the sum variable
    sum += card
    // 3. Call startGame()
    cards.push(card)
    rendertGame()
  }
}
