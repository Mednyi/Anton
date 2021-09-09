const grid = document.querySelector('.grid')
const startButton = document.querySelector('#start')
const scoreDisplay = document.querySelector('#score')
let squares = []
let currentSnake = [2, 1, 0]
let direction = 1
const width = 10
let appleIndex = 0
let score = 0
let intervalTime = 1000
let speed = 0.9
let timerId = 0

function createGrid() {
  for (let i = 0; i < width * width; i++) {
    const square = document.createElement('div')
    square.classList.add('square')
    grid.appendChild(square)
    squares.push(square)
  }
}

createGrid()

currentSnake.forEach((index) => squares[index].classList.add('snake'))

function startGame() {
  //remove the snake

  //remove the apple
  clearInterval(timerId)
  currentSnake[(2, 1, 0)]
  score = 0
  //re add new score to browser

  direction = 1
  intervalTime = 1000
  generateApple()
  //readd the class of snake to our new currentSnake

  timerId = setInterval(move, 1000)
}

function move() {
  if (
    (currentSnake[0] + width >= width * width && direction === width) || //if snake has hit bottom
    (currentSnake[0] % width === width - 1 && direction === 1) || //if snake has hit right wall
    (currentSnake[0] % width === 0 && direction === -1) || //if snake has hit left wall
    (currentSnake[0] - width < 0 && direction === -width) || //if snake has hit top
    squares[currentSnake[0] + direction].classList.contains('snake')
  )
    return clearInterval(timerId)

  const tail = currentSnake.pop()
  squares[tail].classList.remove('snake')
  currentSnake.unshift(currentSnake[0] + direction)

  //deal with snake head gets apple
  if (squares[currentSnake[0]].classList.contains('apple')) {
    //remove the class of apple
    squares[currentSnake[0]].classList.remove('apple')

    //grow our snake by adding class of snake to it
    squares[tail].classList.add('snake')
    //grow our snake array
    currentSnake.push(tail)
    //generate new apple
    generateApple()
    //add one to the score
    score++
    //display our score
    scoreDisplay.textContent = score
    //speed up our snake
    clearInterval(timerId)
    intervalTime = intervalTime * speed
    timerId = setInterval(move, intervalTime)
  }

  squares[currentSnake[0]].classList.add('snake')
}

function generateApple() {
  do {
    appleIndex = Math.floor(Math.random() * squares.length)
  } while (squares[appleIndex].classList.contains('snake'))
  squares[appleIndex].classList.add('apple')
}

generateApple()

function control(e) {
  if (e.keyCode === 39) {
    console.log('right pressed')
    direction = 1
  } else if (e.keyCode === 38) {
    console.log('up pressed')
    direction = -width
  } else if (e.keyCode === 37) {
    console.log('left pressed')
    direction = -1
  } else if (e.keyCode === 40) {
    console.log('down pressed')
    direction = +width
  }
}

document.addEventListener('keyup', control)
startButton.addEventListener('click', startGame)
