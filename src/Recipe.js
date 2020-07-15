//const ingredientsData = require('../data/ingredients.js');

class Recipe {
  constructor({id, image, ingredients, instructions, name, tags}) {
    this.id = id || 0;
    this.image = image || '../assets/defaultRecipeImage.jpg';
    this.ingredients = ingredients; //update with names from recipe data file
    this.instructions = instructions;
    this.name = name || 'No Name'// ;
    this.tags = tags;
  }

  getIngredientName(ingredient) { 
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

  getIngredientCost(ingredient) { 
    //returns cost of ingredient in dollar amount
    // return 0
    // use .find like in checkForIngredient
    let cost = 0;
    ingredientsData.forEach(ingredientData => {
      if (ingredient.id === ingredientData.id) {
        cost = ingredientData.estimatedCostInCents;
      }
    })
    return (cost / 100);
  }

  calculateTotalCost() { 
    //returns total cost of recipe's ingredients in dollar amount
    let costs = [];
    this.ingredients.forEach(ingredient => {
      costs.push(this.getIngredientCost(ingredient));
    });
    let totalCost = costs.reduce((sum, num) => sum += num, 0);
    return totalCost; //changes to dollar amount
  }

  returnInstructions() { 
    //returns recipe's instructions as an array of objects
    return this.instructions;
  }

  returnIngredients() { 
    //returns recipe's ingredients as an array of objects only 
    // including id and amount
    return this.ingredients
  }

  checkForIngredient(ingredient) {
    //by name //returns true if recipe contains ingredient
    let test = this.ingredients.find(ingredientData => ingredientData.id === ingredient.id);
    return (test !== undefined); 
    //allows for both types of ingredient objects to be compared
    // return this.ingredients.includes(ingredient); 
    //simpler but may be limited to what's passed in
  }

  checkForTag(tag) { 
    //returns true if recipe contains tag, pass tag in as string
    return this.tags.includes(tag)
  }
}

if (typeof module !== 'undefined') {
  module.exports = Recipe;
}
