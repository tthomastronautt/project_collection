const grid = document.querySelector('.grid')
const list = document.querySelector('.list')


let gridTemplate = (key) => `
    <div class="card">
        <p class="cardTitle">> ${key.name}</p>
        <img src="${key.img}" alt="${key.name}" class="cardImg">
    </div>
    <div class="modal hidden">
        <div class="modalContainer">
            <img src="${key.img}" alt="${key.name}" class="modalImg">
            <div class="modalInfoContainer">
                <p>Name: ${key.name}</p><br>
                <p>Role: ${key.role}</p><br>
                <p>Location: ${key.location}</p><br>
                <p>Weapon: ${key.weapon}</p><br>
                <p>Bio:<br> ${key.bio}</p><br>
                <p>> <a href="${key.link}" target="blank" class="readMore">Read more</a></p>
            </div>
        </div>
    </div>
`


let listTemplate = (key) => `
    <p class="accordion">> ${key.name}</p>
    <div class="listContainer hidden">
        <img src="${key.img}" alt="${key.name}" class="listImg">
        <div class="listInfoContainer">
            <p>Name: ${key.name}</p><br>
            <p>Role: ${key.role}</p><br>
            <p>Location: ${key.location}</p><br>
            <p>Weapon: ${key.weapon}</p>
        </div>
        <div class="listInfoContainer">
            <p>Bio:<br> ${key.bio}</p><br>
            <p>> <a href="${key.link}" target="blank" class="readMore">Read more</a></p>
        </div>
    </div>
`


async function fetchData() {
    try {
        const response = await fetch('../data/characters.json');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching or parsing data', error);
    };
};


const renderData = async () => {
    const data = await fetchData ();

    data.forEach((key) => {
        grid.insertAdjacentHTML('beforeend', gridTemplate(key));
        list.insertAdjacentHTML('beforeend', listTemplate(key));
    });

    toggleView();
    modal();
    accordion();
};
renderData();


/* funktion der skifter mellem grid/list visning */
let toggleView = () => {

    const toggleButton = document.querySelector('.toggleButton');

    // grid/list
    toggleButton.addEventListener('click', () => {
        grid.classList.toggle('hidden');
        list.classList.toggle('hidden');
    });
};


/* funtion der åbner/lukker modal */
let modal = () => {

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
let accordion = () => {

    const accordion = document.querySelectorAll('.accordion');
    const listContainer = document.querySelectorAll('.listContainer');
    
    // åbn/luk
    accordion.forEach((element, index) => {
        element.addEventListener('click', () => {
            listContainer[index].classList.toggle('hidden');
        });
    });
};