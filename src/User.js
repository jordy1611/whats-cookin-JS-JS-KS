// let ingredientsData = require('../data/ingredients');

class User {
  constructor({name, id, pantry}) {
    this.name = name;
    this.id = id;
    this.pantry = pantry;
    this.recipesToCook = [];
    this.favoriteRecipes = [];
  }

  addFavoriteRecipes(recipe) {
    this.favoriteRecipes.push(recipe);
  }

  removeFavoriteRecipes(recipe) {
    let removeRecipe = this.favoriteRecipes.indexOf(recipe);
    this.favoriteRecipes.splice(removeRecipe, 1);
  }

  addRecipeToCook(recipe) {
    this.recipesToCook.push(recipe)
  }

  filterFavoriteRecipes(tag) {
    return this.favoriteRecipes.filter(recipe => {
      return recipe.tags.includes(tag)
    })
  }

  filterRecipesToCook(tag) {
    return this.recipesToCook.filter(recipe => {
      return recipe.tags.includes(tag)
    })
  }

  filterIngredientData() {
    return ingredientsData.filter(data => {
      if (data.id && data.name && data.estimatedCostInCents) {
        return true;
      }
    })
  }

  searchRecipeByName(input) {
    let ingredients = this.filterIngredientData()
    let searchedIngriedients = ingredients.reduce((acc, ingredient) => {
      if (ingredient.name.includes(input)) {
        acc.push(ingredient.id)
      }
      return acc
    }, [])
    let searchedRecipes = this.favoriteRecipes.filter(recipe => {
      console.log("HERE")
      let recipeIng = recipe.ingredients.filter(ingredient => {
        return searchedIngriedients.includes(ingredient.id)
      })
      console.log('NAMES', recipe.name.includes(input))
      if (recipe.name.includes(input) || recipeIng.length > 0) {

        return recipe
      }
    })
    return searchedRecipes;
  }
}












if (typeof module !== 'undefined') {
  module.exports = User;
}
