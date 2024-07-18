import { apicall } from "./apicalls.js";

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
  console.log(e);
  e.stopPropagation();
});

//function which shows items inside card

let showCartItems = (cart) => {
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
    cart_img_container.classList = "card-item-img-container";
    cart_img.src = image;
    cart_img_container.appendChild(cart_img);
    cartItem.appendChild(cart_img_container);
    cartItem.appendChild(deleteBtn);
    modal_content.appendChild(cartItem);
  });
};

let addItemToCart = (product) => {
  let isItemInCart = cart.find((item) => {
    return (product.id = item.id);
  });
  if (itemIsInCart) {
    cart.push({ ...product, item_quantity });
    showCartItems();
  } else {
    cart.map((item) => {
      if ((item.id = product.id)) {
        return { ...product, item_quantity: item.item_quantity++ };
      } else {
        return item;
      }
    });
  }
  console.log(isItemInCart, "its already in the cart");
};

window.onload = () => {
  console.log(apicall);
  apicall()
    .then((data) => {
      data.forEach((product) => {
        let card = document.createElement("div");
        card.classList = "card";
        card_container.appendChild(card);
        //creating image cart
        let img_container = document.createElement("div");
        let product_img = document.createElement("img");
        product_img.id = "img";

        let { title, price, image } = product;

        product_img.src = image;
        img_container.appendChild(product_img);
        card.appendChild(img_container);
        // create button and adding to card
        let btn_container = document.createElement("div");
        let addBtn = document.createElement("button");
        addBtn.textContent = "Add to the cart";

        addBtn.addEventListener("click", () => {
          cart.push(product);
          showCartItems();
        });

        let card_name = document.createElement("div");
        let title_p = document.createElement("p");
        let price_p = document.createElement("p");
        card_name.classList = "card-name";
        card_name.appendChild(title_p);
        card_name.appendChild(price_p);
        title_p.textContent = title;
        price_p.textContent = price;
        card.appendChild(card_name);
        card_container.appendChild(card);
        console.log(product);

        let star_main = document.createElement("div");
        let star1 = document.createElement("img");
        let star2 = document.createElement("img");
        let star3 = document.createElement("img");
        let star4 = document.createElement("img");
        let star5 = document.createElement("img");
        star_main.classList = "stars-icon";
        star1.src = "./star.png";
        star2.src = "./star.png";
        star3.src = "./star.png";
        star4.src = "./star.png";
        star5.src = "./star.png";
        star_main.appendChild(star1);
        star_main.appendChild(star2);
        star_main.appendChild(star3);
        star_main.appendChild(star4);
        star_main.appendChild(star5);
        btn_container.appendChild(addBtn);
        card.appendChild(btn_container);
        card.appendChild(star_main);
      });
    })
    .catch(() => alert("We are working on it!!"));
};
