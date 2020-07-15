// const ingredientsData = require('../data/ingredients');
// const ingredientsData = require('../data/ingredients.js');
// const recipesData = require('../data/recipes');
// const ingredients = require('../data/ingredients');
// const recipes = require('../data/recipes');
// const users = require('../data/users');
// const Recipe = require('./Recipe');
// const User = require('./User');







const userPantrySection = document.querySelector('.user-pantry');
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
    userFavorite(event);
  }
}

const displayRecipesPage = () => { //change to es5?
  displayElement('cards-body');
  displayElement('my-pantry-button');
  hideElement('pantry-body');
  hideElement('recipes-button');
  hideElement('search-input');
  updatePageHeader('Recipes');
}

const displayPantryPage = () => { //change to es5?
  displayElement('pantry-body');
  displayElement('recipes-button');
  displayElement('search-input');
  hideElement('cards-body');
  hideElement('my-pantry-button');
  updatePageHeader('My Pantry');
  displayPantryLists(userPantry, ingredientsData);
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
  displayRecipeCards(allRecipes);
  randomizeUser();
}

function displayRecipeCards(recipeArray) { //randomize?
  console.log("RECIPE", recipeArray)
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
    cardsBodySection.insertAdjacentHTML('afterbegin', card);

    displayHiddenIngredients(recipe.ingredients, recipe);
    // recipe.ingredients.forEach(function(ingredient) {
    //   ingredient = `${recipe.getIngredientName(ingredient)}:
    //   ${ingredient.quantity.amount.toFixed(2)}
    //   ${ingredient.quantity.unit}</br>`
    //   updateHiddenCard(ingredient);
    // });
    displayHiddenInstructions(recipe)
    // recipe.instructions.forEach(function(instruction) {
    //   instruction = `${instruction.number}.
    //   ${instruction.instruction}</br>`
    //   updateHiddenCard(instruction);
    // });
  })
}

function displayPantryLists(pantry, ingredientsArray) {
  pantry.pantry.forEach(function(item) {
    const list = `
        <div class="ingredient">Name:${itemNameById(item.ingredient, ingredientsArray)}, Amount:${item.amount}</div>`;
    userPantrySection.insertAdjacentHTML('afterbegin', list);
  })
}

const itemNameById = (itemId, ingredientsArray) => {
  let name;
  ingredientsArray.forEach(ingredient => {
    if (ingredient.id === itemId) {
      name = ingredient.name
    } 
  })
  return name;
}

function itemUnitById(id, recipeArray) {
  recipeArray.forEach(recipe => {
    return recipe.filter(ingredient => ingredient.id === id);
  });
  return recipeArray.quantity.unit;
}

function displayHiddenIngredients(ingredientsArray, recipe) {
  ingredientsArray.forEach(function(ingredient) {
    ingredient = `${recipe.getIngredientName(ingredient)}:
    ${ingredient.quantity.amount.toFixed(2)}
    ${ingredient.quantity.unit}</br>`
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
  user = new User(usersData[randomIndex]);
  let greeting = document.querySelector('.user-profile-display');
  greeting.innerHTML = `Welcome, ${user.name}!`
  userPantry = new Pantry(user);
  return user;
}


function showInputFinder(event) {

  var searchBarInput = event.target.value;
  var foundRecipes = user.searchRecipeByName(searchBarInput);
  console.log(searchBarInput)
  console.log(foundRecipes)
  displayRecipeCards(foundRecipes)
  testVar = foundRecipes
}

function userFavorite(event) {
  let card = event.target.closest('.recipe-card')
  recipeData.forEach(recipe => {
    if(recipe.id === parseInt(card.dataset.id)) {
      console.log("REC", recipe)
      user.favoriteRecipes.push(recipe)
    }
  })
  console.log(user.favoriteRecipes)
}

function removeUserFavorite(event) {
  let card = event.target.closest('.recipe-card')
  user.favoriteRecipes.forEach((recipe, index) => {
    if (recipe.id === parseInt(card.dataset.id)) {
      console.log("OUT", recipe)
      user.favoriteRecipes.splice(index, 1)
    }
  })
  console.log(user.favoriteRecipes)
}
