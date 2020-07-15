// const ingredientsData = require('../data/ingredients.js');
// const ingredientsData = require('../data/ingredients.js');
// const recipesData = require('../data/recipes');
// const ingredients = require('../data/ingredients');
// const recipes = require('../data/recipes');
// const users = require('../data/users');
// const Recipe = require('./Recipe');
// const User = require('./User');
// const Pantry = require('./Pantry');
const searchInput = document.querySelector('.search-input');
const cardsBodySection = document.querySelector('.cards-body'); // can go in line 60.5
console.log('Hello World');

// const allRecipes = generateRecipes(recipeData);
// const userRecipes = generateRecipeCards();
// const shoppingList;

//eventListeners
window.addEventListener('click', clickHandler);
window.addEventListener('load', onLoad);
searchInput.addEventListener('input', showInputFinder);

//eventHandlers

function clickHandler(event) {
  if (event.target.classList.contains('recipes-button')) {
    displayRecipesPage();
  } else if (event.target.classList.contains('my-pantry-button')) {
    displayPantryPage();
  } else if (event.target.classList.contains('white-star')) {
    addUserFavorite(event); //turn into helper function
    event.target.classList.add('red-star')
    event.target.classList.remove('white-star')
    userRecipes = generateRecipes(user.favoriteRecipes);
    displayRecipeCards(userRecipes, '.user-recipes')
    console.log(user.favoriteRecipes);
  } else if (event.target.classList.contains('red-star')) {
    removeUserFavorite(event) //turn into helper function
    event.target.classList.add('white-star')
    event.target.classList.remove('red-star')
    userRecipes = generateRecipes(user.favoriteRecipes);
    displayRecipeCards(userRecipes, '.user-recipes')
    console.log(user.favoriteRecipes);
  }
}

const displayRecipesPage = () => { //change to es5?
  displayElement('cards-body');
  displayElement('my-pantry-button');
  hideElement('pantry-body');
  hideElement('recipes-button');
  hideElement('search-input')
  updatePageHeader('Recipes')
}

const displayPantryPage = () => { //change to es5?
  displayElement('pantry-body');
  displayElement('recipes-button');
  displayElement('search-input')
  hideElement('cards-body');
  hideElement('my-pantry-button');
  updatePageHeader('My Pantry');
}



function updatePageHeader(pageTitle) {
  document.querySelector('.pageTitle').innerText = pageTitle
}

function displayElement(className) {
  document.querySelector(`.${className}`).classList.remove('hidden');
}
function hideElement(className) {
  document.querySelector(`.${className}`).classList.add('hidden');
}

function onLoad() {
  const allRecipes = generateRecipes(recipeData); //randomize recipes?
  displayRecipeCards(allRecipes, '.cards-body');
  randomizeUser();
//  userRecipes = generateRecipes(user.favoriteRecipes);
}

function displayRecipeCards(recipeArray, className) { //add if statement for pantry
  const cardSection = document.querySelector(className);
  cardSection.innerHTML = '';
  recipeArray.forEach(function(recipe) {
    const card = `
    <article class="recipe-card" data-id="${recipe.id}">
    <img class="white-star" src="../assets/star.svg">
    <img class="red-star hidden" src="../assets/star-active.svg">
      <section class="hidden-card">
      </section>
      <section class="displayed-card">
        <img class="recipe-img" src=${recipe.image}>
        <p class="recipe-name">${recipe.name}</p>
      </section>
    </article>`;

    cardSection.insertAdjacentHTML('afterbegin', card);
    //cardsBodySection.insertAdjacentHTML('afterbegin', card);
    displayHiddenIngredients(recipe.ingredients, recipe);
    displayHiddenInstructions(recipe)
  })
}

function displayHiddenIngredients(ingredientsArray, recipe) {
  ingredientsArray.forEach(function(ingredient) {
    ingredient = `${recipe.getIngredientName(ingredient)}:
    ${ingredient.quantity.amount.toFixed(2)}
    ${ingredient.quantity.unit}</br>`
    console.log(ingredient);
    updateHiddenCard(ingredient);
  });
}

function displayHiddenInstructions(recipe) {
  recipe.instructions.forEach(function(instruction) {
    instruction = `${instruction.number}.
    ${instruction.instruction}</br>`
    updateHiddenCard(instruction);
  });
}

function updateHiddenCard(item) {
  document.querySelector('.hidden-card').insertAdjacentHTML('beforeend', item)
}
// can be tested - should generate array of all recipes on load
function generateRecipes(recipesInfo) {
  return recipesInfo.map(recipeInfo => new Recipe(recipeInfo));
}

function randomizeUser() {
  let randomIndex = Math.floor(Math.random() * usersData.length);
  //let randomUser = usersData[randomIndex];
  user = new User(usersData[randomIndex]);
  let greeting = document.querySelector('.user-profile-display');
  greeting.innerHTML = `Welcome, ${user.name}!`
  //return user;
}

var testVar;

function showInputFinder(event) {

  var searchBarInput = event.target.value;
  var foundRecipes = user.searchRecipeByName(searchBarInput);
  console.log(searchBarInput)
  console.log(foundRecipes)
  displayRecipeCards(foundRecipes)
  testVar = foundRecipes
}

function addUserFavorite(event) {
  let card = event.target.closest('.recipe-card')
  recipeData.forEach(recipe => {
    if(recipe.id === parseInt(card.dataset.id)) {
      user.favoriteRecipes.push(recipe)
    }
  })
}

function removeUserFavorite(event) {
  let card = event.target.closest('.recipe-card')
  user.favoriteRecipes.forEach((recipe, index) => {
    if(recipe.id === parseInt(card.dataset.id)) {
      user.favoriteRecipes.splice(index, 1)
    }
  })
}
