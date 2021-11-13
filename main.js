//QUERY SELECTORS//
var classicBtn = document.querySelector('#classicBtn');
var hauntedBtn = document.querySelector('#hauntedBtn');
var chooseGamePage = document.querySelector('#chooseGamePage');
var classicBtns = document.querySelector('#classicBtns');
var hauntedBtns = document.querySelector('#hauntedBtns');
var rockBtn = document.querySelector('.r');
var paperBtn = document.querySelector('.p');
var scissorsBtn = document.querySelector('.s');
var ghostBtn = document.querySelector('.g');
var vampireBtn = document.querySelector('.v');

var game;

//EVENT LISTENERS//
classicBtn.addEventListener('click', showClassicGame);
hauntedBtn.addEventListener('click', showHauntedGame);


//FUNCTIONS//
function show(element) {
  element.classList.remove('hidden');
}

function hide(element) {
  element.classList.add('hidden');
}

function showClassicGame() {
  game = new Game('classic');
  debugger
  hide(chooseGamePage);
  show(classicBtns);
}

function showHauntedGame() {
  game = new Game('haunted');
  hide(chooseGamePage);
  show(hauntedBtns);
}


