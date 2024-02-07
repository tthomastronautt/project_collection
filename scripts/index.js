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
        const response = await fetch('..data/index.json');
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