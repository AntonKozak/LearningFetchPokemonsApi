// Get main
const main = document.querySelector("main");
const mainContainer = document.createElement("div");
mainContainer.classList.add("mainContainer");
main.appendChild(mainContainer);

const btnContainer = document.createElement("div");
btnContainer.classList.add("btnContainer");

const nextButton = document.createElement("button");
const previousButton = document.createElement("button");
nextButton.setAttribute("id", "next");
nextButton.textContent = "Next";
nextButton.classList.add("previous-next-btn");

previousButton.textContent = "Previous";
previousButton.setAttribute("id", "previous");
previousButton.classList.add("previous-next-btn");

btnContainer.appendChild(previousButton);
btnContainer.appendChild(nextButton);
main.appendChild(btnContainer);

// Card for pokemon with button price
const elementPokemon = (pokemon) => {
  const container = document.createElement("div");
  container.classList.add("container");

  const pokeName = document.createElement("h2");
  pokeName.textContent = pokemon.name;

  const pokeButton = document.createElement("button");
  pokeButton.classList.add("submitBtn");
  pokeButton.textContent = `Buy for: ${pokemon.status} Sek`;
  pokeButton.onclick = () => {
    // addToCart(pokemon);
    addToStorage(pokemon);
    getPokemonsFromLocalStorage();
  };

  const image = document.createElement("img");
  image.setAttribute("src", `${pokemon.image}`);
  image.setAttribute("alt", `${pokemon.name}`);

  container.appendChild(image);
  container.appendChild(pokeName);
  container.appendChild(pokeButton);

  mainContainer.appendChild(container);
};

// Getting data from pokemon api
const pokemonList = async (url) => {
  document.querySelector(".mainContainer").innerHTML = "";

  const resp = await fetch(url).then((resp) => resp.json());
  // console.log(resp);

  const promises = [];

  //Creating endpoinds with for loop
  for (const result of resp.results) {
    promises.push(fetch(result.url).then((res) => res.json()));
  }
  const results = await Promise.all(promises);

  const pokemon = results.map((result) => ({
    name: result.name,
    image: result.sprites["front_shiny"] || result.sprites["front_default"],
    status: result.stats[0].base_stat,
  }));

  // console.log(pokemon[2]);

  //calling every pokemon and creating cards with elementPokemon
  pokemon.forEach((poke) => {
    elementPokemon(poke);
  });

  updateButtons(resp.next, resp.previous);
};

// uppdate lsit of pokemons with 20 new items
const updateButtons = (nextUrl, previousUrl) => {
  document.getElementById("next").onclick = () => pokemonList(nextUrl);
  document.getElementById("previous").onclick = () =>
    pokemonList(previousUrl || "https://pokeapi.co/api/v2/pokemon");
};

pokemonList("https://pokeapi.co/api/v2/pokemon");
getPokemonsFromLocalStorage();

  // location.reload();