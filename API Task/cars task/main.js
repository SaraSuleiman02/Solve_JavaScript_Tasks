"use strict";

let body = document.querySelector('body');
let apiURL =
  "https://vpic.nhtsa.dot.gov/api/vehicles/GetVehicleTypesForMake/merc?format=json"; //url

fetch(apiURL)
  .then((response) => {return response.json();})
  .then((data) => {
    const result = data.Results;
    const container = document.createElement('div');
    container.classList.add('container');
    body.append(container);


    result.forEach((vehicle) => {
      const box = document.createElement("div");
      box.classList.add("box");

      const makeName = document.createElement("h3");
      makeName.textContent = vehicle.MakeName;

      const vehicleTypeName = document.createElement("p");
      vehicleTypeName.textContent = vehicle.VehicleTypeName;

      box.appendChild(makeName);
      box.appendChild(vehicleTypeName);
      container.appendChild(box);
    });
  });
