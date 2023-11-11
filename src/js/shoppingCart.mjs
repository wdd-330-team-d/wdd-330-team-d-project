import { getLocalStorage, setLocalStorage, qs, renderListWithTemplate } from "./utils.mjs";


var total = 0;

export function renderCartContents() {
    //This is the Cart items which will be pass into the renderListWithTemplate function I imported.
  const cartItems = getLocalStorage("so-cart") || [];
  const proElement = qs(".product-list");

  //This function now take care of the cart product rendering dynamically just as the other placese.
  renderListWithTemplate(cartItemTemplate, proElement, cartItems);

  cartItems.map((item) => totalCartCost(item));
  qs(".cart-total").textContent += ` $${total.toFixed(2)}`;
    
  //All the code that has to do with deleting button 
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

function cartItemTemplate(item) {
  const newItem = `<li class="cart-card divider">
  <a href="#" class="cart-card__image">
    <img
      src="${item.Image}"
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

export default function ShoppingCart() {
    const cartItems = getLocalStorage("so-cart") || [];
    const outputEl = document.querySelector(".product-list");
    renderListWithTemplate(cartItemTemplate, outputEl, cartItems);
  }