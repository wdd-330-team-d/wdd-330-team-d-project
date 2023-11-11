import productL from "./productList.mjs";
import { qs, getParam, loadHeaderFooter } from "./utils.mjs";


const mainHeader = qs("#main-header");
const footer = qs("footer");

const category = getParam("category");

loadHeaderFooter(mainHeader, footer);


productL(".product-list", category);