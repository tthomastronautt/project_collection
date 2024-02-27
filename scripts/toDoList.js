let output = document.querySelector('.output')

let toDoArray = []

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
        output.innerHTML += 
        `
            <div class="listContainer">
                <input type="checkbox" class="checkbox">
                <p class="listItem">${object.item}<p/>
                <p class="listNote hidden">${object.note}</p>
                <button class="delete">> Delete</button>
            </div><br>
        `
        showNote()
        deleteItem()
    })
}
renderList()


/* === tjek af på listen === */
let checkedItem = () => {
    let checkboxes = document.querySelectorAll('.checkbox')
    let listItem = document.querySelectorAll('.listItem')
    let listNote = document.querySelectorAll('.listNote')

    checkboxes.forEach((check, index) => {
        check.addEventListener('click', () => {
            listItem[index].classList.toggle('done')
            listNote[index].classList.toggle('done')
        })
    })
    

    //tjekker et enkelt element af på listen:
    /* listNote.forEach(item => {
        item.addEventListener('click', (e) => {
            e.target.classList.toggle('done')
        })
    }) */
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
    if (listInput.value.trim() !== '' && noteInput.value.trim() !== '') {
        let toDoObject = {item: listInput.value, note: noteInput.value}
        toDoArray.push(toDoObject)//tilføjer object til array
        renderList()
        listInput.value = ''//nulstiller input felterne når punket er tilføjet til listen
        noteInput.value = ''
        checkedItem()
    } else {
        return
    }
})

/* === åbn/luk accordian === */
let showNote = () => {
    let listItem = document.querySelectorAll('.listItem')
    let listNote = document.querySelectorAll('.listNote')

    listItem.forEach((element, index) => {
        element.addEventListener('click', () => {
            listNote[index].classList.toggle('hidden');
        });
    });
};

showNote();