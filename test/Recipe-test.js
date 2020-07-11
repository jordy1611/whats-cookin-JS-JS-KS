const chai = require('chai');
const expect = chai.expect;

const Recipe = require('../src/Recipe.js');
const newRecipe = require('../data/recipes.js');
describe("Recipe", function () {
  let recipe, ingredient1, ingredient2, ingredient3, instruction1, instruction2, instruction3;
//need to creat sample ingredients data
  before(function () {
    ingredient1 = {'id': 20081, 'quantity': {'amount': 1.5, 'unit': 'c'}};
    ingredient2 = {'id': 18372, 'quantity': {'amount': 0.5, 'unit': 'tsp'}};
    ingredient3 = {'id': 1123, 'quantity': {'amount': 1, 'unit': 'large'}};
    instruction1 = {'instruction': 'In a large mixing bowl, whisk together the dry ingredients (flour, pudding mix, soda and salt). Set aside.In a large mixing bowl of a stand mixer, cream butter for 30 seconds. Gradually add granulated sugar and brown sugar and cream until light and fluffy.', 'number': 1};
    instruction2 = {'instruction': 'Add egg and vanilla and mix until combined.', 'number': 2};
    instruction3 = {'instruction': 'Add dry ingredients and mix on low just until incorporated. Stir in chocolate chips.Scoop the dough into 1,5 tablespoon size balls and place on a plate or sheet. Cover with saran wrap and chill at least 2 hours or overnight.When ready to bake, preheat oven to 350 degrees.', 'number': 3};
    recipe = new Recipe(
    {'id': 595736,
    'image': 'https://spoonacular.com/recipeImages/595736-556x370.jpg',
    'ingredients': [ingredient1, ingredient2, ingredient3],
    'instructions': [instruction1, instruction2, instruction3],
    'name': 'Loaded Chocolate Chip Pudding Cookie Cups',
    'tags': ['antipasti', 'starter', 'snack', 'appetizer']}
    );
  });

  //create broken recipes for sad path tests

  it("should be a function", function() {
    expect(Recipe).to.be.a("function");
  });

  it("should be an instance of Recipe", function() {
    expect(recipe).to.be.an.instanceOf(Recipe);
  });

  it('should have an id', function() {
    expect(recipe.id).to.equal(595736);
  });


  it('should have an id of 0 if no id is entered', function() {
    const recipeNoId = new Recipe(
    {
    'image': 'https://spoonacular.com/recipeImages/595736-556x370.jpg',
    'ingredients': [ingredient1, ingredient2, ingredient3],
    'instructions': [instruction1, instruction2, instruction3],
    'name': 'Loaded Chocolate Chip Pudding Cookie Cups',
    'tags': ['antipasti', 'starter', 'snack', 'appetizer']}
    );
    expect(recipeNoId.id).to.equal(0)
  });
  
  it('should have an image link', function() {
    expect(recipe.image).to.equal('https://spoonacular.com/recipeImages/595736-556x370.jpg');
  });

  it('should have a defualt image link if no image is entered', function() {
    const recipeNoImage = new Recipe(
    {'id': 595736,
    'ingredients': [ingredient1, ingredient2, ingredient3],
    'instructions': [instruction1, instruction2, instruction3],
    'name': 'Loaded Chocolate Chip Pudding Cookie Cups',
    'tags': ['antipasti', 'starter', 'snack', 'appetizer']}
    );
    expect(recipeNoImage.image).to.equal('../assets/defaultRecipeImage.jpg');

  // it('should have an image link that is a string', function() {
  //   expect(recipe.image).to.be.a('string');
  });

  it('should have a list of ingredients', function() {
    expect(recipe.ingredients).to.deep.equal([ingredient1, ingredient2, ingredient3]);
    expect(recipe.ingredients.length).to.equal(3);
  });

  // it('should have a list of ingredients that is an array of objects', function() {
  //   expect(recipe.ingredients).to.be.an('array');
  //   expect(recipe.ingredients[0]).to.be.an('object');
  // });

  it('should have a list of instructions', function() {
    expect(recipe.instructions).to.deep.equal([instruction1, instruction2, instruction3]);
    // expect(recipe.instructions.length).to.equal(3);
  });

  // it('should have a list of instructions that is an array of objects', function() {
  //   expect(recipe.instructions).to.be.an('array');
  //   expect(recipe.instructions[0]).to.be.an('object');
  // });

  it('should have a name', function() {
    expect(recipe.name).to.equal('Loaded Chocolate Chip Pudding Cookie Cups');
  });

  it('should have a default name when no name is entered', function() {
    const recipeNoName = new Recipe(
    {'id': 595736,
    'image': 'https://spoonacular.com/recipeImages/595736-556x370.jpg',
    'ingredients': [ingredient1, ingredient2, ingredient3],
    'instructions': [instruction1, instruction2, instruction3],
    'tags': ['antipasti', 'starter', 'snack', 'appetizer']}
    );
    expect(recipeNoName.name).to.equal('No Name');
  });
  // it('should have a name that is a string', function() {
  //   expect(recipe.name).to.be.a('string');
  // });

  it('should have a list of tags', function() {
    expect(recipe.tags).to.deep.equal(['antipasti', 'starter', 'snack', 'appetizer']);
  });

  // it('should have a list of tags that is an array of strings', function() {
  //   expect(recipe.tags).to.be.an('array');
  //   expect(recipe.tags[0]).to.be.a('string');
  // });

  it('should return an ingredient\'s name', function(){
    expect(recipe.getIngredientName(ingredient1)).to.equal('wheat flour');
  });

  it('should return a different ingredient\'s name', function(){
    expect(recipe.getIngredientName(ingredient3)).to.equal('eggs');
  });

  // it('should return an ingredient\'s name as a string', function() {
  //   expect(recipe.getIngredientName(ingredient1)).to.be.a('string');
  // });

  it('should return an ingredient\'s cost', function(){
    expect(recipe.getIngredientCost(ingredient1)).to.equal(1.42);
  });

  it('should return no cost if ingredient has no id', function(){
    const badIngredient = {"estimatedCostInCents": 205}
    expect(recipe.getIngredientCost(badIngredient).to.equal(0));
  });

  //what if no cost

  // it('should return an ingredient\'s cost as a number', function() {
  //   expect(recipe.getIngredientCost(ingredient1)).to.be.a('number');
  // });

  it('should calculate total cost of the recipe', function() {
    expect(recipe.calculateTotalCost()).to.equal(11.96);
  });
  //what if ingredient price and/or amount is missing

  // it('should return total cost as a number', function() {
  //   expect(recipe.calculateTotalCost()).to.be.a('number');
  // });

  it('should return its own instructions', function() {
    expect(recipe.returnInstructions()).to.deep.equal([instruction1, instruction2, instruction3]);
    expect(recipe.returnInstructions().length).to.equal(3);
  });

  //what if ingredients are missing?

  // it('should return its own instructions as an array of objects', function() {
  //   expect(recipe.returnInstructions()).to.be.an('array');
  //
  //   var instructions = recipe.returnInstructions();
  //   expect(instructions[0]).to.be.an('object');
  // });

  it('should return its own ingredients', function() {
    expect(recipe.returnIngredients()).to.deep.equal([ingredient1, ingredient2, ingredient3]);
    expect(recipe.returnIngredients().length).to.equal(3);
  });

  // it('should return its own ingredients as an array of objects', function() {
  //   expect(recipe.returnIngredients()).to.be.an('array');
  //
  //   var ingredients = recipe.returnIngredients();
  //   expect(ingredients[0]).to.be.an('object');
  // });

  it('should check if it includes a specific ingredient', function() {
    expect(recipe.checkForIngredient(ingredient1)).to.equal(true);
  });

  it('should check if it does not include a specific ingredient', function() {
    const ingredient4 = {"id": 19335, "name": "sucrose", "estimatedCostInCents": 902};
    expect(recipe.checkForIngredient(ingredient4)).to.equal(false);
  });

  it('should check if it includes a specific tag', function() {
    let tag = 'antipasti';
    expect(recipe.checkForTag(tag)).to.equal(true);
  });

  it('should check if it does not include a specific tag', function() {
    let tag = 'salad';
    expect(recipe.checkForTag(tag)).to.equal(false);
  });
});
