import data from "./fetchData.js"
import { toggleView } from "./toggleBtn.js";
import { listTmpl } from "./templates.js"

const renderData = {}

renderData.init = async () => {

    let productList = document.querySelector('.productList')

    const products = await data.fetchProducts()

    if(productList) {
        products.forEach((product) => {
            productList.insertAdjacentHTML('beforeend', listTmpl(product));
        });
    };
    toggleView();
};

export default renderData;