export const listTmpl = (key) => `
    <div class="productCard">
        <img src="${key.img}" alt="${key.name}" class="productImg">
        <a href="./productPage.html?id=${key.id}" class="productPageBtn">> View product</a>
        <button class="addToCartBtn" id="${key.id}">> Add to cart</button>
    </div>
`;

export const cartTmpl = (key) => `
    <div class="productCard">
        <img src="${key.img}" alt="${key.name}" class="productImg">
        <a href="./productPage.html?id=${key.id}" class="productPageBtn">> View product</a>
        <button class="removeFromCartBtn" id="${key.id}">> Remove from cart</button>
    </div>
`;

export const productTmpl = (key) => `
    <a href="./productsLasers.html" class="productPageButtons">> Browse products</a>
    <a href="./productsLasers.html?id="${key.id}" class="productPageButtons addToCartBtn" id="${key.id}">> Add to cart</a>
    <img src="${key.img}" alt="${key.name}" class="productPageImg">
    <p>${key.name}</p>
    <p>${key.price}</p><br>
    <p>${key.description}</p><br>
    <p><b>Energy output:</b> ${key.energy_output}</p>
    <p><b>Range:</b> ${key.range}</p>
    <p><b>Firerate:</b> ${key.rate_of_fire}</p>
    <p><b>Weight:</b> ${key.weight}</p>
`;