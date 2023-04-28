const addToStorage = (pokemon) => {
  items.innerHTML = "";

  let pokemonsStorage = localStorage.getItem("cartItems");
  if (!pokemonsStorage) {
    pokemonsStorage = [];
  } else {
    pokemonsStorage = JSON.parse(pokemonsStorage);
  }
  pokemonsStorage.push(pokemon);
  localStorage.setItem("cartItems", JSON.stringify(pokemonsStorage));


  console.log("Pokemons in local storage", pokemonsStorage);
};


const removeFromLocalStorage = (pokemon) => {
    const cartItems = JSON.parse(localStorage.getItem("cartItems"));
    const updatedCartItems = cartItems.filter((p) => p.name !== pokemon.name);
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
  };

