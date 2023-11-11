import { getLocalStorage, setLocalStorage, qs,loadHeaderFooter } from "./utils.mjs";

var total = 0;

function renderCartContents() {
  const cartItems = getLocalStorage("so-cart") || [];
  const htmlItems = cartItems.map((item) => cartItemTemplate(item));
  cartItems.map((item) => totalCartCost(item));
  qs(".product-list").innerHTML = htmlItems.join("");
  qs(".cart-total").textContent += ` $${total.toFixed(2)}`;

    //? Target the all the child elements a qSAll.
  const deleteBtn = document.querySelectorAll("li");
  // console.log(deleteBtn);
  //? Listen for the button click.
  deleteBtn.forEach((button) => {
    //? When the Delete Item button is clicked
    //? call the deleteItem function to remove the
    //? parentElement of the clicked button.
    button.addEventListener("click", deleteItem);
  });

}
const mainHeader = qs("#main-header");
const footer = qs("footer");
loadHeaderFooter(mainHeader, footer);
function cartItemTemplate(item) {
  const newItem = `<li class="cart-card divider">
  <a href="#" class="cart-card__image">
    <img
      src="${item.Images.PrimaryMedium}"
      alt="${item.Name}"
    />
  </a>
  <a href="#">
    <h2 class="card__name">${item.Name}</h2>
  </a>
  <p class="cart-card__color">${item.Colors[0].ColorName}</p>
  <p class="cart-card__quantity">qty: 1</p>
  <p class="cart-card__price">$${item.FinalPrice}</p>
  <button class="removeFromCart" value="${item.Id}">Delete Item</button> 
</li>`; // Added an Id to each of the delete button, in other to use it to remove the item from so-cart.

  return newItem;
}

renderCartContents();

function totalCartCost(item) {
  const itemCost = item.FinalPrice;
  total += itemCost;
  // console.log(total);
  if (total != 0) {
    const cartTotal = qs(".cart-total");
    cartTotal.style.display = "block";
    cartTotal.style.marginLeft = "10px";
  }


}

//? Create a function for removing parentElements when
//? the Delete Item button is clicked using an addEventListener.
function deleteItem(event) {
  //Get the document when the button is clicked.
  const theItemToDelete = document.querySelector(".removeFromCart");
  //Collect it value and store it in a variable.
  const itemId = theItemToDelete.value;

  //Get the cart from localStorage. 
  const theCart = getLocalStorage("so-cart") || [];
  const itemCost = value.FinalPrice;
  total -= itemCost;

  //console.log(theCart.length);

  //iterating through the items in cart to check which one has the id of the deleted one.
  for (let i = 0; i < theCart.length; i++){
    if (theCart[i].Id === itemId){
      theCart.splice(i, 1); // Removing the Item from cart whit the index.
    }
  }
  //Clearing out the localStorage.
  localStorage.removeItem("so-cart");

  //setting the cart back in the localStorage.
  setLocalStorage("so-cart", theCart);


  const listItem = event.target.parentElement;
  listItem.remove();
}



