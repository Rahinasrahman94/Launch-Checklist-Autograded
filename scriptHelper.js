// Write your helper functions here!
require("cross-fetch/polyfill");

function addDestinationInfo(
  document,
  name,
  diameter,
  star,
  distance,
  moons,
  imageUrl
) {
  // Here is the HTML formatting for our mission target div.
  /*
                 <h2>Mission Destination</h2>
                 <ol>
                     <li>Name: </li>
                     <li>Diameter: </li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: </li>
                     <li>Number of Moons: </li>
                 </ol>
                 <img src="">
    */
}

function validateInput(testInput) {
  let result;
  if (testInput === "") {
    return "Empty";
  } else if (isNaN(testInput)) {
    return "Not a Number";
  } else {
    return "Is a Number";
  }
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargo) {
  if (
    validateInput(pilot) === "Empty" ||
    validateInput(copilot) === "Empty" ||
    validateInput(fuelLevel) === "Empty" ||
    validateInput(cargo) === "Empty"
  ) {
    alert("All fields are required!");
  }
  if (validateInput(pilot) === "Is a Number") {
    console.log(validateInput(pilot));
    alert("Pilot Name must be a string");
  }
  // if (validateInput(copilot) === "Is a Number") {
  //   alert("Co-Pilot Name must be a string");
  // }
  // if (validateInput(fuelLevel) === "Not a Number") {
  //   alert("Fuel Level value must be in Numbers");
  // }
  // if (validateInput(cargo) === "Not a Number") {
  //   alert("cargo value must be in Numbers");
  // }
}

async function myFetch() {
  let planetsReturned;

  planetsReturned = await fetch().then(function (response) {});

  return planetsReturned;
}

function pickPlanet(planets) {}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;
