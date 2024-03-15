import renderData from "./renderData.js"
import productView from "./productView.js";
import shoppingCart from "./cart.js";

const app = {}

app.init = async () => {
    await renderData.init();
    await productView.init();
    await shoppingCart.init();
};

app.init()