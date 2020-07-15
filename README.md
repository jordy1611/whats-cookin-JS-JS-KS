
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![LinkedIn][linkedin-shield]][linkedin-url]


<br />
<p align="center">
  <a href="https://github.com/jordy1611/whats-cookin-JS-JS-KS">
    <img src="images/logo.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">What's Cookin</h3>

  <p align="center">
    <br />
    <a href="https://github.com/jordy1611/whats-cookin-JS-JS-KS"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/jordy1611/whats-cookin-JS-JS-KS">View Demo</a>
    ·
    <a href="https://github.com/jordy1611/whats-cookin-JS-JS-KS/issues">Report Bug</a>
    ·
    <a href="https://github.com/jordy1611/whats-cookin-JS-JS-KS/issues">Request Feature</a>
  </p>
</p>

## Table of Contents

* [About the Project](#about-the-project)
* [Getting Started](#getting-started)
  * [Prerequisites](#prerequisites)
  * [Installation](#installation)
* [Usage](#usage)
* [Data Model](#data-model)
* [Roadmap](#roadmap)
* [Contributing](#contributing)
* [License](#license)
* [Contact](#contact)
* [Acknowledgements](#acknowledgements)


<!-- ABOUT THE PROJECT -->
## About The Project

![Whats Cooking screenshot](url)


<!-- GETTING STARTED -->
## Getting Started

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.
* npm
```sh
npm install npm@latest -g
```

### Installation

Clone the repo
```sh
git clone https://github.com/jordy1611/whats-cookin-JS-JS-KS.git
```

<!-- USAGE EXAMPLES -->
## Usage

Use this space to show useful examples of how a project can be used. Additional screenshots, code examples and demos work well in this space. You may also link to more resources.

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
 ..

<!-- ROADMAP -->
## Roadmap

See the [open issues](https://github.com/jordy1611/whats-cookin-JS-JS-KS/issues) for a list of proposed features (and known issues).


<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request


<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.


<!-- CONTACT -->
## Contact

Your Name - [@your_twitter](https://twitter.com/your_username) - email@example.com
Joshua Sevy - joshuasevy@outlook.com

Project Link: [https://github.com/jordy1611/whats-cookin-JS-JS-KS](https://github.com/jordy1611/whats-cookin-JS-JS-KS)



<!-- ACKNOWLEDGEMENTS -->
## Acknowledgements
* [GitHub Emoji Cheat Sheet](https://www.webpagefx.com/tools/emoji-cheat-sheet)
* [Img Shields](https://shields.io)
* [Choose an Open Source License](https://choosealicense.com)
* [GitHub Pages](https://pages.github.com)
* [Font Awesome](https://fontawesome.com)


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
[linkedin-url]: https://www.linkedin.com/in/jordan-shryock-6a48b9113/
<!-- [product-screenshot]: images/screenshot.png -->

