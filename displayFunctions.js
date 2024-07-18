import { addItemToCart } from "./shop.js";

let card_container = document.getElementById("items");

export let createCartItem = (product) => {
  let card = document.createElement("div");
  card.classList = "card";

  let { title, price, image, rating } = product;

  // Image container
  let img_container = document.createElement("div");
  let product_img = document.createElement("img");
  product_img.id = "img";
  product_img.src = image;
  img_container.appendChild(product_img);
  card.appendChild(img_container);

  // Card name (title and price)
  let card_name = document.createElement("div");
  let title_p = document.createElement("p");
  let price_p = document.createElement("p");
  card_name.classList = "card-name";
  title_p.textContent = title;
  price_p.textContent = price;
  card_name.appendChild(title_p);
  card_name.appendChild(price_p);
  card.appendChild(card_name);

  // Star rating
  let star_container = document.createElement("div");
  star_container.classList = "stars-icon";
  for (let i = 1; i <= Math.floor(rating.rate); i++) {
    let starImg = document.createElement("img");
    starImg.src = "./star.png";
    star_container.appendChild(starImg);
  }
  card.appendChild(star_container);

  // Add to cart button
  let btn_container = document.createElement("div");
  let addBtn = document.createElement("button");
  addBtn.textContent = "Add to the cart";
  addBtn.addEventListener("click", () => {
    addItemToCart(product);
  });
  btn_container.appendChild(addBtn);
  card.appendChild(btn_container);

  card_container.appendChild(card);
};
