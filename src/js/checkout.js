import { loadHeaderFooter, qs } from "./utils.mjs";
import checkoutProcess from "./checkoutProcess.mjs";

const mainHeader = qs("#main-header");
const footer = qs("footer");

loadHeaderFooter(mainHeader, footer);


checkoutProcess.init("so-cart", ".checkout-summary");

document
  .querySelector("#zip")
  .addEventListener(
    "blur",
    checkoutProcess.calculateOrdertotal.bind(checkoutProcess)
  );

// this is how it would look if we listen for the submit on the form
document.forms["checkout"].addEventListener("submit", (e) => {
  e.preventDefault();
  // e.target would contain our form in this case
  checkoutProcess.checkout(e.target);
});
document.querySelector('#checkoutSubmit')
  .addEventListener('click', (e) => {
    e.preventDefault();
    var myForm = document.forms[0];
    var chk_status = myForm.checkValidity();
    myForm.reportValidity();
    if(chk_status) 
      checkoutProcess.checkout();
  });

//listening for click on the button
document.querySelector("#checkoutSubmit").addEventListener("click", (e) => {
  e.preventDefault();

  checkoutProcess.checkout(document.forms['checkout']);
});