
const addToStorage = (pokemon) => {
    let pokemonsStorage = localStorage.getItem('cartItems');
    if (!pokemonsStorage) {
        pokemonsStorage = [];
    } else {
        pokemonsStorage = JSON.parse(pokemonsStorage);
    }
    pokemonsStorage.push(pokemon);
    localStorage.setItem('cartItems', JSON.stringify(pokemonsStorage));

    console.log('Pokemons in local storage', pokemonsStorage);
  }

  
  