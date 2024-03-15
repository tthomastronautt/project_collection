export let toggleView = () => {

    const toggleButtons = document.querySelectorAll('.viewCartBtn');
    const browse = document.querySelector('.webShop') 
    const cart = document.querySelector('.webShopCart')

    toggleButtons.forEach(toggleButton => {
        toggleButton.addEventListener('click', () => {
            browse.classList.toggle('hidden');
            cart.classList.toggle('hidden');
        });
    });
};