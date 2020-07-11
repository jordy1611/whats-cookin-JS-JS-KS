// const ingredientsData = require('../data/ingredients.js');
// // const ingredientsData = require('../data/ingredients.js');
// const recipesData = require('../data/recipes');
// const users = require('../data/users');
// const Recipe = require('./Recipe');
// const User = require('./User');
// const Pantry = require('./Pantry');

console.log('Hello World');

// const allRecipes;
// const userRecipes;
// const shoppingList;

//eventListeners
window.addEventListener('click', clickHandler);

//eventHandlers
function clickHandler(event) {
  if (event.target.classList.contains('recipes-button')) {
    displayRecipesPage();
  } else if (event.target.classList.contains('my-pantry-button')) {
    displayPantryPage();
  }
}

const displayRecipesPage = () => {
  displayElement('cards-body');
  displayElement('my-pantry-button');
  hideElement('pantry-body');
  hideElement('recipes-button')

}

const displayPantryPage = () => {
  displayElement('pantry-body');
  displayElement('recipes-button');
  hideElement('cards-body');
  hideElement('my-pantry-button');
}

function displayElement(className) {
  document.querySelector(`.${className}`).classList.remove('hidden');
}
  function hideElement(className) {
  document.querySelector(`.${className}`).classList.add('hidden');
}

//helper functions
