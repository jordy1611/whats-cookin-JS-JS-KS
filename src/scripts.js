const ingredients = require('../data/ingredients')
const recipes = require('../data/recipes');
const users = require('../data/users');
const Recipe = require('./Recipe');
const User = require('./User');
const Pantry = require('./Pantry');

console.log('Hello World');

const displayRecipes;
const userRecipes;
const shoppingList;

//eventListeners
window.addEventListener('click', /*function*/clickHandler);

//eventHandlers
function clickHandler(event) {
  if (event.target.classList.contains('recipes-button')) {
    displayRecipesPage();
  } else if (event.target.classList.contains('recipes-button')) {
    displayUsersPage();
  } 
}


const displayRecipesPage = () => {
  hideElement('pantry-body');
  displayElement('cards-body');
}

const displayUsersPage = () => {
  hideElement('cards-body');
  displayElement('pantry-body');
}

function displayElement(className) {
  document.querySelector('.${ className } ').classList.remove(‘hidden’);
}
  function hideElement(className) {
  document.querySelector('.${ className } ').classList.add(‘hidden’);
}

//helper functions