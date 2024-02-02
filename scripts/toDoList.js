let output = document.querySelector('.output')

let toDoArray = [
    {
        item: 'Gå tur med hund',
        note: 'kl. 9 og kl. 12'
    },
]


/* === delete item === */
const deleteItem = () => {
    const deleteBtn = document.querySelectorAll('.delete')

    deleteBtn.forEach((btn, index) => {
        btn.addEventListener('click', (e) => {
            toDoArray.splice(index, 1)
            renderList()
            checkedItem()
        })
    })
}

deleteItem()


/* === udskriver to do liste === */
const renderList = () => {
    output.innerHTML = ""
    toDoArray.forEach(object => {
        output.innerHTML += `
            <div class="listContainer">
                <input type="checkbox" class="checkbox">
                <p class="listItem">${object.item}<p/>
                <p class="listNote">${object.note}</p>
                <button class="delete">> Delete</button>
            </div><br>
        `
        deleteItem()
    })
}

renderList()




/* === tjek af på listen === */
let checkedItem = () => {
    let listItem = document.querySelectorAll('.listItem')

    listItem.forEach(item => {
            item.addEventListener('click', (e) => {
                e.target.classList.toggle('done')
            })
        })
}
checkedItem()


/* === tilføj punkt til listen === */
/* let input = document.querySelector('.input')
let buttonAddItem = document.querySelector('.buttonAddItem')

buttonAddItem.addEventListener('click', () => {
    let newItem = input.value
    toDoArray.push(newItem)
    renderList()
    checkedItem()
}) */



/* === tilføj punkt til listen === */
let listInput = document.querySelector('.listInput')
let noteInput = document.querySelector('.noteInput')
let buttonAddItem = document.querySelector('.buttonAddItem')

buttonAddItem.addEventListener('click', () => {
    let toDoObject = {item: listInput.value, note: noteInput.value}
    toDoArray.push(toDoObject)
    renderList()
    checkedItem()
})