const charactersList = document.getElementById("characterList");
const searchBar = document.getElementById("user-inp");

let hpCharacters = [];

async function loadCharacters() {
    try {
        const response = await fetch("http://hp-api.herokuapp.com/api/characters/students");
        hpCharacters = await response.json();

        displayCharacters(hpCharacters);
        console.log(hpCharacters);
    }
    catch (err) {
        console.error(err);
    }

};

searchBar.addEventListener("keyup", (e) => {
    const searchString= e.target.value.toLowerCase();
    console.log(typeof searchString);

    const filteredCharacters = hpCharacters.filter(character=>{
        return character.name.toLowerCase().includes(searchString);
    });
    displayCharacters(filteredCharacters);
});


let displayCharacters = (characters) => {
    const desc = characters.map((character) => {
        return `
        <li class="character">
            <img src="${character.image}">
            <h2>${character.name}</h2>
            <p>${character.actor}</p>
        </li>`;
    })
    .join('');
    charactersList.innerHTML = desc;
};


loadCharacters();