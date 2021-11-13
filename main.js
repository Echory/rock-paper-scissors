//QUERY SELECTORS//
var classicBtn = document.querySelector('#classicBtn');
var hauntedBtn = document.querySelector('#hauntedBtn');
var chooseGamePage = document.querySelector('#chooseGamePage');
var classicBtns = document.querySelector('#classicBtns');
var hauntedBtns = document.querySelector('#hauntedBtns');
var rockBtn = document.querySelector('#rock');
var paperBtn = document.querySelector('.p');
var scissorsBtn = document.querySelector('.s');
var ghostBtn = document.querySelector('.g');
var vampireBtn = document.querySelector('.v');

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
  show(classicBtns);
}

function showHauntedGame() {
  game.type = 'haunted';
  hide(chooseGamePage);
  show(hauntedBtns);
}


function getSelectedChoice(event) {
  var youChoice = event.target.parentNode.id;
  game.newGame(youChoice)
}