class Board {
  constructor (player1, player2) {
    this.player1 = player1
    this.player2 = player2
    this.grid = [ ['_', '_', '_'], ['_', '_', '_'], ['_', '_', '_'] ]
    this.openSlots = 9
  }

  display () {
    this.grid.map(row => {
      console.log(row)
      console.log('\n')
    })
    console.log('\n')
  }

  plot (player, row, column) {
    this.grid[row][column] = player.marker()
    this.openSlots--
  }

  isFilled () {
    return this.openSlots === 0
  }
}

module.exports = Board
