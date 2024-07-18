import { apicall } from "./apicalls.js";
import { createCartItem } from "./displayFunctions.js";

let cart = [];
let cartIcon = document.getElementById("cart_id");
let overlay = document.querySelector(".overlay");
let card_container = document.getElementById("items");
let modal_content = document.querySelector(".modal-content");

overlay.addEventListener("click", () => {
  overlay.style.display = "none";
});

cartIcon.addEventListener("click", () => {
  overlay.style.display = "block";
});

modal_content.addEventListener("click", (e) => {
  e.stopPropagation();
});

let showCartItems = () => {
  modal_content.innerHTML = "";
  cart.forEach((item) => {
    let { image, title, price } = item;
    let cartItem = document.createElement("div");
    let cart_img_container = document.createElement("div");
    let cart_img = document.createElement("img");
    let deleteBtn = document.createElement("button");
    cartItem.classList = "cart_item";
    cart_img.id = "cart-item-img";
    cart_img.classList = "cart-item-img";
    cart_img_container.classList = "cart_img_container";
    cart_img.src = image;
    cart_img_container.appendChild(cart_img);
    cartItem.appendChild(cart_img_container);
    deleteBtn.textContent = "x";
    deleteBtn.addEventListener("click", () => {
      let updatedcart = cart.filter((cartItem) => {
        return cartItem.id !== item.id;
      });

      console.log("delete this item", updatedcart);
    });
    cartItem.appendChild(deleteBtn);
    modal_content.appendChild(cartItem);
  });
};

export let addItemToCart = (product) => {
  let isItemInCart = cart.find((item) => product.id === item.id);
  if (!isItemInCart) {
    cart.push({ ...product, item_quantity: 1 });
  } else {
    cart = cart.map((item) =>
      item.id === product.id
        ? { ...item, item_quantity: item.item_quantity + 1 }
        : item
    );
  }
  showCartItems();
  console.log(cart, "Cart updated");
};

window.onload = () => {
  apicall()
    .then((data) => {
      data.forEach((product) => {
        createCartItem(product);
      });
    })
    .catch(() => alert("We are working on it!!"));
};
