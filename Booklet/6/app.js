class Jugador {
    constructor(nombre, camiseta, edad, lesionado) {
        this.nombre = nombre;
        this.camiseta = camiseta;
        this.edad = edad;
        this.lesionado = lesionado;
    }
}

const jugadores = [];

jugadores.push(new Jugador("BART", 15, 11, false));
jugadores.push(new Jugador("NELSON", 2, 18, false));
jugadores.push(new Jugador("MILLHOUSE", 68, 12, true));
jugadores.push(new Jugador("MARTIN", 0, 11, false));
jugadores.push(new Jugador("ROD", 98, 12, false));

console.log(jugadores);

function buscarJugador(equipo, jugador) {
    return equipo.find((objeto) => objeto.nombre === jugador.toUpperCase());
}

for (let i = 0; i < 3; i++) {
    let busqueda = buscarJugador(
        jugadores,
        prompt("Ingresar nombre de jugador: ")
    );
    if (busqueda != undefined) {
        alert(`
        Jugador: ${busqueda.nombre}
        Camiseta: ${busqueda.camiseta}
        Edad: ${busqueda.edad}
        `);
    } else {
        alert("No existe jugador con ese nombre");
    }
}

function filtroJugadores(equipo, edad) {
    return equipo.filter((objeto) => objeto.edad == parseInt(edad));
}

function listaJugadores(jugadores) {
    let lista = "";
    for (const jugador of jugadores) {
        lista += `
        Jugador: ${busqueda.nombre}
        Camiseta: ${busqueda.camiseta}
        Edad: ${busqueda.edad}
        `;
    }
    return lista;
}

for (let i = 0; i < 5; i++) {
    let filtro = filtroJugadores(
        jugadores,
        prompt("Ingresar edad de jugador: ")
    );
    if (filtro.length > 0) {
        alert(listaJugadores(filtro));
    } else {
        alert("No existen jugadores con esa edad");
    }
}
