class Game {
  constructor() {
    this.playerOne = new Player('You');
    this.playerTwo = new Player('Computer');
    this.type;
    this.winner;
    this.winConditions = {
      rock: ['scissors', 'ghost'],
      paper: ['rock', 'vampire'],
      scissors: ['paper', 'ghost'],
      ghost: ['vampire', 'paper'],
      vampire: ['rock', 'scissors'] }
  }

  detectWinner() {
    var youChoice = this.playerOne.choice;
    var computerChoice = this.playerTwo.choice;

    if(this.winConditions[youChoice].includes(computerChoice)){
      this.playerOne.wins++;
      this.winner = 'you';
      debugger
      return
    } else if(youChoice === computerChoice) {
      this.winner = 'none';
      debugger
      return
    }else {
      this.playerTwo.wins++;
      this.winner = 'computer';
      debugger
    }
  // Use win conditions to detect winner
  // Increment winner score
  // Reset game
  }

  newGame(playerInput) {
    this.playerOne.takeTurn(this.type, playerInput)
    this.playerTwo.takeTurn(this.type)
    this.detectWinner()
  }

  // resetGame() {
  //   // start over
  // }
 
}