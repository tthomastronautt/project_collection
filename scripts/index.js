/* const app = {}

app.init = () => {
    const menuSection = document.querySelector('.menuSection')
    
    let menuItem = (menu) => 
        `
        <a href="${menu.url}" class="listItem">> ${menu.title}</a>
        `

    fetch('../data/index.json').then(response => response.json()).then(indexData => {    
        indexData.forEach(menu => {
            menuSection.insertAdjacentHTML('beforeend', menuItem(menu))
        })
    })
}

app.init() */

const menuSection = document.querySelector('.menuSection');

let menuItem = (menu) => `
    <a href="${menu.url}" class="listItem">> ${menu.title}</a>
`;

async function fetchData() {
    try {
        const response = await fetch('../data/index.json');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching or parsing data:', error);
    };
};

const renderData = async () => {
    const data = await fetchData();

    data.forEach(menu => {
        menuSection.insertAdjacentHTML('beforeend', menuItem(menu));
    });
}
renderData()


/* === login screen === */
const indexTitle = document.querySelector('.indexTitle')
const loginSection = document.querySelector('.loginSection')
const password = document.querySelector('.password')
const loginButton = document.querySelector('.loginButton')
const guestLoginButton = document.querySelector('.guestLoginButton')
const wrongPassword = document.querySelector('.wrongPassword')

loginButton.addEventListener('click', () => {
    if (password.value == 'warneverchanges') {
        indexTitle.classList.toggle('hidden');
        menuSection.classList.toggle('hidden');
        loginSection.classList.toggle('hidden');
        password.value = ''
    } if (password.value !== 'warneverchanges') {
        password.value = ''
        wrongPassword.classList.remove('hidden')
    }
});

guestLoginButton.addEventListener('click', () => {
    indexTitle.classList.toggle('hidden');
    menuSection.classList.toggle('hidden');
    loginSection.classList.toggle('hidden');
});