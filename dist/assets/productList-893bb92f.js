import{g as i}from"./externalServices-db2f91cb.js";import{c}from"./utils-e2829c12.js";async function d(e,a){const r=document.querySelector(e),t=await i(a);console.log(t),c(n,r,t),document.querySelector(".title").innerHTML=a}function n(e){return`<li class="product-card">
  <a href="../product_pages/index.html?product=${e.Id}">
    <img src="${e.Images.PrimaryMedium}" alt="${e.Name}"/>
    <h3 class="card__brand">${e.Brand.Name}</h3>
    <h2 class="card__name">${e.NameWithoutBrand}</h2>
    <p class="product-card__price">Price: $${e.FinalPrice}</p></a>
    <p class="discountIndicator">Discount: $${((e.SuggestedRetailPrice-e.FinalPrice)/e.SuggestedRetailPrice*e.FinalPrice).toFixed(2)}</p>
  <!-- Add a container for the discount indicator -->
  </li>`}export{d as p};
