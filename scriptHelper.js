// Write your helper functions here!
require('isomorphic-fetch');



function addDestinationInfo(document, name, diameter, star, distance, moons, image) {
   // Here is the HTML formatting for our mission target div.
   let div = document.getElementById("missionTarget");
   div.innerHTML = `
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: ${name}</li>
                    <li>Diameter: ${diameter}</li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: ${distance}</li>
                    <li>Number of Moons: ${moons}</li>
                </ol>
                <img src="${image}">
   `
}


function validateInput(testInput) {
    
if (testInput === ""){
    return "Empty";
}
else if (isNaN(testInput) === true){
    return "Not a Number";
}
else { 
    return "Is a Number";
}
}

 
function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {    
    let pilotStatus = document.getElementById("pilotStatus");
    let copilotStatus = document.getElementById("copilotStatus"); 
    let fuelStatus = document.getElementById("fuelStatus");
    let cargoStatus = document.getElementById("cargoStatus");
    let h2 = document.getElementById("launchStatus");
    
   
       if (fuelLevel < 10000 && cargoLevel < 10000){
        list.style.visibility = "visible";
        fuelStatus.innerHTML = "Fuel level too low for launch";
        cargoStatus.innerHTML = "Cargo mass low enough for launch";
        h2.innerHTML = "Shuttle Not Ready for Launch";
        h2.style.color = "rgb(199, 37, 78)";
        pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
        copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;
       }

       else if (cargoLevel > 10000 && fuelLevel < 10000){
        list.style.visibility = "visible";
        fuelStatus.innerHTML = "Fuel level too low for launch";
        cargoStatus.innerHTML = "Cargo mass too heavy for launch";
        h2.innerHTML = "Shuttle Not Ready for Launch";
        h2.style.color = "rgb(199, 37, 78)";
        pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
        copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;
       }

    //    else if (cargoLevel > 10000 && fuelLevel > 10000){
    //     list.style.visibility = "visible";
    //     fuelStatus.innerHTML = "Fuel level high enough for launch";
    //     cargoStatus.innerHTML = "Cargo mass too heavy for launch";
    //     h2.innerHTML = "Shuttle Not Ready for Launch";
    //     h2.style.color = "rgb(199, 37, 78)";
    //     pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
    //     copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;
    //    }
  
       else if (cargoLevel < 10000 && fuelLevel >10000) {
        list.style.visibility = "visible";
        fuelStatus.innerHTML = "Fuel level high enough for launch";
        cargoStatus.innerHTML = "Cargo mass low enough for launch";
        h2.innerHTML = "Shuttle is Ready for Launch";
        h2.style.color = "rgb(65, 159, 106)";
        pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
        copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;       
    }    
 }
   
async function myFetch() {
    let planetsReturned;
    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json");
    let result = await planetsReturned.json();
    console.log(result);
    return result;
}

function pickPlanet(planets) {
   
    let missionDestination = Math.floor(Math.random()*planets.length);
    let selectPlanet = planets[missionDestination];
    return selectPlanet;
}
  
module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
