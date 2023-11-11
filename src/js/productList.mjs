//import { getData } from "./productData.mjs";
import { getProductsByCategory } from "./externalServices.mjs";
import { qs, renderListWithTemplate } from "./utils.mjs";

// export default async function productL(){
//   const list = await getData();

//   const newList = filterList(list);

//   const li = qs(".product-list");
//   //const proList = getList();
//   //console.log(list.length);

//   renderListWithTemplate(productCardTemplate, li, newList)
// }

export default async function productL(selector, category) {
  // get the element we will insert the list into from the selector
  const el = document.querySelector(selector);
  // get the list of products
  const products = await getProductsByCategory(category);
  console.log(products);
  // render out the product list to the element
  renderListWithTemplate(productCardTemplate, el, products);
  document.querySelector(".title").innerHTML = category;
}

function filterList(list){
  for (let i = 0; i < list.length; i++){
    if (i > 3){
      list.splice(i, 2);
    }
  }
  return list;
}

function productCardTemplate(product){
  let productItem = `<li class="product-card">
  <a href="../product_pages/index.html?product=${product.Id}">
    <img src="${product.Images.PrimaryMedium}" alt="${product.Name}"/>
    <h3 class="card__brand">${product.Brand.Name}</h3>
    <h2 class="card__name">${product.NameWithoutBrand}</h2>
    <p class="product-card__price">Price: $${product.FinalPrice}</p></a>
    <p class="discountIndicator">Discount: $${((product.SuggestedRetailPrice - product.FinalPrice)  / product.SuggestedRetailPrice * product.FinalPrice).toFixed(2)}</p>
  <!-- Add a container for the discount indicator -->
  </li>`;

  return productItem;
}

