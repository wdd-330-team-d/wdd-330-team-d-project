import { getLocalStorage, qs } from "./utils.mjs";

const cartItems = getLocalStorage("so-cart") || [];

function cartProductNotification() {
    var productCount = cartItems.length;
    qs("#superscript").textContent = productCount;
}

if (cartItems.length != 0) {
    qs("#superscript").style.display = "block";
    cartProductNotification();
}