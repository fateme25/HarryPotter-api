const charactersList = document.getElementById("characterList");
const searchBar = document.getElementById("user-inp");

let hpCharacters = [];

searchBar.addEventListener("keyup", (e) => {
  const searchString = e.target.value.toLowerCase();
  console.log(searchString);

  const filteredCharacters = hpCharacters.filter((character) => {
    return character.name.toLowerCase().includes(searchString);
  });
  displayCharacters(filteredCharacters);
});


async function loadCharacters() {
    try {
        const response = await fetch(
          "https://hp-api.onrender.com/api/characters"
        );
        hpCharacters = await response.json();

        displayCharacters(hpCharacters);
        console.log(hpCharacters);
    }
    catch (err) {
        console.error(err);
    }

};



let displayCharacters = (characters) => { 
    const desc = characters.map((character) => {
      return `
        <li class="character">
            <img src="${character.image}">
            <h2>${character.name}</h2>
            <p>${character.actor}</p>
        </li>`;
    }).join("");
    console.log(desc)
    charactersList.innerHTML = desc;
};


loadCharacters();