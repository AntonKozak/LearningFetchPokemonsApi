// Adding to the Shoping cart items(pokemons)

// const addToCart = (pokemon) => {
//   const cart = document.getElementsByClassName("shoping-cart-content");

//   const container = document.createElement("div");
//   container.classList.add("container");

//   const pokeName = document.createElement("h2");
//   pokeName.textContent = pokemon.name;

//   const pokePrice = document.createElement("p");
//   pokePrice.textContent = "Price: " + pokemon.status;

//   const image = document.createElement("img");
//   image.setAttribute("src", `${pokemon.image}`);
//   image.setAttribute("alt", `${pokemon.name}`);

//   container.appendChild(image);
//   container.appendChild(pokeName);
//   container.appendChild(pokePrice);
//   items.appendChild(container);

//   document.querySelector(
//     ".modal-btn"
//   ).innerText = `Shoping List (${items.children.length})`;
// };



// try to load local storage

const getPokemonsFromLocalStorage = () => {
  const pokemonsStorage = localStorage.getItem("cartItems");
  if (pokemonsStorage) {
    const cartItems = JSON.parse(pokemonsStorage);

    cartItems.forEach((pokemon) => {
      const container = document.createElement("div");
      container.classList.add("container");

      const pokeName = document.createElement("h2");
      pokeName.textContent = pokemon.name;

      const pokePrice = document.createElement("p");
      pokePrice.textContent = "Price: " + pokemon.status;

      const image = document.createElement("img");
      image.setAttribute("src", `${pokemon.image}`);
      image.setAttribute("alt", `${pokemon.name}`);

      container.appendChild(image);
      container.appendChild(pokeName);
      container.appendChild(pokePrice);
      items.appendChild(container);
      document.querySelector(
        ".modal-btn"
    //   ).innerText = `Shoping List (${items.children.length})`;
      ).innerText = `Shoping List (${cartItems.length})`;
    });
  }
  console.log(pokemonsStorage);
};
