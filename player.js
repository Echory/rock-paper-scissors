class Player {
  constructor(name, token) {
    this.name = name;
    this.token = token;
    this.wins = 0;
    this.choice;
  }
  saveWinsToStorage() {
    localStorage.setItem(this.name, this.wins)
  }

  retrieveWinsFromStorage() {
    var storageWins = localStorage.getItem(this.name);
    if(storageWins === null){
      this.wins = 0;
    } else {
    this.wins = storageWins;
    }
  }

  takeTurn(gameType, playerInput) {
    if(playerInput) {
      this.choice = playerInput
    }
    if (this.name === 'Computer' && gameType === 'classic') {
      this.generateComputerChoiceClassic()
    }
    if (this.name === 'Computer' && gameType === 'haunted') {
      this.generateComputerChoiceHaunted()
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
};