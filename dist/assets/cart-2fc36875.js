import{g as s,q as l,s as m}from"./utils-e2829c12.js";import"./superscript-86df5b0d.js";var c=0;function i(){const t=s("so-cart")||[],a=t.map(e=>d(e));t.map(e=>p(e)),l(".product-list").innerHTML=a.join(""),l(".cart-total").textContent+=` $${c.toFixed(2)}`,document.querySelectorAll("li").forEach(e=>{e.addEventListener("click",u)})}function d(t){return`<li class="cart-card divider">
  <a href="#" class="cart-card__image">
    <img
      src="${t.Images.PrimaryMedium}"
      alt="${t.Name}"
    />
  </a>
  <a href="#">
    <h2 class="card__name">${t.Name}</h2>
  </a>
  <p class="cart-card__color">${t.Colors[0].ColorName}</p>
  <p class="cart-card__quantity">qty: 1</p>
  <p class="cart-card__price">$${t.FinalPrice}</p>
  <button class="removeFromCart" value="${t.Id}">Delete Item</button> 
</li>`}i();function p(t){const a=t.FinalPrice;if(c+=a,c!=0){const r=l(".cart-total");r.style.display="block",r.style.marginLeft="10px"}}function u(t){const r=document.querySelector(".removeFromCart").value,e=s("so-cart")||[],n=value.FinalPrice;c-=n;for(let o=0;o<e.length;o++)e[o].Id===r&&e.splice(o,1);localStorage.removeItem("so-cart"),m("so-cart",e),t.target.parentElement.remove()}
