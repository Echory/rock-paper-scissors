//QUERY SELECTORS//
var classicBtn = document.querySelector('#classicBtn');
var hauntedBtn = document.querySelector('#hauntedBtn');
var chooseGamePage = document.querySelector('#chooseGamePage');
var classicBtns = document.querySelector('#classicBtns');
var hauntedBtns = document.querySelector('#hauntedBtns');

//EVENT LISTENERS//
classicBtn.addEventListener('click', startClassicGame);
hauntedBtn.addEventListener('click', startHauntedGame);

//FUNCTIONS//
function show(element) {
  element.classList.remove('hidden');
}

function hide(element) {
  element.classList.add('hidden');
}

function startClassicGame() {
  hide(chooseGamePage);
  show(classicBtns);
}

function startHauntedGame() {
  hide(chooseGamePage);
  show(hauntedBtns);
}