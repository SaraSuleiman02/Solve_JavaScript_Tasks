const container = document.getElementById("country-container");

fetch("https://restcountries.com/v3.1/all")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((country) => {
      const countryName = country.name.common;
      const coatOfArms = country.coatOfArms.png;

      // Create the box element
      const box = document.createElement("div");
      box.classList.add("box");

      // Insert the country name and image
      box.innerHTML = `
        <h3>${countryName}</h3>
        <p>Coat of Arms: </p>
        <img src="${coatOfArms}" alt="Coat of arms of ${countryName}" />
      `;

      container.appendChild(box);
    });
  });