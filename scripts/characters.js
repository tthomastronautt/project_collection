const grid = document.querySelector('.grid');
const modal = document.querySelector('.modal');
const list = document.querySelector('.list');


let gridItem = (key) => `
    <div class="card">
        <p class="cardTitle">> ${key.name}</p>
        <img src="${key.img}" alt="${key.name}" class="cardImg">
    </div>
`;


let modalItem = (key) => `
    <div class="modalContainer hidden">
        <img src="${key.img}" alt="${key.name}" class="modalImg">
        <div class="modalInfoContainer">
            <p>Name: ${key.name}</p><br>
            <p>Role: ${key.role}</p><br>
            <p>Location: ${key.location}</p><br>
            <p>Weapon: ${key.weapon}</p><br>
            <p>Bio: ${key.bio}</p><br>
            <p>> <a href="${key.link}">Read more</a></p>
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
        modal.insertAdjacentHTML('beforeend', modalItem(key))
    });

    openModal();
};
renderData();


/* åbner modal */
let openModal = () => {

    const card = document.querySelectorAll('.card');
    const modalContainer = document.querySelectorAll('.modalContainer');

    card.forEach((element, index) => {
        element.addEventListener('click', () => {
            modal.classList.toggle('hidden');
            modalContainer[index].classList.toggle('hidden');
        });
    });

    modal.addEventListener('click', () => {
        modal.classList.add('hidden');
        modalContainer.forEach(container => container.classList.add('hidden'));
    });
};
