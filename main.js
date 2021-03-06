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
game.fetchScoresFromStorage();

//EVENT LISTENERS//
classicBtn.addEventListener('click', showClassicGame);
hauntedBtn.addEventListener('click', showHauntedGame);
rockBtn.addEventListener('click', getSelectedChoice);
paperBtn.addEventListener('click', getSelectedChoice);
scissorsBtn.addEventListener('click', getSelectedChoice);
ghostBtn.addEventListener('click', getSelectedChoice);
vampireBtn.addEventListener('click', getSelectedChoice);
changeGameBtn.addEventListener('click', backToMain);   
backToMain();

//FUNCTIONS//
function show(element) {
  element.classList.remove('hidden');
};

function hide(element) {
  element.classList.add('hidden');
};

function showClassicGame() {
  game.type = 'classic';
  hide(chooseGamePage);
  show(allBtns);
};

function showHauntedGame() {
  game.type = 'haunted';
  hide(chooseGamePage);
  show(hauntedBtns);
  show(allBtns);
};
 
function getSelectedChoice(event) {
  var youChoice = event.target.parentNode.id;
  game.newGame(youChoice);
};

function displayScore() {
  youSide.innerHTML = ``;
  computerSide.innerHTML = ``;
  youSide.innerHTML += `<p class="you-score">${game.playerOne.wins}</p>`;
  computerSide.innerHTML += `<p class="computer-score">${game.playerTwo.wins}</p>`;
};

function displayFighterChoices() {
  choicesDisplay.innerHTML = ``;
  if(game.winner === game.playerOne || game.winner === game.playerTwo){
  choicesDisplay.innerHTML += `<div class="fighter-choices">
  <p class="winner"><img class="win-icon" src="${game.winner.token}"> ${game.winner.name} won this round! <img class="win-icon" src="${game.winner.token}">
  </p>
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
  setTimeout(playNewRound, 1000);
};

function playNewRound() {
  hide(choicesDisplay);
  show(allBtns);
  game.resetGame();
};
 
function backToMain() {
  show(chooseGamePage);
  hide(allBtns);
  hide(hauntedBtns);
  displayScore();
};