import { cartTmpl } from "./templates.js";
import data from "./fetchData.js";

const shoppingCart = {}

shoppingCart.init = async () => {

    const shoppingCartOutput = document.querySelector('.shoppingCart')

    let cartArray = JSON.parse(localStorage.getItem('cartList')) || [];

    const products = await data.fetchProducts();

    const RemoveFromCart = () => {
        const removeFromCartBtn = document.querySelectorAll('.removeFromCartBtn')

        removeFromCartBtn.forEach(btn => {
            btn.addEventListener('click', (event) => {

                const productId = event.target.getAttribute('id')
                const index = cartArray.findIndex(product => product.id == productId)

                cartArray.splice(index, 1)

                localStorage.setItem('cartList', JSON.stringify(cartArray))

                renderCart()
            })
        })
    }

    const renderCart = () => {
        if(cartArray.length != 0){
            shoppingCartOutput.innerHTML = ""
            cartArray.forEach(product => {
                shoppingCartOutput.insertAdjacentHTML('beforeend', cartTmpl(product))
            })
            RemoveFromCart()
        } else {
            shoppingCartOutput.innerHTML = 'Your cart is empty'
        }
    }

    renderCart()

    const addToCartBtn = document.querySelectorAll('.addToCartBtn')

    const addToCart = async (event) => {
        const productId = event.target.getAttribute('id')

        const productToAdd = products.find(product => product.id == productId)

        if(!cartArray.includes(productToAdd)){
            cartArray.push(productToAdd)
            localStorage.setItem('cartList', JSON.stringify(cartArray))
        }
        renderCart()
    }
    addToCartBtn.forEach(btn => {
        btn.addEventListener('click', addToCart)
    })
}

export default shoppingCart