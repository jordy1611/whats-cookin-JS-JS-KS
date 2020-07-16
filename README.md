
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![LinkedIn][linkedin-shield]][linkedin-url]


<br />
<p align="center">
  <a href="https://github.com/jordy1611/whats-cookin-JS-JS-KS">
    <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimg.pngio.com%2Fchef-cooking-logo-clip-art-cook-free-transparent-png-clipart-cook-png-black-and-white-840_1015.png&f=1&nofb=1" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">What's Cookin</h3>

  <p align="center">
    <br />
    <a href="https://github.com/jordy1611/whats-cookin-JS-JS-KS"><strong>Explore the docs »</strong></a>
    <br />
    <a href="https://github.com/jordy1611/whats-cookin-JS-JS-KS/issues">Report Bug</a>
    ·
    <a href="https://github.com/jordy1611/whats-cookin-JS-JS-KS/issues">Request Feature</a>
  </p>
</p>

## Table of Contents

* [About the Project](#about-the-project)
* [Installation](#installation)
* [Usage](#usage)
* [Data Model](#data-model)
* [Roadmap](#roadmap)
* [Contributing](#contributing)
* [License](#license)
* [Main Contributors](#contributors)
* [Contact](#contact)
* [Acknowledgements](#acknowledgements)


<!-- ABOUT THE PROJECT -->
## About The Project

![Whats Cooking screenshot](assets/mainPage.png)


A site for recipe tracking where users can select their favorite recipes and choose a recipe to cook for the week.  A user is able to see ingredients in their individual pantry and make a shopping list of items to purchase to cook their favorite recipes.

### Installation

**Fork this repository:**


https://github.com/jordy1611/whats-cookin-JS-JS-KS.git

**Clone your forked repository**

`git clone` and the copied URL

**Change into the directory and install the project dependencies**

`cd` into directory and run `npm install` for dependencies



<!-- USAGE EXAMPLES -->
## Usage
* Users can hover over a recipe to see it's list of ingredients and instructions
![hovering gif](assets/hovering.gif)

* Users can favorite a recipe by clicking on the star in the top right corner. Favorite recipes will show up in the pantry page.
![favoriting gif](assets/favoriting.gif)

* Users can search for recipes based on name, ingredients or tags
![searching gif](assets/searching.gif)

* Users can select a recipe to cook by double clicking a recipe. It's remaining ingredients will be displayed in the missing ingredients section of my pantry.
![double clicking recipe](assets/recipeToCook.gif)

The details of this project are outlined in the <a href="https://frontend.turing.io/projects/whats-cookin.html" target="\__blank">project spec</a>.

<!-- DATA MODEL -->

## Data Model
### Users
```js
{
  "id": [number],
  "name": [string],
  "pantry": [array of objects with amount and ingredient id properties]
},
```

### Recipes
```js
{
  "ingredients" [array of objects with ingredients ids(connection to ingredients), ingredient names, and quantity data],
  "instructions": [array of objects with instructions properties and numbered steps],
  "name": [string],
  "tags": [array of strings representing info about the recipes]
}
```

### Ingredients
```js
{
  "estimatedCostInCents": [number],
  "id": [number -- connection to users and recipes],
  "name": [string]
}
```

### MVP
Fully functioning user class which create a user profile. The user profile includes: favorite recipes (add to / remove from the user’s favoriteRecipes), option to cook a recipe that week (add to user recipesToCook), method to filter user favoriteRecipes or recipesToCook by type, search any of their saved recipes by name or ingredient.

Fully functioning recipe class which creates recipe cards and stores all relevant recipe information. Users should be able to view a list of recipes. A user should be able to filter recipes by type / tag, should be able to search recipes by ingredients and a recipe should hold on to all its information (provided in the data file). It should also be able to get the cost of its ingredients and get its directions / instructions.

A fully functioning pantry class which holds all of the owner's ingredients and amount of ingredients. A user should be able to determine whether their pantry has enough ingredients to cook a given meal, determine the amount of ingredients still needed to cook a given meal (based on what’s in the pantry).

A fully functioning ui which can switch between a home page filled with recipe cards. A pantry page which lists all user ingredients and recommend recipes based on those ingredients.

<!-- ROADMAP -->
## Roadmap

See the [open issues](https://github.com/jordy1611/whats-cookin-JS-JS-KS/issues) for a list of proposed features (and known issues).


<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

* Fork the Project

* Create your Feature Branch (`git checkout -b feature/AmazingFeature`)

* Commit your Changes (`git commit -m 'Add some AmazingFeature'`)

* Push to the Branch (`git push origin feature/AmazingFeature`)

* Open a Pull Request


## Contact

* Jordy Shryock - jordy1611@gmail.com
* Joshua Sevy - joshuasevy@outlook.com
* Katy St Sauveur - katyrogowski@yahoo.com




<!-- ACKNOWLEDGEMENTS -->
## Acknowledgements
* [GitHub Emoji Cheat Sheet](https://www.webpagefx.com/tools/emoji-cheat-sheet)
* [Img Shields](https://shields.io)
* [Choose an Open Source License](https://choosealicense.com)
* [GitHub Pages](https://pages.github.com)
* [Font Awesome](https://fontawesome.com)
* [Unplash](https://unsplash.com/)


<!-- MARKDOWN LINKS & IMAGES -->

[contributors-shield]: https://img.shields.io/github/contributors/jordy1611/whats-cookin-JS-JS-KS.svg?style=flat-square
[contributors-url]: https://github.com/jordy1611/whats-cookin-JS-JS-KS/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/jordy1611/whats-cookin-JS-JS-KS.svg?style=flat-square
[forks-url]: https://github.com/jordy1611/whats-cookin-JS-JS-KS/network/members
[stars-shield]: https://img.shields.io/github/stars/jordy1611/whats-cookin-JS-JS-KS.svg?style=flat-square
[stars-url]: https://github.com/jordy1611/whats-cookin-JS-JS-KS/stargazers
[issues-shield]: https://img.shields.io/github/issues/jordy1611/whats-cookin-JS-JS-KS.svg?style=flat-square
[issues-url]: https://github.com/jordy1611/whats-cookin-JS-JS-KS/issuesÂ
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=flat-square&logo=linkedin&colorB=555


<!-- [linkedin-url]: https://linkedin.com/in/linkHere -->
[linkedin-url]: https://www.linkedin.com/in/jordan-shryock-6a48b9113/

<!-- [product-screenshot]: images/screenshot.png -->
