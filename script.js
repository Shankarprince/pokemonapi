console.log("Hi");


document.body.innerHTML = `<section class="container"></section>`;

async function pokemon() {
    try {
        const data = await fetch("https://pokeapi.co/api/v2/pokemon?limit=50");
        const users = await data.json();
        console.log(users);


        const container = document.querySelector(".container");

        users.results.forEach((user) => {
            container.innerHTML += `
        <div class="container2">
            <h1>${user.name}</h1>
        <p>${user.url}</p>
        </div>
        `;

        });
    } catch (err) {
        console.log(err, "Error occured");
    }

}

pokemon();