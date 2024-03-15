import data from "./fetchData.js"
import { productTmpl } from "./templates.js"

const productView = {}

productView.init = async () => {
    
    let productPage = document.querySelector('.productPage')
       
    const products = await data.fetchProducts()
    
    if(productPage) {
        const search = location.search;
        const productId = new URLSearchParams(search).get('id')

        const foundProduct = products.find((product) => product.id == productId)
    
        let productOutput = document.querySelector('.webShopProduct')
        productOutput.insertAdjacentHTML('beforeend', productTmpl(foundProduct))
    }

}

export default productView;