export let SaveCartInLocalStorage = (cart) => {
  //convert the array into string = local
  let cartString = JSON.stringify(cart);
  localStorage.setItem("cart", cartString);
};
