class Player {
  constructor(name, token) {
    this.name = name;
    this.token = token;
    this.wins = 0;
    this.choice;
  }
  saveWinsToStorage() {

  }
  retrieveWinsFromStorage() {

  }
  takeTurn(gameType, playerInput) {
    if(playerInput) {
      this.choice = playerInput
      return
    }

    if (this.name === 'Computer' && gameType === 'classic') {
      this.generateComputerChoiceClassic()
      return
    }

    if (this.name === 'Computer' && gameType === 'haunted') {
      this.generateComputerChoiceHaunted()
      return
    }
  }

  generateComputerChoiceClassic() {
    var choices = ['rock', 'paper', 'scissors'];
    var randomNumber = (Math.floor(Math.random() * 3));
    this.choice = choices[randomNumber];
  }
  generateComputerChoiceHaunted() {
    var choices = ['rock', 'paper', 'scissors', 'ghost', 'vampire'];
    var randomNumber = (Math.floor(Math.random() * 5));
    this.choice = choices[randomNumber];
  }
}