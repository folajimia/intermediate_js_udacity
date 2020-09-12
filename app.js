/*eslint-env browser*/

// Create Dino Constructor

function Dino(species, weight, height, diet, where, when, fact) {
  this.species = species;
  this.weight = weight;
  this.height = height;
  this.diet = diet;
  this.where = where;
  this.when = when;
  this.fact = fact;
}

// Create Dino Objects
//const dinos = require("/Users/fadekoya/udaProjectRepo/intermediate_js_udacity/dino.json");

fetch("dino.json")
  .then(response => response.json())
  .then(dinoData => {
    let uniqueDino = [];
    uniqueDino = dinoData.Dinos.map(
      dino =>
        new Dino(
          dino.species,
          dino.weight,
          dino.height,
          dino.diet,
          dino.where,
          dino.when,
          dino.fact
        )
    );
    //return uniqueDino;

    // Generate Tiles for each Dino in Array
    let dinoTileInfos = uniqueDino;
    let humanTileInfo = getHumanData();

    dinoTileInfos.splice(4, 0, humanTileInfo);

    //  Add tiles to DOM
    function addTilesToDOM(humanName) {
      let grid = document.getElementById("grid");
      dinoTileInfos.map(dino => {
        let tile = document.createElement("div");
        let title = document.createElement("h3");
        let fact = document.createElement("p");
        let image = document.createElement("img");

        // tile to grid
        tile.className = "grid-item";

        // create tile header
        title.className = "h3";
        if (dino.species) {
          title.innerHTML = dino.species;
        } else {
          title.innerHTML = humanName;
        }
        // add facts to tile
        fact.className = "p";
        let facts = dino.fact;
        let randomFact = "";

        if (facts) {
          randomFact = facts[Math.floor(Math.random() * facts.length)];
        }
        if (dino.species == "Pigeon") {
          fact.innerHTML = dino.fact[0];
        } else {
          fact.innerHTML = randomFact;
        }
        // add image to tile
        image.className = "img";
        if (dino.species) {
          image.src = `./images/${dino.species.toLowerCase()}.png`;
        } else {
          image.src = `./images/${human.image}`;
        }

        tile.appendChild(title);
        tile.appendChild(fact);
        tile.appendChild(image);
        grid.appendChild(tile);
      });
    }

    const aDinoObject = uniqueDino;
    aDinoObject.map(dino => {
      // Create Dino Compare Method 1
      // NOTE: Weight in JSON file is in lbs, height in inches.

      const compareWeight = function () {
        if (human.weight < aDinoObject.weight) {
          return `${aDinoObject.species} weighs ${
            aDinoObject.weight - human.weight
          } more than ${human.name}!`;
        } else if (human.weight > aDinoObject.weight) {
          return `${human.name} weighs ${
            human.weight - aDinoObject.weight
          } more than ${dino.species}`;
        } else {
          return `${human.name} and ${aDinoObject.species} weigh the same! wow!. i almost could not belive it`;
        }
      };

      // Create Dino Compare Method 2
      // NOTE: Weight in JSON file is in lbs, height in inches.

      const compareHeight = function () {
        if (human.height < aDinoObject.height) {
          return `${aDinoObject.species} is taller than ${human.name} by ${
            aDinoObject.height - human.height
          } ft !`;
        } else if (human.height > aDinoObject.height) {
          return `${human.name} is taller than ${dino.species} by ${
            human.weight - aDinoObject.weight
          }! `;
        } else {
          return `${human.name} and ${aDinoObject.species} are as tall as each other, who would have thot!`;
        }
      };

      // Create Dino Compare Method 3
      // NOTE: Weight in JSON file is in lbs, height in inches.

      const compareDiet = function () {
        if (human.diet === "Carnivor" && aDinoObject.diet === "Carnivor") {
          return `${aDinoObject.species} and ${human.name} but love meat`;
        } else if (
          human.diet === "herbavor" &&
          aDinoObject.diet === "herbavor"
        ) {
          return `${human.name} and ${dino.species} are Vegetarians`;
        } else {
          return `${human.diet} and ${aDinoObject.diet} have different diets , no suprise here`;
        }
      };
    });

    //Hide form from screen
    function toggleEntryForm() {
      const HideForm = document.getElementById("dino-compare");
      HideForm.classList.add("hide");
    }

    //On button click, prepare and display infographic
    const compareDinos = document.getElementById("btn");
    compareDinos.addEventListener("click", function () {
      const human = getHumanData();

      // Remove form from screen
      toggleEntryForm();
      // Add tiles to DOM
      addTilesToDOM(human.name);
    });
  });

// Use IIFE to get human data from form
// Create Human Object

function getHumanData() {
  const human = (function () {
    const name = document.getElementById("name").value;
    const heightFeet = document.getElementById("feet").value;
    const heightInches = document.getElementById("inches").value;
    const weight = document.getElementById("weight").value;
    const diet = document.getElementById("diet").value;
    const image = "human.png";

    function getName() {
      return name;
    }

    function getHeightFeet() {
      return heightFeet;
    }

    function getHeightInches() {
      return heightInches * 0.083;
    }

    function getHeight() {
      return getHeightFeet() + getHeightInches();
    }

    function getWeight() {
      return weight;
    }

    function getDiet() {
      return diet;
    }

    function getImage() {
      return image;
    }

    return {
      name: getName(),
      height: getHeight(),
      weight: getWeight(),
      diet: getDiet(),
      image: getImage()
    };
  })();

  return human;
}
