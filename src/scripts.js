// const ingredientsData = require('../data/ingredients');
// const ingredientsData = require('../data/ingredients.js');
// const recipesData = require('../data/recipes');
// const ingredients = require('../data/ingredients');
// const recipes = require('../data/recipes');
// const users = require('../data/users');
// const Recipe = require('./Recipe');

// const User = require('./User');
const userShoppingList = document.querySelector('.missing-ingredients');
const userPantrySection = document.querySelector('.user-pantry');
const searchInput = document.querySelector('.search-input');
const cardsBodySection = document.querySelector('.cards-body'); // can go in line 60.5
userRecipes = [];
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
  displayUserPantry(userPantry, user, ingredientsData);
//  userRecipes = generateRecipes(user.favoriteRecipes);
}

function clickHandler(event) {
  if (event.target.classList.contains('recipes-button')) {
    displayRecipesPage();
  } else if (event.target.classList.contains('my-pantry-button')) {
    userRecipes = generateRecipes(user.favoriteRecipes);
    clearInnerHTML('user-recipes');
    // displayRecipeCards(userRecipes, 'pantry-body');
    displayUserPantry(userPantry, user, ingredientsData);
    clearInnerHTML('user-recipes');
    displayRecipeCards(userRecipes, 'user-recipes');
    displayPantryPage(userPantry, user, ingredientsData);
  } else if (event.target.classList.contains('white-star')) {
    addUserFavorite(event, user.favoriteRecipes); //turn into helper function
    event.target.src = "../assets/star-active.svg";
    event.target.classList.add('red-star')
    event.target.classList.remove('white-star')
    // userRecipes = generateRecipes(user.favoriteRecipes);
    // displayRecipeCards(userRecipes, 'pantry-body');
    // displayUserPantry(userPantry, user, ingredientsData);
    // clearInnerHTML('user-recipes');
    // displayRecipeCards(userRecipes, 'user-recipes');
    // displayUserPantry();
  } else if (event.target.classList.contains('red-star')) {
    removeUserFavorite(event, user.favoriteRecipes); //turn into helper function
    event.target.src = "../assets/star.svg";
    event.target.classList.add('white-star')
    event.target.classList.remove('red-star')
    // userRecipes = generateRecipes(user.favoriteRecipes);
    // displayRecipeCards(userRecipes, 'pantry-body');
    // displayUserPantry(userPantry, user, ingredientsData);
    // clearInnerHTML('user-recipes');
    // displayRecipeCards(userRecipes, 'user-recipes');
    // displayUserPantry();
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
  displayUserPantry(userPantry, user, ingredientsData);
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
  // const cardSection = document.querySelector(`.${className}`);
  // cardSection.innerHTML = '';
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
        <p class="total-cost">Total Cost: $${calculateTotalCost(recipe).toFixed(2)}</p>
      </section>
    </article>`;
    document.querySelector(`.${className}`).insertAdjacentHTML('afterbegin', card);
    // document.querySelector(`.hidden-card-${className}`).innerHTML = ""; // query also in line 132
    //cardsBodySection.insertAdjacentHTML('afterbegin', card);

    displayHiddenIngredients(recipe, className); //refactor

    displayHiddenInstructions(recipe, className);

  })
}

function getIngredientCost(ingredient) {
  let cost = 0;
  ingredientsData.forEach(ingredientData => {
    if (ingredient.id === ingredientData.id) {
      cost = ingredientData.estimatedCostInCents;
    }
  })
  return (cost / 100);
}

function calculateTotalCost(recipe) {
  //returns total cost of recipe's ingredients in dollar amount
  let costs = [];
  recipe.ingredients.forEach(ingredient => {
    costs.push(getIngredientCost(ingredient));
  });
  let totalCost = costs.reduce((sum, num) => sum += num, 0);
  return totalCost; //changes to dollar amount
}






function displayUserPantry(pantry, user, ingData) {
  displayPantryLists(pantry, ingData);
  displayShoppingLists(pantry, user, ingData);
}

function clearInnerHTML(className) {
  document.querySelector(`.${className}`).innerHTML = '';
}

function displayPantryLists(pantry, ingredientsArray) {
  userPantrySection.innerHTML = '<h3>Pantry</h3>';
  pantry.pantry.forEach(function(item) {
    const list = `
        <li class="ingredient">${itemNameById(item.ingredient, ingredientsArray)}</li>
          <li class="amount">Qty: ${item.amount}</li>`;
    userPantrySection.insertAdjacentHTML('beforeend', list);
  })
}

function displayShoppingLists(pantry, user, ingredientsArray) {
  if (user.recipesToCook.length > 0) {
    pantry.checkPantry(user.recipesToCook[0]);
    userShoppingList.innerHTML = '<h3>Shopping List</h3>';
    pantry.shoppingList.forEach(function(item) {
      const list = `
          <li class="ingredient">${itemNameById(item.id, ingredientsArray)}</li>
            <li class="amount">Qty: ${item.quantity.amount} - ${item.quantity.unit}</li>`;
      userShoppingList.insertAdjacentHTML('beforeend', list);
    })
  }
}

function itemNameById(itemId, ingredientsArray) {
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

function displayHiddenIngredients(recipe, className) {
  recipe.ingredients.forEach(function(ingredient) {
    ingredient = `${getIngredientName(ingredient)}:
    ${ingredient.quantity.amount.toFixed(2)}
    ${ingredient.quantity.unit}</br>`
    updateHiddenCard(ingredient, className);
  });
}

function getIngredientName(ingredient) {
  //returns name of ingredient
  // use .find like in checkForIngredient
  let name;
  ingredientsData.forEach(ingredientData => {
    if (ingredient.id === ingredientData.id) {
      name = ingredientData.name;
    }
  })
  return name;
}

function displayHiddenInstructions(recipe, className) {
  recipe.instructions.forEach(function(instruction) {
    instruction = `${instruction.number}.
    ${instruction.instruction}</br>`
    updateHiddenCard(instruction, className);
  });
}

function updateHiddenCard(item, className) {

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
}



function showInputFinder(event) {
  let searchBarInput = event.target.value;
  let foundRecipes = user.searchRecipeByName(searchBarInput);
}

function showInputFinder(event) { //updated parameters in displayRecipeCards
  var searchBarInput = event.target.value;
  var foundRecipes = user.searchRecipeByName(searchBarInput);
  clearInnerHTML('user-recipes');
  displayRecipeCards(foundRecipes, 'user-recipes');
}

function addUserFavorite(event, userArray, ) {
  let card = event.target.closest('.recipe-card-to-cook') ||
  event.target.closest('.recipe-card')
  recipeData.forEach(recipe => {
    if (recipe.id === parseInt(card.dataset.id) && !userArray.includes(recipe)) {
      userArray.push(recipe)
    }
  })
}

function removeUserFavorite(event, userArray) {
  let card = event.target.closest('.recipe-card')
  userArray.forEach((recipe, index) => {
    if (recipe.id === parseInt(card.dataset.id)) {
      userArray.splice(index, 1)
    }
  })
  if(!event.target.closest('.recipe-card-to-cook')) {
    let card = event.target.closest('.recipe-card')
    userArray.forEach((recipe, index) => {
      if(recipe.id === parseInt(card.dataset.id)) {
        userArray.splice(index, 1)
      }
    })
  }
}

function updateRecipesToCook(event) {
  clearInnerHTML('user-recipes');
  addUserFavorite(event, user.recipesToCook);
  displayRecipeCards(userRecipes, 'user-recipes');
  displayRecipeToCook();
  clearInnerHTML('missing-ingredients');
  displayShoppingLists(userPantry, user, ingredientsData);
  }

function displayRecipeToCook() {
  // clearInnerHTML('user-recipes');
  const card = `
  <article class="recipe-card-to-cook" data-id="${user.recipesToCook[0].id}">
  <img class="white-star" src="../assets/star.svg">
  <img class="red-star hidden" src="../assets/star-active.svg">
    <section class="hidden-card-to-cook">
    </section>
    <section class="displayed-card">
      <img class="recipe-img" src=${user.recipesToCook[0].image}>
      <p class="recipe-to-cook-name">${user.recipesToCook[0].name}</p>
      <p class="recipe-to-cook-text">Recipe To Cook</p>
    </section>
  </article>`
  document.querySelector(`.user-recipes`).insertAdjacentHTML('afterbegin', card);
  displayHiddenIngredients(user.recipesToCook[0], 'to-cook'); //refactor
  displayHiddenInstructions(user.recipesToCook[0], 'to-cook');
}
