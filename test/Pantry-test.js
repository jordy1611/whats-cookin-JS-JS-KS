const chai = require('chai');
const expect = chai.expect;

const Pantry = require('../src/Pantry');
const User = require('../src/User');
const Recipe = require('../src/Recipe');

describe('Pantry', () => {
  let userPantry;
  let user;
  
  beforeEach(function () {
    user = new User(
      {
        "name": "Sara",
        "id": 1,
        "pantry": [
          {
            "ingredient": 1,
            "amount": 4
          },
          {
            "ingredient": 33,
            "amount": 4
          },
          {
            "ingredient": 45,
            "amount": 10
          },
          {
            "ingredient": 22,
            "amount": 5
          }]
      });
      
    recipe1 = new Recipe(
      {
        "id": 595736,
        "image": "https://spoonacular.com/recipeImages/595736-556x370.jpg",
        "ingredients": [
          {
            "id": 1,
            "quantity": {
              "amount": 1.5,
              "unit": "c"
            }
          },
          {
            "id": 33,
            "quantity": {
              "amount": 0.5,
              "unit": "tsp"
            }
          },
          {
            "id": 45,
            "quantity": {
              "amount": 1,
              "unit": "large"
            }
          },
          {
            "id": 22,
            "quantity": {
              "amount": 0.5,
              "unit": "c"
            }
          }
        ],
        "instructions": [
          {
            "instruction": "Boil eggs add stuff, eat stuff",
            "number": 1
          }
        ],
        "name": "egg salad",
        "tags": [
          "hor d'oeuvre"
        ]
      });
    recipe2 = new Recipe(
      {
        "id": 595736,
        "image": "https://spoonacular.com/recipeImages/595736-556x370.jpg",
        "ingredients": [
          {
            "id": 99,
            "quantity": {
              "amount": 1.5,
              "unit": "c"
            }
          },
          {
            "id": 20,
            "quantity": {
              "amount": 0.5,
              "unit": "tsp"
            }
          },
          {
            "id": 1,
            "quantity": {
              "amount": 1,
              "unit": "large"
            }
          },
          {
            "id": 56,
            "quantity": {
              "amount": 0.5,
              "unit": "c"
            }
          }
        ],
        "instructions": [
          {
            "instruction": "cut me up and eat",
            "number": 1
          }
        ],
        "name": "waterMelon",
        "tags": [
          "hor d'oeuvre"
        ]
      })
    user.addRecipeToCook(recipe2);
    userPantry = new Pantry(user);
    newIngredient = {name : 'lettuce', id : 88};
  });

  it('should be a function', () => {
    expect(Pantry).to.be.a('function');
  });
  
  it('should be an instance of Card', () => {
    expect(userPantry).to.be.an.instanceof(Pantry);
  });
  
  it('should have a pantry property with an array of a users pantry', () => {
    expect(userPantry.pantry).to.be.an('array').with.a.lengthOf(4);
  });

  it('should store an instance of recipe we want to make', () => {
    expect(userPantry.recipe[0]).to.be.an.instanceof(Recipe);
  });

  it('should be able to check if user has enough ingredients to make recipe', () => {
    expect(userPantry.checkPantry(recipe1)).to.deep.equal(true);
  });

  it('should return false if user does not have all ingredients to make recipe', () => {
    expect(userPantry.checkPantry(recipe2)).to.deep.equal(false);
  });

  it('should return undefined if invalid information passed in', () => {
    expect(() => userPantry.checkPantry(test)).to.throw(ReferenceError, /test is not defined/);
  });

  it('should have an array of needed ingredients that is empty by default', () => {
    expect(userPantry.shoppingList).to.be.an('array').with.a.lengthOf(0);
  });

  it('should list additional ingredients user needs to make recipe', () => {
    userPantry.checkPantry(recipe2);
    expect(userPantry.shoppingList).to.be.an('array').with.a.lengthOf(3);
  });

  // it.skip('should check if pantry ingrendient amount is enough to make recipe for each ingredient'{

  // });

  // it.skip('should adjust recipe ammount if pantry has some ingredient but not enough' {

  // });

  // it.skip('should adjust pantry if recipe is cooked and reduce pantry.ingredient.amount appropriatlly'{

  // })

  it('should return shoppingList', () => {
    userPantry.checkPantry(recipe2);
    expect(userPantry.returnShoppingList()).to.be.an('array').with.a.lengthOf(3);
  })

  it('should return the users pantry', () => {
    expect(userPantry.returnPantry()).to.be.an('array').with.a.lengthOf(4);
  })

  it('should be able to add item to this.pantry', () => {
    userPantry.addToPantry(newIngredient, 5);
    expect(userPantry.pantry).to.be.an('array').with.a.lengthOf(5);
  })
});

