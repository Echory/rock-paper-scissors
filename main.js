//QUERY SELECTORS//
var classicBtn = document.querySelector('#classicBtn');
var hauntedBtn = document.querySelector('#hauntedBtn');
var chooseGamePage = document.querySelector('#chooseGamePage');
var allBtns = document.querySelector('#allBtns');
var hauntedBtns = document.querySelector('#hauntedBtns');
var rockBtn = document.querySelector('.r');
var paperBtn = document.querySelector('.p');
var scissorsBtn = document.querySelector('.s');
var ghostBtn = document.querySelector('.g');
var vampireBtn = document.querySelector('.v');
var youSide = document.querySelector('#youSide');
var computerSide = document.querySelector('#computerSide');
var choicesDisplay = document.querySelector('#choicesDisplay');

var game = new Game();

//EVENT LISTENERS//
classicBtn.addEventListener('click', showClassicGame);
hauntedBtn.addEventListener('click', showHauntedGame);
rockBtn.addEventListener('click', getSelectedChoice);
paperBtn.addEventListener('click', getSelectedChoice);
scissorsBtn.addEventListener('click', getSelectedChoice);
ghostBtn.addEventListener('click', getSelectedChoice);
vampireBtn.addEventListener('click', getSelectedChoice);


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


function getSelectedChoice(event) {
  var youChoice = event.target.parentNode.id;
  game.newGame(youChoice)
}

function displayScore() {
  youSide.innerHTML = ``;
  computerSide.innerHTML = ``;
  youSide.innerHTML += `<p class="you-score">${game.playerOne.wins}</p>`;
  computerSide.innerHTML += `<p class="computer-score">${game.playerTwo.wins}</p>`;
}

function displayFighterChoices() {
  choicesDisplay.innerHTML = ``;
  choicesDisplay.innerHTML += `<div class="fighter-choices">
  <img src="assets/${game.playerOne.choice}.svg">
  <img src="assets/${game.playerTwo.choice}.svg">
  </div>`
  show(choicesDisplay);
  hide(allBtns);
  setTimeout(playNewRound, 700);
}

function playNewRound() {
  hide(choicesDisplay);
  show(allBtns);
}
 