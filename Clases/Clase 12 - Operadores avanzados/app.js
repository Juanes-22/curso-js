/*
let precio = 50;

if (precio < 40) {
    console.log("El producto es accesible");
} else {
    console.log("El producto es costoso");
}

// operador ternario
console.log(precio < 40 ? "El producto es accesible" :"El producto es costoso");

const mensajeDOM = document.querySelector("#mensaje");

mensajeDOM.innerHTML = precio < 40 ? `<h1>El producto es accesible</h1>` : `<h1>El producto es costoso</h1>`;

document.appendChild(mensajeDOM);
*/

/*
// operador AND

const cursos = [];

if (cursos.length === 0) {
    console.log("No hay cursos disponibles");
}

cursos.length === 0 && console.log("No hay cursos disponibles");

const usuario = {
    nombre: "John Doe",
    edad: 14,
};

const registroIngreso = usuario.edad >= 18 && new Date();

console.log(registroIngreso);
*/

/*
// operador OR

const usuario1 = {
    nombre: "Coder",
    edad: 25,
};

const usuario2 = null;

console.log(usuario1 || "El usuario no existe ");
console.log(usuario2 || "El usuario no existe ");
*/

/*
let carrito = [];

let carritoLocalStorage = JSON.parse(localStorage.getItem("carrito"));

if (carritoLocalStorage) {
    carrito = carritoLocalStorage;
} else {
    carrito = [];
}

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
*/

/*
const usuario = {
    nombre: "coder",
    edad: 25,
    cursos: {
        js: "En curso",
    },
};

console.log(usuario?.cursos?.js || "La propiedad no existe");
console.log(usuario?.cursos?.sql || "La propiedad no existe");
*/

/*
// DESTRUCTURING
const usuario = {
    nombre: "coder",
    edad: 25,
    cursos: {
        js: "En curso",
    },
};

console.log(usuario.cursos.js);

const { nombre, edad } = usuario;

console.log(nombre);

const nombres = ["Juan", "Pedro", "Maria", "Jose"];

const [a, b] = nombres;

console.log(a);

const producto = {
    id: 10,
    nombre: "curso js",
    precio: 12500,
};

const desestructurar = (item) => {
    const { id, nombre } = item;
    console.log(id, nombre);
};

desestructurar(producto);
*/

/*
// SPREAD OPERATOR

const frutas = ["🍉", "🍎", "🍐", "🍌", "🍇", "🍍"];
const comidas = ["🍕", "🍔", "🍚", "🥩", "🍗", "🍫"];

const combinados = [...frutas, ...comidas];

console.log(combinados);

// antes
frutas.forEach((fruta) => {
    comidas.push(fruta);
});

// despues
comidas.push(...comidas);

const usuario1 = {
    nombre: "coder",
    edad: 25,
    cursos: {
        js: "En curso",
    },
};

const usuario2 = {
    ...usuario1,
    domicilio: "Calle falsa 123",
};

console.log(usuario2);

usuario1.nombre = "Pepe";

console.log(usuario2);
*/

