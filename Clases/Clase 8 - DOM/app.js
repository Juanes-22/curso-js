/*
let elemento = null;

elemento = document;

elemento = document.forms;

elemento = document.head;

elemento = document.scripts;

console.log(elemento)
*/

// MÉTODO TRADICIONAL

/*
const contenedores = document.getElementsByClassName("container");

console.log(contenedores);

const formulario = document.getElementById("formulario");

console.log(formulario);

const texto = document.getElementsByTagName("h2");

console.log(texto);
*/

// MÉTODO MODERNO

/*
// sólo retorna el primero:
// const contenedores = document.querySelector(".container");

// retorna todos los elementos:
const contenedores = document.querySelectorAll(".container");

console.log(contenedores);

const formulario = document.querySelectorAll("#formulario");

console.log(formulario);

const texto = document.querySelectorAll("h2");

console.log(texto);
*/

/*
const texto = document.querySelector("h2");
texto.textContent = "Texto modificado";

console.log(texto);

const otroTexto = document.querySelector("h3");
otroTexto.remove();

console.log(otroTexto);
*/

/*
let agregado = document.createElement("h5");

agregado.innerHTML = "<h5>Párrafo de demostración</h5>";

document.body.appendChild(agregado);
*/

/*
const lista = document.querySelector("#lista-carrito");

let cursos = ["Diseño UX/UI", "Marketing", "Producto", "Data"];

for (let curso of cursos) {
    let listado = document.createElement("li");
    listado.innerHTML = curso;
    lista.appendChild(listado);
}
*/

let cursos = [
    { id: 1, titulo: "Diseño UI/UX", precio: 1000 },
    { id: 2, titulo: "Marketing", precio: 1500 },
    { id: 3, titulo: "Data", precio: 2000 },
];

for (const curso of cursos) {
    let contenedor = document.createElement("div");
    
    contenedor.innerHTML = `
    <h3>Curso: ${curso.titulo}</h3>
    <p>Precio: ${curso.precio}</p>    
    `;

    document.body.appendChild(contenedor);
}
