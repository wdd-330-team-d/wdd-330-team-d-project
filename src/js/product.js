import { getParam, loadHeaderFooter, qs } from "./utils.mjs";
import productDetails from "./productDetails.mjs";

const mainHeader = qs("#main-header");
const footer = qs("footer");

loadHeaderFooter(mainHeader, footer);

const productId = getParam("product");
productDetails(productId);