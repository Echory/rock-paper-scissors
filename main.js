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
var chooseFighterParagraph = document.querySelector('#chooseFighterParagraph');

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
  // show(chooseFighterParagraph);
}

function showHauntedGame() {
  game.type = 'haunted';
  hide(chooseGamePage);
  show(allBtns);
  show(hauntedBtns);
  // show(chooseFighterParagraph);
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
  if(game.winner === 'you' || game.winner === 'computer'){
  choicesDisplay.innerHTML += `<div class="fighter-choices">
  <p class="winner">${game.winner} won this round!</p>
  <img src="assets/${game.playerOne.choice}.svg">
  <img src="assets/${game.playerTwo.choice}.svg">
  </div>`
} else if(game.winner === 'none') {
  choicesDisplay.innerHTML += `<div class="fighter-choices">
  <p class="winner>Its a draw!</p>
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
  // show(chooseFighterParagraph)
  show(allBtns);
  // show(chooseFighterParagraph);
}
 
// function declareWinner() {
//   chooseFighterParagraph.innerHTML = ``;
//   if(game.winner === 'you') {
//     chooseFighterParagraph.innerHTML += `<p class="result">${game.playerOne.choice} wins!</p>`;
//     debugger
//   } 
//   if(game.winner === 'none') {
//     chooseFighterParagraph.innerHTML += `<p class="result>Its a draw!</p>`
//     debugger
//   } 
//   if(game.winner === 'computer') {
//     chooseFighterParagraph.innerHTML += `<p class="result>${game.playerTwo.choice} wins!</p>`
//     debugger
//   }
// }