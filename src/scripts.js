// const ingredientsData = require('../data/ingredients.js');
// const ingredientsData = require('../data/ingredients.js');
// const recipesData = require('../data/recipes');
// const ingredients = require('../data/ingredients');
// const recipes = require('../data/recipes');
// const users = require('../data/users');
// const Recipe = require('./Recipe');
// const User = require('./User');
// const Pantry = require('./Pantry');
const cardsBodySection = document.querySelector('.cards-body'); // see if we can create this in a function
console.log('Hello World');

// const allRecipes = generateRecipes(recipeData);
// const userRecipes = generateRecipeCards();
// const shoppingList;

//eventListeners
window.addEventListener('click', clickHandler);
window.addEventListener('load', onLoad);
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

function onLoad() {
  const allRecipes = generateRecipes(recipeData);
  displayRecipeCards(allRecipes);
}

function displayRecipeCards(recipeArray) { //image might have quotes already around it
  recipeArray.forEach(function(recipe) {
    const card = `
    <article class="recipe-card">
      <div class="hidden-card">
        blah blah blah blah </br>
        blah blah blah blah blah </br>
        blah blah blah blah </br>
        blah blah blah blah blah </br>
        blah blah blah blah </br>
        blah blah blah blah blah </br>
        blah blah blah blah </br>
        blah blah blah blah blah </br>
        blah blah blah blah </br>
        blah blah blah blah blah </br>
        blah blah blah blah </br>
        blah blah blah blah blah </br>
      </div>
      <section class="displayed-card">
        <img class="recipe-img" src=${recipe.image}>
        <p class="recipe-name">${recipe.name}</p>
      </section>
    </article>`;
    cardsBodySection.insertAdjacentHTML('afterbegin', card);
  })
}
//helper functions

// can be tested - should generate array of all recipes on load
function generateRecipes(recipesInfo) {
  return recipesInfo.map(recipeInfo => new Recipe(recipeInfo));
}

