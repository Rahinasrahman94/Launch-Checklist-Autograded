// Write your JavaScript code here!
window.addEventListener("load", function () {
  let form = document.getElementById("launchForm");
  let pilot = document.querySelector("input[name=pilotName]");
  let copilot = document.querySelector("input[name=copilotName]");
  let fuel = document.querySelector("input[name=fuelLevel]");
  //let document = this.document.getElementById("launchForm");
  let list = document.getElementById("faultyItems");
  let cargo = document.querySelector("input[name=cargoMass]");
  let button = document.getElementById("formSubmit");
  button.addEventListener("click", function (event) {
    event.preventDefault();
    formSubmission(
      document,
      list,
      pilot.value,
      copilot.value,
      fuel.value,
      cargo.value
    );
  });
  let listedPlanets;
  // Set listedPlanetsResponse equal to the value returned by calling myFetch()
  let listedPlanetsResponse = myFetch();
  listedPlanetsResponse
    .then(function (result) {
      listedPlanets = result;
      console.log(listedPlanets);
    })
    .then(function () {
      console.log(listedPlanets);
      // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
      let planet = pickPlanet(listedPlanets);
      //console.log(planet);
      addDestinationInfo(
        document,
        planet.name,
        planet.diameter,
        planet.star,
        planet.distance,
        planet.moons,
        planet.image
      );
    });
});
