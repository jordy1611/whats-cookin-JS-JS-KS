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
window.addEventListener('load', onLoad);
window.addEventListener('click', clickHandler);
window.addEventListener('dblclick', updateRecipesToCook)
searchInput.addEventListener('input', showInputFinder);


//eventHandlers

function onLoad() {
  randomizeUser();
  const allRecipes = generateRecipes(recipeData); //randomize recipes?
  displayRecipeCards(allRecipes, 'cards-body');
  displayUserPantry();
//  userRecipes = generateRecipes(user.favoriteRecipes);
}

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
    displayRecipeCards(userRecipes, 'pantry-body');
    displayUserPantry();
  } else if (event.target.classList.contains('red-star')) {
    removeUserFavorite(event) //turn into helper function
    event.target.classList.add('white-star')
    event.target.classList.remove('red-star')
    userRecipes = generateRecipes(user.favoriteRecipes);
    displayRecipeCards(userRecipes, 'pantry-body');
    displayUserPantry();
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


function displayRecipeCards(recipeArray, className) {
  //rename or put inside another function alongside displayUserPantry
  const cardSection = document.querySelector(`.${className}`);
  cardSection.innerHTML = '';
  recipeArray.forEach(function(recipe) {
    const card = `
    <article class="recipe-card" data-id="${recipe.id}">
    <img class="white-star" src="../assets/star.svg">
    <img class="red-star hidden" src="../assets/star-active.svg">
      <section class="hidden-card-${className}">
      </section>
      <section class="displayed-card">
        <img class="recipe-img" src=${recipe.image}>
        <p class="recipe-name">${recipe.name}</p>
      </section>
    </article>`;
    cardSection.insertAdjacentHTML('afterbegin', card);
    // document.querySelector(`.hidden-card-${className}`).innerHTML = ""; // query also in line 132
    //cardsBodySection.insertAdjacentHTML('afterbegin', card);
    //console.log('before');
    displayHiddenIngredients(recipe, className); //refactor
    //console.log('after');
    displayHiddenInstructions(recipe, className);

  })
}

function displayPantryLists(pantry, ingredientsArray) {
  pantry.pantry.forEach(function(item) {
    const list = `
        <li class="ingredient">${itemNameById(item.ingredient, ingredientsArray)}  Amount: ${item.amount}</li>`;
    userPantrySection.insertAdjacentHTML('beforeend', list);
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

const itemUnitById = (id, recipeArray) => {
  recipeArray.forEach(recipe => {
    return recipe.filter(ingredient => ingredient.id === id);
  });
  return recipeArray.quantity.unit;
}

function displayUserPantry() {
  const pantry = `
  <article class="user-pantry">
    <h3>Pantry</h3>
    <div class="ingredient">flour...     ...3cups</div>
    <div class="ingredient">flour...     ...3cups</div>
    <div class="ingredient">flour...     ...3cups</div>
    <div class="ingredient">flour...     ...3cups</div>
  </article>
  <article class="missing-ingredients">
    <h3>Missing Ingredients</h3>
    <div class="ingredient">not flour...     ...2cups</div>
    <div class="ingredient">not flour...     ...2cups</div>
    <div class="ingredient">not flour...     ...2cups</div>
    <div class="ingredient">not flour...     ...2cups</div>
  </article>
  `
  document.querySelector('.pantry-body').insertAdjacentHTML('afterbegin', pantry)
}

function displayHiddenIngredients(ingredientsArray, recipe) {
  ingredientsArray.forEach(function(ingredient) {
    ingredient = `${recipe.getIngredientName(ingredient)}:
    ${ingredient.quantity.amount.toFixed(2)}
    ${ingredient.quantity.unit}</br>`
    updateHiddenCard(ingredient, className);
  });
}

// function getIngredientName(ingredient) {
//   //returns name of ingredient
//   // use .find like in checkForIngredient
//   let name;
//   ingredientsData.forEach(ingredientData => {
//     if (ingredient.id === ingredientData.id) {
//       name = ingredientData.name;
//     }
//   })
//   return name;
// }

function displayHiddenInstructions(recipe, className) {
  recipe.instructions.forEach(function(instruction) {
    instruction = `${instruction.number}.
    ${instruction.instruction}</br>`
    updateHiddenCard(instruction, className);
  });
}

function updateHiddenCard(item, className) {
  console.log(item);
  // document.querySelector('.hidden-card').innerHTML = "";
  document.querySelector(`.hidden-card-${className}`).insertAdjacentHTML('beforeend', item)
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
  // return user;
}


function showInputFinder(event) { //updated parameters in displayRecipeCards

  var searchBarInput = event.target.value;
  var foundRecipes = user.searchRecipeByName(searchBarInput);
  //console.log(searchBarInput)
//   console.log(foundRecipes)
  displayRecipeCards(foundRecipes, 'pantry-body');
  testVar = foundRecipes
}

function addUserFavorite(event) {
  let card = event.target.closest('.recipe-card')
  recipeData.forEach(recipe => {
    if(recipe.id === parseInt(card.dataset.id)) {
      user.favoriteRecipes.push(recipe)
    }
    //console.log(recipe);
  })
  // console.log('innerHTML', `${event.target.innerHTML}`)
}

function removeUserFavorite(event) {
  let card = event.target.closest('.recipe-card')
  user.favoriteRecipes.forEach((recipe, index) => {
    if(recipe.id === parseInt(card.dataset.id)) {
      user.favoriteRecipes.splice(index, 1)
    }
  })
}

function updateRecipesToCook() {
  console.log('dubs click');
}
