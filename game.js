class Game {
  constructor(type) {
    this.playerOne = new Player('You');
    this.playerTwo = new Player('Computer');
    this.type = type;
    this.winConditions = {
      rock: ['scissors', 'ghost'],
      paper: ['rock', 'vampire'],
      scissors: ['paper', 'ghost'],
      ghost: ['vampire', 'paper'],
      vampire: ['rock', 'scissors'] }
  }
  detectWinner(userScore, computerScore) {
//compare userScore and computerScore , return winner and update player score
  }

  detectDraw() {
//if choices are === , draw
  }
  
  recordMove() {
//could be in detectwinner?
  }
  resetGame() {
// resest game after there is a winner
  }
 

//   storeType() {
// //detect if 
//   }
}