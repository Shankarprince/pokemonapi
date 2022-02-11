document.body.innerHTML =
    `
    <div class="header">
    <h2>Pokemon API</h2>
    </div><div class="body-div"></div>
`;

const fetchPokemonData = async () => {
    const data = await fetch("https://pokeapi.co/api/v2/pokemon?limit=50")
    const pokemonData = await data.json();
    const name = [];
    const url = [];

    for (let i = 0; i < pokemonData.results.length; i++) {
        name.push(pokemonData.results[i].name);
        url.push(pokemonData.results[i].url);

        const getUrlData = async () => {
            const response = await fetch(url[i])
            const data = await response.json();
            let ability = [];
            let move = [];

            for (let i = 0; i < data.abilities.length; i++) {
                ability.push(data.abilities[i].ability.name);
            }

            for (let i = 0; i < 5; i++) {
                move.push(data.moves[i].move.name);
            }

            document.querySelector(".body-div").innerHTML +=
                `
                <div class="container">
                <img class="image" src="${data.sprites.front_default}"></img>
                <h2 class="name"><span class="key">Name : </span> ${pokemonData.results[i].name}</h2>
                <p class="ability"><span class="key">Abilities : </span>${ability}</p>
                <p class="moves"><span class="key">Moves : </span>${move}</p>
                <p class="weight"><span class="key">Weight : </span>${data.weight}</p>
                </div>
            `;
        }
        getUrlData();
    }
}
fetchPokemonData();
