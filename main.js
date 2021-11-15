//QUERY SELECTORS//
var classicBtn = document.querySelector('#classicBtn');
var hauntedBtn = document.querySelector('#hauntedBtn');
var chooseGamePage = document.querySelector('#chooseGamePage');
var allBtns = document.querySelector('#allBtns');
var hauntedBtns = document.querySelector('#hauntedBtns');
var rockBtn = document.querySelector('#rock');
var paperBtn = document.querySelector('#paper');
var scissorsBtn = document.querySelector('#scissors');
var ghostBtn = document.querySelector('#ghost');
var vampireBtn = document.querySelector('#vampire');
var youSide = document.querySelector('#youSide');
var computerSide = document.querySelector('#computerSide');
var choicesDisplay = document.querySelector('#choicesDisplay');
var changeGameBtn = document.querySelector('#changeBtn');

var game = new Game();

//EVENT LISTENERS//
classicBtn.addEventListener('click', showClassicGame);
hauntedBtn.addEventListener('click', showHauntedGame);
rockBtn.addEventListener('click', getSelectedChoice);
paperBtn.addEventListener('click', getSelectedChoice);
scissorsBtn.addEventListener('click', getSelectedChoice);
ghostBtn.addEventListener('click', getSelectedChoice);
vampireBtn.addEventListener('click', getSelectedChoice);
changeGameBtn.addEventListener('click', backToMain);
// window.addEventListener('DOMContentLoaded', function(){
//   retrieveStorageWins();
// });



//FUNCTIONS//
function show(element) {
  element.classList.remove('hidden');
}

function hide(element) {
  element.classList.add('hidden');
}

function showClassicGame() {
  game.type = 'classic';
  hide(chooseGamePage);
  show(allBtns);
}

function showHauntedGame() {
  game.type = 'haunted';
  hide(chooseGamePage);
  show(allBtns);
  show(hauntedBtns);
}

function startGame() {
  // set up variables that can hold player wins for local storage
 
}
 

function getSelectedChoice(event) {
  var youChoice = event.target.parentNode.id;
  game.newGame(youChoice)
}

function displayScore() {
  youSide.innerHTML = ``;
  computerSide.innerHTML = ``;
  youSide.innerHTML += `<p class="you-score">${game.playerOne.retrieveWinsFromStorage()}</p>`;
  computerSide.innerHTML += `<p class="computer-score">${game.playerTwo.retrieveWinsFromStorage()}</p>`;
}

function displayFighterChoices() {
  choicesDisplay.innerHTML = ``;
  if(game.winner === 'you' || game.winner === 'computer'){
  choicesDisplay.innerHTML += `<div class="fighter-choices">
  <p class="winner">${game.winner} won this round!</p>
  <img src="assets/${game.playerOne.choice}.svg">
  <img src="assets/${game.playerTwo.choice}.svg">
  </div>`
} else if(game.winner === 'none') {
  choicesDisplay.innerHTML += `<div class="fighter-choices">
  <p class="winner">Its a draw!</p>
  <img src="assets/${game.playerOne.choice}.svg">
  <img src="assets/${game.playerTwo.choice}.svg">
  </div>`
}
  show(choicesDisplay);
  hide(allBtns);
  setTimeout(playNewRound, 2000);
}

function playNewRound() {
  hide(choicesDisplay);
  show(allBtns);
  game.resetGame();

}
 
function backToMain() {
  show(chooseGamePage);
  hide(allBtns);
  hide(hauntedBtns);
}