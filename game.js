class Game {
  constructor() {
    this.playerOne = new Player('You');
    this.playerTwo = new Player('Computer');
    this.type;
    this.winConditions = {
      rock: ['scissors', 'ghost'],
      paper: ['rock', 'vampire'],
      scissors: ['paper', 'ghost'],
      ghost: ['vampire', 'paper'],
      vampire: ['rock', 'scissors'] }
  }

  detectWinner() {

  // Use win conditions to detect winner
  // Increment winner score
  // Reset game
  }


  newGame(playerInput) {
    this.playerOne.takeTurn(this.type, playerInput)
    this.playerTwo.takeTurn(this.type)
    this.detectWinner()
  }

  resetGame() {
    // start over
  }
 
}