import productL from "./productList.mjs";
import { qs, loadHeaderFooter } from "./utils.mjs";

const mainHeader = qs("#main-header");
const footer = qs("footer");


loadHeaderFooter(mainHeader, footer);

productL();