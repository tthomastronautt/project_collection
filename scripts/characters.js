const grid = document.querySelector('.grid');
const list = document.querySelector('.list');


let gridItem = (key) => `
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
                <p>Bio: ${key.bio}</p><br>
                <p>> <a href="${key.link}" target="blank" class="readMore">Read more</a></p>
            </div>
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
        grid.insertAdjacentHTML('beforeend', gridItem(key))
    });

    openModal();
};
renderData();


/* åbner/lukker modal */
let openModal = () => {

    const card = document.querySelectorAll('.card');
    const modal = document.querySelectorAll('.modal');
    const readMore = document.querySelectorAll('.readMore')

    //åbn
    card.forEach((element, index) => {
        element.addEventListener('click', () => {
            modal[index].classList.toggle('hidden');
        });
    });

    //luk
    modal.forEach((element, index) => {
        element.addEventListener('click', () => {
            modal[index].classList.toggle('hidden');
        });
    });
};
