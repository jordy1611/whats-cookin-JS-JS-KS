class Pantry {
  constructor(userObject) {
    this.pantry = userObject.pantry;
    this.recipe = userObject.recipesToCook;
    this.shoppingList = [];
  }

  checkPantry(recipe) {
    let hasIngredients;
    const pantryIngredients = this.pantry.reduce((acc, element) => {
      return {...acc, [element.ingredient] : element.amount};
    }, {})

    recipe.ingredients.forEach(ingredient => {
      if (!pantryIngredients.hasOwnProperty(ingredient.id)) {
        hasIngredients = false;
        this.addToShoppingList(ingredient);
      } else if (pantryIngredients[ingredient.id] < ingredient.quantity.amount) {
        hasIngredients = false;
        this.addToShoppingList(ingredient);
      } else {
        hasIngredients = true;
      }
    })
    return hasIngredients;
  }

  addToShoppingList(ingredient) {
    this.shoppingList.push(ingredient);
  }
  
  pantryIngredientAdjust(recipe) {
    recipe.ingredients.forEach(item => {
       let pantry = this.pantry.filter(ingredient => ingredient === item.id);
        pantry.amount -= item.quantity.amount;
       if (pantry.amount < 0) {
         pantry.amount *= (-1);
         this.addToShoppingList(pantry);
         this.removeFromPantry(recipe);
       }
    })
  }

  removeFromPantry(recipe) {
    let index = this.pantry.ingredient.indexOf(recipe.ingredient.id);
    this.pantry.splice(index, 1);
  }
}

if (typeof module !== 'undefined') {
  module.exports = Pantry;
}
