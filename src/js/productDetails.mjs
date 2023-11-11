//import { findProductById } from "./productData.mjs";
import { findProductById } from "./externalServices.mjs";
import { setLocalStorage, getLocalStorage, alertMessage } from "./utils.mjs";

let product = {};

export default async function productDetails(productId) {

    product = await findProductById(productId);

    renderProductDetails();

    document.getElementById("addToCart").addEventListener("click", addToCart);
}

function addToCart() {

    let productCart = getLocalStorage("so-cart", product) || [];
    if (!productCart) {
      productCart = [];
    }

    productCart.push(product);

    // console.log(productCart);

    // console.log(product);

    setLocalStorage("so-cart", productCart);
    alertMessage(`${product.NameWithoutBrand} added to cart!`);
}

function renderProductDetails() {

    document.querySelector("#productName").innerText = product.Name;

    document.querySelector("#productNameWithoutBrand").innerText =

      product.NameWithoutBrand;

    document.querySelector("#productImage").src = product.Images.PrimaryLarge;

    document.querySelector("#productImage").alt = product.Name;

    document.querySelector("#productFinalPrice").innerText = `$${product.FinalPrice}`;

    document.querySelector("#productDiscPercent").innerHTML = "Product is discounted by " +

    ((product.SuggestedRetailPrice - product.FinalPrice) / product.SuggestedRetailPrice * 100).toFixed(0) + "%";

    document.querySelector("#productColorName").innerText =

      product.Colors[0].ColorName;

    document.querySelector("#productDescriptionHtmlSimple").innerHTML =

      product.DescriptionHtmlSimple;

    document.querySelector("#addToCart").dataset.id = product.Id;
}