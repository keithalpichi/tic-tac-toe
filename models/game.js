const Board = require('./board')
const User = require('./user')
const prompt = require('prompt')

prompt.start()

class Game {
  constructor () {
    this.player1 = new User('player1', 'X')
    this.player2 = new User('player2', 'O')
    this.players = [this.player1, this.player2]
    this.board = new Board(this.player1, this.player2)
    this.gameOn = true
    this.winner = null
  }
  start () {
    console.log('\nBeing game\n')
    this.play()
  }

  play () {
    this.board.display()
    while (this.isValidGame()) {
      this.players.forEach(player => {
        prompt.get(['row', 'column'], function (err, result) {
          if (err) console.log(err)
          this.board.plot(player, result.row, result.column)
          this.board.display()
        })
        this.checkForWinnerOrTie()
      })
    }
    // this.announceWinner()
    // this.restartOrQuit()
  }

  checkForWinnerOrTie () {
    if (this.board.isFilled()) {
    }
  }

  isValidGame () {
    if (!this.gameOn) { return false }
    // check if any user has a three in a row (vertical, horizontal, diagonal)
    // if all spots are filled up, call 'cat's game' and restart
    return true
  }

  announceWinner () {
    return this.winner.name()
  }

  restartOrQuit () {
    // prompt user if he wants to restart
    // if yes, reset values then call start()
    // else quit process
  }
}

module.exports = Game
