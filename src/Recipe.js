// const ingredientsData = require('../data/ingredients.js');

class Recipe {
  constructor({id, image, ingredients, instructions, name, tags}) {
    this.id = id || 0;
    this.image = image || '../assets/defaultRecipeImage.jpg';
    this.ingredients = ingredients;
    this.instructions = instructions;
    this.name = name || 'No Name';
    this.tags = tags;
  }
}

if (typeof module !== 'undefined') {
  module.exports = Recipe;
}
