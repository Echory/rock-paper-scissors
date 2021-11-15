class Game {
  constructor() {
    this.playerOne = new Player('You', 'assets/you.svg');
    this.playerTwo = new Player('Computer', 'assets/computer.svg');
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
    } else if(youChoice === computerChoice) {
      this.winner = 'none';
    } else {
      this.playerTwo.wins++;
      this.winner = 'computer';
    }
    displayFighterChoices();
    displayScore();
  }

  newGame(playerInput) {
    this.playerOne.takeTurn(this.type, playerInput)
    this.playerTwo.takeTurn(this.type)
    this.detectWinner()
  }

  // resetGame() {
  //   this.winner = null;
  //   this.playerOne.choice = null;
  //   this.playerTwo.choice = null;
  // }
}