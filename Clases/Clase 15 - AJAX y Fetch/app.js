/*
const lista = document.querySelector("#lista");

fetch("https://rickandmortyapi.com/api/character")
    .then((resp) => resp.json())
    .then((data) => {
        console.log(data.results[0]);

        data.results.forEach((character) => {
            const li = document.createElement("li");

            li.innerHTML = `
                <h4>${character.name}</h4>
                <p>${character.species}</p>
            `;

            lista.appendChild(li);
        });
    });
*/

/*
MÉTODO POST

fetch("https://...", {
    method: "POST",
    body: JSON.stringify({
        title: "Coderhouse",
        body: "post de prueba",
        userId: 1,
    }),
    headers: {
        "Content-type": "application/json; charset=UTF-8",
    },
})
    .then((response) => response.json())
    .then((data) => console.log(data));
*/

/*
const lista = document.querySelector("#lista");

fetch("./data.json")
    .then((resp) => resp.json())
    .then((data) => {
        console.log(data);

        data.forEach((producto) => {
            const li = document.createElement("li");

            li.innerHTML = `
                <h5>${producto.id}</h5>
                <h5>${producto.nombre}</h5>
            `;

            lista.appendChild(li);
        });
    });
*/

/*
const res = fetch("https://rickandmortyapi.com/api/character");
console.log(res);   // Promise {<pending>}

// console.log no espera a que se resuelva la promesa para ejecutarse

async function pedirCharacters() {
    const res = await fetch("https://rickandmortyapi.com/api/character");
    console.log(res);   // sí espera a que se resuelva la promesa
}

pedirCharacters();
*/


const lista = document.querySelector("#cards");

const pedirCharacters = async () => {
    const respuesta = await fetch("https://rickandmortyapi.com/api/character");
    const data = await respuesta.json();

    data.results.forEach((character) => {
        const template = document.createElement("template");

        template.innerHTML = `
            <div class="card mb-3" style="width: 18rem;">
                <img src="${character.image}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${character.name}</h5>
                    <p class="card-text">${character.species}</p>
                </div>
            </div>
        `.trim();

        const card = template.content.firstChild;

        lista.appendChild(card);
    });
};

pedirCharacters();

