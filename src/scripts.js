// const ingredientsData = require('../data/ingredients.js');
// const ingredientsData = require('../data/ingredients.js');
// const recipesData = require('../data/recipes');
// const ingredients = require('../data/ingredients');
// const recipes = require('../data/recipes');
// const users = require('../data/users');
// const Recipe = require('./Recipe');
// const User = require('./User');
// const Pantry = require('./Pantry');
// const searchInput = document.querySelector('.search-input');
const cardsBodySection = document.querySelector('.cards-body'); // see if we can create this in a function
const pantryListSection = document.querySelector('.user-pantry');
const missingIngredientsList = document.querySelector('.missing-ingredients');
console.log('Hello World');

// const allRecipes = generateRecipes(recipeData);
// const userRecipes = generateRecipeCards();
// const shoppingList;

//eventListeners
window.addEventListener('click', clickHandler);
window.addEventListener('load', onLoad);
// searchInput.addEventListener('input', searchRecipes);
//eventHandlers

function clickHandler(event) {
  if (event.target.classList.contains('recipes-button')) {
    displayRecipesPage();
  } else if (event.target.classList.contains('my-pantry-button')) {
    displayPantryPage();
  }
}

const displayRecipesPage = () => { //change to es5?
  displayElement('cards-body');
  displayElement('my-pantry-button');
  hideElement('pantry-body');
  hideElement('recipes-button');
  updatePageHeader('Recipes')
}

const displayPantryPage = () => { //change to es5?
  displayElement('pantry-body');
  displayElement('recipes-button');
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
  displayRecipeCards(allRecipes, cardsBodySection);
  randomizeUser();
}

function displayRecipeCards(recipeArray, cardsSection) { //randomize?
  recipeArray.forEach(function(recipe) {
    const card = `
    <article class="recipe-card">
      <section class="hidden-card">
      </section>
      <section class="displayed-card">
        <img class="recipe-img" src=${recipe.image}>
        <p class="recipe-name">${recipe.name}</p>
      </section>
    </article>`;
    cardsSection.insertAdjacentHTML('afterbegin', card);

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
  let randomUser = usersData[randomIndex];
  console.log("USER", randomUser)
  user = new User(randomUser.name, randomUser.id, randomUser.pantry);
}

function displayMissingIngredients(listArray, listSection) { 
  listArray.forEach(function (item) {
    const card = `
        <div class="ingredient">${item.name, item.amount, item.unit}</div>`;
    listSection.insertAdjacentHTML('afterbegin', card);
  })
}
// function searchRecipes(input) {
//   // let ingredients = this.filterIngredientData()
//   let ingredients = user.filterIngredientData();
//   let searchedIngriedients = ingredients.reduce((acc, ingredient) => {
//     if (ingredient.name.includes(input)) {
//     acc.push(ingredient.id)
//     }
//
//     return acc
//   }, [])
//   let searchedRecipes = user.favoriteRecipes.filter(recipe => {
//     console.log("SEARCH", searchedRecipes)
//     var recipeIng = recipe.ingredients.filter(ingredient => {
//       return searchedIngriedients.includes(ingredient.id)
//     })
//     console.log(recipe.name, recipeIng)
//     if(recipe.name.includes(input) || recipeIng.length > 0) {
//       return recipe
//     }
//   })
//   return searchedRecipes;
// }
