//get li from navbar
const shopingItems = document.querySelector("#containerShopingList");

//Shopping Cart Btn
const modalBtn = document.createElement("button");
modalBtn.classList.add("modal-btn");
modalBtn.textContent = "Shoping List";

const PokemonsCartBtn = () => {
  shopingItems.appendChild(modalBtn);
};
PokemonsCartBtn();

//Shopping Cart body with Pokemons to buy
const shopingCart = document.createElement("section");
shopingCart.classList.add("section-shoping-cart");

const contForShopingCart = document.createElement("div");
contForShopingCart.classList.add("shoping-cart-content");

const items = document.createElement("div");
items.classList.add("items");

const shopingClose = document.createElement("span");
shopingClose.classList.add("close-shoping-modal-window");
shopingClose.innerHTML = "&times;";

const someText = document.createElement("p");
someText.textContent = `Pokemons which you have choose`;

const PokemonsShopingCart = () => {
  shopingCart.appendChild(contForShopingCart);
  contForShopingCart.appendChild(shopingClose);
  contForShopingCart.appendChild(someText);
  contForShopingCart.appendChild(items);
  main.appendChild(shopingCart);
};
PokemonsShopingCart();

function buttonOnClick() {
  shopingCart.style.display = "block";
}

function spanCloseShopingCart() {
  shopingCart.style.display = "none";
}

function closeCart(e) {
  if (e.target == shopingCart) {
    shopingCart.style.display = "none";
  }
}

const test = document.body;

modalBtn.addEventListener("click", buttonOnClick);
shopingClose.addEventListener("click", spanCloseShopingCart);
window.addEventListener("click", closeCart);
