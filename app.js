/*eslint-env browser*/

const jsdom = require("jsdom");
const { JSDOM } = jsdom;
global.document = new JSDOM(
  "/Users/fadekoya/udacitystudy/Javascript/index.html"
).window.document;

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
const dinos = require("/Users/fadekoya/udacitystudy/Javascript/dino.json");

//const pear = JSON.parse(dinos);
//var obj = JSON.parse(json).reduce((a, v) => { a[v.key] = v.value; return a; }, {});

dinos.Dinos.map(function (dino) {
  const aUniqueDino = new Dino(
    dino.species,
    dino.weight,
    dino.height,
    dino.diet,
    dino.where,
    dino.when,
    dino.fact
  );
  //console.log(aUniqueDino);
});

//console.log(dinos.Dinos);

// Create Human Object

const human = (function () {
  let name = document.getElementById("name");
  let heightFeet = document.getElementById("feet");
  let heightInches = document.getElementById("inches");
  let weight = document.getElementById("weight");
  let diet = document.getElementById("diet");

  function getName() {
    return name;
  }

  function getHeightFeet() {
    return heightFeet;
  }

  function getHeightInches() {
    return heightInches;
  }

  function getHeight() {
    return getHeightFeet() + "Feet " + getHeightInches() + " Inches";
  }

  function getWeight() {
    return weight;
  }

  function getDiet() {
    return diet;
  }

  return {
    Name: getName,
    Height: getHeight,
    Weight: getWeight,
    Diet: getDiet
  };
})();

console.log(human);

// Use IIFE to get human data from form

// Create Dino Compare Method 1
// NOTE: Weight in JSON file is in lbs, height in inches.

// Create Dino Compare Method 2
// NOTE: Weight in JSON file is in lbs, height in inches.

// Create Dino Compare Method 3
// NOTE: Weight in JSON file is in lbs, height in inches.

// Generate Tiles for each Dino in Array

// Add tiles to DOM

// Remove form from screen

// On button click, prepare and display infographic
// Create Dino Compare Method 3

const dinObject = aUniqueDino[i];
const compareWeight = function () {
  if (human.weight < dinObject.weight) {
    return `${dinObject.species} weighs ${
      dinObject.weight - human.weight
    } more than ${human.name}!`;
  } else if (human.weight > dinObject.weight) {
    return `${human.name} weighs ${human.weight - dinObject.weight} more than ${
      dino.species
    }`;
  } else {
    return `${human.name} and ${dinObject.species} weigh the same! wow!. i almost could not belive it`;
  }
};

const compareHeight = function () {
  if (human.height < dinObject.height) {
    return `${dinObject.species} is taller than ${human.name} by ${
      dinObject.height - human.height
    } ft !`;
  } else if (human.height > dinObject.height) {
    return `${human.name} is taller than ${dino.species} by ${
      human.weight - dinObject.weight
    }! `;
  } else {
    return `${human.name} and ${dinObject.species} are as tall as each other, who would have thot!`;
  }
};

const compareDiet = function () {
  if (human.diet === "Carnivor" && dinObject.diet === "Carnivor") {
    return `${dinObject.species} and ${human.name} but love meat`;
  } else if (human.diet === "herbavor" && dinObject.diet === "herbavor") {
    return `${human.name} and ${dino.species} are Vegetarians`;
  } else {
    return `${human.diet} and ${dinObject.diet} have different diets , no suprise here`;
  }
};
