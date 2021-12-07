// Write your JavaScript code here!

// const { formSubmission } = require("./scriptHelper");

// const { formSubmission } = require("./scriptHelper");

// const { myFetch, addDestinationInfo } = require("./scriptHelper");

window.addEventListener("load", function() {
    let document = window.document;
    let pilotNameInput = document.querySelector("input[name = pilotName]");
    let copilotNameInput = document.querySelector("input[name = copilotName]"); 
    let fuelLevelInput = document.querySelector("input[name = fuelLevel]");
    let cargoMassInput= document.querySelector("input[name = cargoMass]");
    let  list =  document.getElementById("faultyItems");
          
    let form = document.querySelector("form");
    form.addEventListener("submit", function(event) {
   
       
            if (pilotNameInput.value === ""|| copilotNameInput.value === "" || fuelLevelInput.value === "" || cargoMassInput.value === ""){
                alert ("All fields are required!");
                event.preventDefault();
            }  
            else if (isNaN(pilotNameInput.value) === false || isNaN(copilotNameInput.value) === false){
                alert ("Pilot & co-pilot names should be strings.")
                event.preventDefault();
            }                  
            else if (isNaN(fuelLevelInput.value) === true || isNaN(cargoMassInput.value) === true){
                alert("Fuel level & cargo mass should be numbers.")
                event.preventDefault();
            }
            formSubmission(document, list, pilotNameInput.value, copilotNameInput.value, fuelLevelInput.value, cargoMassInput.value)
            event.preventDefault();
        });

   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse = myFetch();
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);

    let pickedPlanet = pickPlanet(listedPlanets);
    addDestinationInfo(window.document, pickedPlanet.name, pickedPlanet.diameter, pickedPlanet.star, pickedPlanet.distance, pickedPlanet.moons, pickedPlanet.image)
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
   })
   
});

