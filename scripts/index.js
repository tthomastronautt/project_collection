const app = {}

app.init = () => {
    const menuSection = document.querySelector('.menuSection')
    
    let menuItem = (menu) => 
        `
        <a href="${menu.url}" class="listItem">> ${menu.title}</a>
        `

    fetch('../data/indexData.json').then(response => response.json()).then(indexData => {    
        indexData.forEach(menu => {
            menuSection.insertAdjacentHTML('beforeend', menuItem(menu))
        })
    })
}

app.init()