export const gridTemplate = (key) => `
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
`;

export const listTemplate = (key) => `
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
`;