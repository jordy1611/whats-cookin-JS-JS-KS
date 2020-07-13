// const ingredients = require('../data/ingredients');
// const recipes = require('../data/recipes');
// const users = require('../data/users');
// const Recipe = require('./Recipe');
// const User = require('./User');
// const Pantry = require('./Pantry');

console.log('Hello World');

// const displayRecipes;
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
  hideElement('recipes-button');
}

const displayPantryPage = () => {
  displayElement('pantry-body');
  displayElement('recipes-button');
  hideElement('cards-body');
  hideElement('my-pantry-button');
}

function displayElement(className) {
  document.querySelector(`.${ className } `).classList.remove('hidden');
}
function hideElement(className) {
  document.querySelector(`.${ className } `).classList.add('hidden');
}

//helper functions
const convertShoppingList = (user, shoppingList, ingredients, recipe) => {
  //Loop through shoppingList to get id from each item in array.
  let ingredientArray = [];
  shoppingList.forEach(item => {
    // let itemIndex = ingredientData.id.indexOf(item.ingredient);
    //get ingredient name using recipe.getIngredientName
    recipe.getIngredientAmount(item);
    let ingredientArray.push({ name: recipe.getIngredientName(item), amount: recipe.getIngredientAmount(item)})  
  })
  return ingredientArray;
}

  // utilize get ingredientName from recipe class might need to add a method to return recipe quantity.

  // maybe .filter against ingredients array to return item or possibly indexOf.
  //push to array to be displayed or have Pantry.shoppingList update with new data.
  // should return correct data to have name and totalQuantity. 
  // use .map to create instance needed for displaying data correctly.
  /* Need to use shopping list to access id from ingredient data to display full ingredient to user.
  Maybe take in shoppingList and replace with a new array, should this be done in Pantry?
  Or since it is more of to display data is it better to do here, maybe able to write a function that can work universally to help with all classes.
  */
// 
//}

//display shoppingList ingredients, take in pantry instance as an argument.
//look through array and display ingredients needed to make a recipe that 
//the user doesnt have in their pantry
//innerText = loop ingredient[i].[this.pantry][y].ingredient
//       data ingred index pantry(to match id) index id

//display ingredints in pantry, need to display from ingredients data file
//can use this.pantry.ingredients to match id in ingredients array. iterate 
// over data or use .filter to get ingredient by id.
// Might also be able to do that as a method in pantry to return ingredient 
// maybe pass it in as an argument to match. Might also be easier to do on 
//script.