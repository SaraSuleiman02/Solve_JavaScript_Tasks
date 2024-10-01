'use strict'

const apiURL = "https://pokeapi.co/api/v2/pokemon?limit=10";


fetch(apiURL)
  .then((response) => response.json())
  .then((data) => {
    const pokemonContainer = document.getElementById("pokemon-container");

    // Loop through each Pokemon in the list
    data.results.forEach((pokemon) => {
      // Fetch details for each Pokemon
      fetch(pokemon.url)
        .then((response) => response.json())
        .then((pokemonData) => {
          // Create a box for Pokemon details
          const pokemonBox = document.createElement("div");
          pokemonBox.classList.add("pokemon-box");

          // Get Pokemon name, front transparent image, and ability name
          const pokemonName = pokemonData.name;
          const pokemonImage =
            pokemonData.sprites.other["official-artwork"].front_default;
          const pokemonAbility = pokemonData.abilities[0].ability.name;

          pokemonBox.innerHTML = `
                <h3>${pokemonName}</h3>
                <img src="${pokemonImage}" alt="${pokemonName}">
                <p><strong>Ability:</strong> ${pokemonAbility}</p>
              `;

          pokemonContainer.appendChild(pokemonBox);
        })
    });
  })
