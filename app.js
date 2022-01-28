const game = {
  title: 'Guess the Number!',
  biggestNum: 100,
  smallestNum: 1,
  secretNum: null,
  prevGuesses: [],
  
  getGuess: function () {
    // asks the user for their guess
    let guess = prompt(`Guess! That! Number! between ${this.smallestNum} and ${this.biggestNum}!`)
    // uses parseInt on the guess to check if it's an integer or not
    let parsedNumber = parseInt(guess)
    // returns parsedNumber
    return parsedNumber
  },
  
  play: function () {
    // sets the variable secretNum to a random number
    this.secretNum = Math.floor(Math.random() * (this.biggestNum - this.smallestNum + 1)) + this.smallestNum
    // initializes playerAnswer
    let playerAnswer
    console.log(this.secretNum)
    console.log(playerAnswer)
    // a while loop that compares if the variables playerAnswer and secretNumber are NOT equal
    while (playerAnswer !== this.secretNum) {
      // assigns the user's guess to the variable playerAnswer
      playerAnswer = this.getGuess()
      // adds the guess into the previously initialized array prevGuesses
      this.prevGuesses.push(playerAnswer)
      // calls the render method with the variable playerAnswer as the input
      this.render(playerAnswer)
    }
  },

  render: function (playerAnswer) {
    // checks if the player's answer is within 0 and 100 inclusively
    if (playerAnswer >= 0 && playerAnswer <= 100) {
      // if the player's answer is the secret number, it returns a congratulatory statement
      if (playerAnswer === this.secretNum) {
        alert(`Congrats! You guessed the number in ${this.prevGuesses.length} guesses!`)
      }
      // if the player's answer is too high, it returns a 'too high' statement
      else if (playerAnswer > this.secretNum) {
        alert(`Your guess is too high Previous guesses: ${this.prevGuesses.join(`, `)}`)
      }
      // if the player's answer is too low, it returns a 'too low' statement
      else if (playerAnswer < this.secretNum) {
        alert(`Your guess is too low Previous guesses: ${this.prevGuesses.join(`, `)}`)
      }
    }
  }
}

// starts the game
game.play()