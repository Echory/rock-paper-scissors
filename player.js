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
  takeTurn() {
  
  }

  generateComputerChoiceClassic() {
    var choices = ['r', 'p', 's'];
    var randomNumber = (Math.floor(Math.random() * 3));
    return choices[randomNumber];
  }
  generateComputerChoiceHaunted() {
    var choices = ['r', 'p', 's', 'g', 'v'];
    var randomNumber = (Math.floor(Math.random() * 5));
    return choices[randomNumber];
  }
}