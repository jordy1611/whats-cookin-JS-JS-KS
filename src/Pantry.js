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

  // ingredientDisplay(ingredient, recipe) {
  //   let updateDisplayItem = {
  //     id: ingredient.id,
  //     amount: ingredient.quantity.amount
  //   }
  //   return updateDisplayItem;
  // }
  //^^^^^^^^^ Didnt need after changes to user class 
  
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
  //   for (let i = 0; i < recipe.ingredients; i++) {
  //     for (let y = 0; y < this.pantry; y++) {
  //       if (recipe.ingredient[i].id === this.pantry[y].ingredient) {
  //         this.pantry[y].amount -= recipe.ingredient[i].quantity.amount;
  //         if (this.pantry[y].amount < 0) {
  //           this.pantry[y].amount *= (- 1);
  //           this.addToShoppingList.push(this.pantry[y]);
  //           this.pantry.splice([y], 1);
  //         }
  //       }
  //     }
  //   }
  // }

  removeFromPantry(recipe) {
    let index = this.pantry.ingredient.indexOf(recipe.ingredient.id);
    this.pantry.splice(index, 1);
  }

  returnShoppingList() {
    return this.shoppingList;
  }

  returnPantry() {
    return this.pantry;
  }
}

if (typeof module !== 'undefined') {
  module.exports = Pantry;
}
