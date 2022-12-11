let pagina = 1;
const btnAnterior = document.querySelector("#btnAnterior");
const btnSiguiente = document.querySelector("#btnSiguiente");

let peliculas = [];

cargarPeliculas();

btnSiguiente.addEventListener("click", () => {
    if (pagina < 1000) {
        pagina += 1;
        cargarPeliculas();
    }
});

btnAnterior.addEventListener("click", () => {
    if (pagina > 1) {
        pagina -= 1;
        cargarPeliculas();
    }
});

async function cargarPeliculas() {
    try {
        const data = await fetchPeliculas();
        peliculas = data.results;
        console.log(peliculas)
        mostrarPeliculas();
    } catch (err) {
        console.error(err);
    }
}

async function fetchPeliculas() {
    try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=b6dd2e259e3492195e82fdb397c19632&language=es-MX&page=${pagina}`);

        if (response.status === 200) {
            return await response.json();
        } else {
            throw Error(response.status);
        }
    } catch (err) {
        console.log(err);
    }
}

function mostrarPeliculas() {
    const sectionPeliculas = document.querySelector("#peliculas");

    sectionPeliculas.innerHTML = "";

    for (const pelicula of peliculas) {
        const { title, poster_path } = pelicula;

        const peliculaHTML = `
            <div class="movie">
                <img class="movie__poster" src="https://image.tmdb.org/t/p/w500/${poster_path}" />
                <h3 class="movie__title">${title}</h3>
            </div>        
        `;

        sectionPeliculas.innerHTML += peliculaHTML;
    }
}
