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
  const missionTarget = document.getElementById("missionTarget");
  let content = "";
  console.log(imageUrl);
  content = `<h2>Mission Destination</h2>
                 <ol>
                     <li>Name:${name} </li>
                     <li>Diameter:${diameter} </li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth:${distance} </li>
                     <li>Number of Moons:${moons} </li>
                 </ol>
                 <img src = "${imageUrl}">`;
  missionTarget.innerHTML = content;
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
  event.preventDefault();
  if (
    validateInput(pilot) === "Empty" ||
    validateInput(copilot) === "Empty" ||
    validateInput(fuelLevel) === "Empty" ||
    validateInput(cargo) === "Empty"
  ) {
    alert("All fields are required!");
  } else if (
    validateInput(pilot) === "Is a Number" ||
    validateInput(copilot) === "Is a Number" ||
    validateInput(fuelLevel) === "Not a Number" ||
    validateInput(cargo) === "Not a Number"
  ) {
    alert("Invalid");
  } else {
    if (fuelLevel < 10000 && cargo > 10000) {
      const launchStatusCheck =
        this.document.getElementById("launchStatusCheck");
      const h2 = this.document.getElementById("launchStatus");
      h2.innerHTML = "Shuttle not ready for launch";
      h2.style.color = "red";
      console.log(h2);
      list.style = "visibility:visible";
      const pilotStatus = this.document.getElementById("pilotStatus");
      pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
      const copilotStatus = this.document.getElementById("copilotStatus");
      copilotStatus.innerHTML = `Co-Pilot ${copilot}  is ready for launch`;
      const fuelStatus = this.document.getElementById("fuelStatus");
      fuelStatus.innerHTML = ` Fuel Level is too low to launch`;
      const cargoStatus = this.document.getElementById("cargoStatus");
      cargoStatus.innerHTML = `Cargo mass  is too heavy for launch`;
    } else if (cargo > 10000 && fuelLevel > 10000) {
      alert("this is from cargo");
      const launchStatusCheck =
        this.document.getElementById("launchStatusCheck");
      const h2 = this.document.getElementById("launchStatus");
      h2.innerHTML = "Shuttle not ready for launch";
      h2.style.color = "red";
      console.log(h2);
      list.style = "visibility:visible";
      const pilotStatus = this.document.getElementById("pilotStatus");
      pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
      const copilotStatus = this.document.getElementById("copilotStatus");
      copilotStatus.innerHTML = `Co-Pilot ${copilot} is ready for launch`;
      const fuelStatus = this.document.getElementById("fuelStatus");
      fuelStatus.innerHTML = ` Fuel level high enough for launch`;
      const cargoStatus = this.document.getElementById("cargoStatus");
      cargoStatus.innerHTML = `Cargo mass too heavy for launch`;
    } else if (fuelLevel < 10000) {
      const launchStatusCheck =
        this.document.getElementById("launchStatusCheck");
      const h2 = this.document.getElementById("launchStatus");
      h2.innerHTML = "Shuttle not ready for launch";
      h2.style.color = "red";
      console.log(h2);
      list.style = "visibility:visible";
      const pilotStatus = this.document.getElementById("pilotStatus");
      pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
      const copilotStatus = this.document.getElementById("copilotStatus");
      copilotStatus.innerHTML = `Co-Pilot ${copilot} is ready for launch`;
      const fuelStatus = this.document.getElementById("fuelStatus");
      fuelStatus.innerHTML = ` Fuel level too low for launch`;
      const cargoStatus = this.document.getElementById("cargoStatus");
      cargoStatus.innerHTML = `Cargo mass low enough for launch`;
    } else {
      alert("this is from else");
      const launchStatusCheck =
        this.document.getElementById("launchStatusCheck");
      const h2 = this.document.getElementById("launchStatus");
      h2.innerHTML = "Shuttle is ready for launch";
      h2.style.color = "green";
      console.log(h2);
      list.style = "visibility:visible";
      const pilotStatus = this.document.getElementById("pilotStatus");
      pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
      const copilotStatus = this.document.getElementById("copilotStatus");
      copilotStatus.innerHTML = `Co-Pilot ${copilot} is ready for launch`;
      const fuelStatus = this.document.getElementById("fuelStatus");
      fuelStatus.innerHTML = `Fuel level high enough for launch`;
      const cargoStatus = this.document.getElementById("cargoStatus");
      cargoStatus.innerHTML = `Cargo mass low enough for launch`;
    }
  }
}
async function myFetch() {
  let planetsReturned;

  planetsReturned = await fetch(
    "https://handlers.education.launchcode.org/static/planets.json"
  ).then(function (response) {
    return response.json();
  });
  return planetsReturned;
}

function pickPlanet(planets) {
  let index = Math.floor(Math.random() * 6) + 1;
  let chooseplanet = planets[index];
  return chooseplanet;
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;
