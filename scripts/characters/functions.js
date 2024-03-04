export const grid = document.querySelector('.grid')
export const list = document.querySelector('.list')

/* funktion der skifter mellem grid/list visning */
export let toggleView = () => {

    const toggleButton = document.querySelector('.toggleButton');

    // grid/list
    toggleButton.addEventListener('click', () => {
        grid.classList.toggle('hidden');
        list.classList.toggle('hidden');
    });
};


/* funtion der åbner/lukker modal */
export let modal = () => {

    const cardImg = document.querySelectorAll('.cardImg');
    const modal = document.querySelectorAll('.modal');
    
    // åbn
    cardImg.forEach((element, index) => {
        element.addEventListener('click', () => {
            modal[index].classList.toggle('hidden');
        });
    });

    // luk
    modal.forEach((element, index) => {
        element.addEventListener('click', () => {
            modal[index].classList.toggle('hidden');
        });
    });
};


/* funktion der åbner/lukker accordion */
export let accordion = () => {

    const accordion = document.querySelectorAll('.accordion');
    const listContainer = document.querySelectorAll('.listContainer');
    
    // åbn/luk
    accordion.forEach((element, index) => {
        element.addEventListener('click', () => {
            listContainer[index].classList.toggle('hidden');
        });
    });
};