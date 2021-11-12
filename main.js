//QUERY SELECTORS//
var classicBtn = document.querySelector('#classicBtn');
var hauntedBtn = document.querySelector('#hauntedBtn');
var chooseGamePage = document.querySelector('#chooseGamePage');
var classicBtns = document.querySelector('#classicBtns');
var hauntedBtns = document.querySelector('#hauntedBtns');
var rockBtn = document.querySelector('.rock');
var paperBtn = document.querySelector('.paper');
var scissorsBtn = document.querySelector('.scissors');
var ghostBtn = document.querySelector('.ghost');
var vampireBtn = document.querySelector('.vampire');


var userScore = 0;
var computerScore = 0;

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
  hide(chooseGamePage);
  show(classicBtns);
}

function showHauntedGame() {
  hide(chooseGamePage);
  show(hauntedBtns);
}

function generateComputerChoiceClassic() {
  var choices = ['rock', 'paper', 'scissors'];
  var randomNumber = (Math.floor(Math.random() * 3));
  return choices[randomNumber];
}