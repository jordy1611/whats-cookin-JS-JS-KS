const chai = require('chai');
const expect = chai.expect;

const User = require('../src/User');
const Recipe = require('../src/Recipe');

describe('User', function() {
  let user;
  let recipe;

  beforeEach(function() {
    user = new User(
      {
        'name': 'Josh',
        'id': 1,
        'pantry': [
          {
            "ingredient": 11477,
            "amount": 4
          },
          {
            "ingredient": 11297,
            "amount": 4
          },
          {
            "ingredient": 1082047,
            "amount": 10
          },
          {
            "ingredient": 20081,
            "amount": 5
          }
        ]
      });

    recipe1 = new Recipe(
      {
        "id": 595736,
        "image": "https://spoonacular.com/recipeImages/595736-556x370.jpg",
        "ingredients": [
          {
            "id": 20081,
            "quantity": {
              "amount": 1.5,
              "unit": "c"
            }
          },
          {
            "id": 18372,
            "quantity": {
              "amount": 0.5,
              "unit": "tsp"
            }
          },
          {
            "id": 1123,
            "quantity": {
              "amount": 1,
              "unit": "large"
            }
          }
        ],
        "instructions": [
          {
            "instruction": "In a large mixing bowl, whisk together the dry ingredients (flour, pudding mix, soda and salt). Set aside.In a large mixing bowl of a stand mixer, cream butter for 30 seconds. Gradually add granulated sugar and brown sugar and cream until light and fluffy.",
            "number": 1
          },
          {
            "instruction": "Add egg and vanilla and mix until combined.",
            "number": 2
          },
          {
            "instruction": "Add dry ingredients and mix on low just until incorporated. Stir in chocolate chips.Scoop the dough into 1,5 tablespoon size balls and place on a plate or sheet. Cover with saran wrap and chill at least 2 hours or overnight.When ready to bake, preheat oven to 350 degrees.",
            "number": 3
          },
        ],
        "name": "Loaded Chocolate Chip Pudding Cookie Cups",
        "tags": [
          "antipasti",
          "starter",
          "snack",
        ]
      });

    recipe2 = new Recipe({
      "id": 678353,
      "image": "https://spoonacular.com/recipeImages/678353-556x370.jpg",
      "ingredients": [
        {
          "id": 1009016,
          "quantity": {
            "amount": 1.5,
            "unit": "cups"
          }
        },
        {
          "id": 9003,
          "quantity": {
            "amount": 2,
            "unit": ""
          }
        },
        {
          "id": 20027,
          "quantity": {
            "amount": 1,
            "unit": "tablespoon"
          }
        }
      ],
      "instructions": [
        {
          "instruction": "Season the pork chops with salt and pepper and grill or pan fry over medium high heat until cooked, about 3-5 minutes per side. (If grilling, baste the chops in the maple dijon apple cider sauce as you grill.)Meanwhile, mix the remaining ingredients except the apple slices, bring to a simmer and cook until the sauce thickens, about 2-5 minutes.Grill or saute the apple slices until just tender but still crisp.Toss the pork chops and apple slices in the maple dijon apple cider sauce and enjoy!",
          "number": 1
        }
      ],
      "name": "Maple Dijon Apple Cider Grilled Pork Chops",
      "tags": [
        "lunch",
        "main course",
        "main dish",
      ]
    }),

    recipe3 = new Recipe({
      "id": 412309,
      "image": "https://spoonacular.com/recipeImages/412309-556x370.jpeg",
      "ingredients": [
        {
          "id": 1002030,
          "quantity": {
            "amount": 4,
            "unit": "teaspoons"
          }
        },
        {
          "id": 19334,
          "quantity": {
            "amount": 8,
            "unit": "tablespoons"
          }
        },
        {
          "id": 1001,
          "quantity": {
            "amount": 2,
            "unit": "cups"
          }
        }
      ],
      "instructions": [
        {
          "instruction": "Mix the hot sauce, butter, mango habanero sauce, brown sugar, chili powder, garlic powder, onion powder, black pepper, cayenne pepper and seasoning salt in a bowl. Stir vigorously until completely combined.",
          "number": 1
        }
      ],
      "name": "Dirty Steve's Original Wing Sauce",
      "tags": [
        "sauce"
      ]
    });
  });


  it('should be a function', function() {
    expect(User).to.be.a('function');
  });

  it('should be an instance of User', function() {
    expect(user).to.be.an.instanceof(User);
  });

  it('should have an name', function() {
    expect(user.name).to.equal('Josh');
  })

  it('should have an id', function() {
    expect(user.id).to.equal(1);
  })

  it('should have an pantry', function() {
    expect(user.pantry).to.deep.equal([
      {
        "ingredient": 11477,
        "amount": 4
      },
      {
        "ingredient": 11297,
        "amount": 4
      },
      {
        "ingredient": 1082047,
        "amount": 10
      },
      {
        "ingredient": 20081,
        "amount": 5
      }
    ]);
  })

  it('should start with no favorite recipes', function() {
    expect(user.favoriteRecipes.length).to.equal(0);
  })

  it('should start with no recipes to cook', function() {
    expect(user.recipesToCook.length).to.equal(0);
  })

  it('should add a recipe to favorite recipes', function() {
    user.addFavoriteRecipes(recipe1);
    expect(user.favoriteRecipes).to.deep.equal([recipe1]);
  });

  it('should remove recipe from favorite recipes', function() {
    user.addFavoriteRecipes(recipe1);
    user.addFavoriteRecipes(recipe2);
    user.addFavoriteRecipes(recipe3);
    user.removeFavoriteRecipes(recipe2);
    expect(user.favoriteRecipes).to.deep.equal([recipe1, recipe3]);
  });

  it('should add a recipe to cook', function() {
    user.addRecipeToCook(recipe1);
    expect(user.recipesToCook).to.deep.equal([recipe1]);
  })

  it('should be able to filter favorite recipes by type', function() {
    user.addFavoriteRecipes(recipe1);
    user.addFavoriteRecipes(recipe2);
    user.addFavoriteRecipes(recipe3);
    expect(user.filterFavoriteRecipes('snack')).to.deep.equal([recipe1]);
  });

  it('should be able to filter recipes to cook by type', function() {
    user.addRecipeToCook(recipe1);
    user.addRecipeToCook(recipe2);
    user.addRecipeToCook(recipe3);
    expect(user.filterRecipesToCook('snack')).to.deep.equal([recipe1]);
  });

  it('should return favorite recipes by name', function() {
    user.addFavoriteRecipes(recipe1);
    user.addFavoriteRecipes(recipe2);
    user.addFavoriteRecipes(recipe3);
    expect(user.searchRecipeByName('Loaded Chocolate Chip Pudding Cookie Cups')).to.deep.equal([recipe1])
    expect(user.searchRecipeByName('Chocolate')).to.deep.equal([recipe1])
  })

  it('should return favorite recipes by ingredient', function() {
    user.addFavoriteRecipes(recipe1);
    user.addFavoriteRecipes(recipe2);
    user.addFavoriteRecipes(recipe3);
    expect(user.searchRecipeByName('eggs')).to.deep.equal([recipe1])
  })



  //if it is an empty array what happens
  //pass in a name that's not in the array should be empty

  //it ingredients

  //down the road not the whole string
});
