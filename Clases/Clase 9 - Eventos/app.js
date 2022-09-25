/*
const boton = document.querySelector("#btn-saludar");

boton.onclick = function () {
    alert("Saludos!");
};
*/

const contenedor = document.querySelector(".section-productos");
console.log(contenedor);

/*
contenedor.addEventListener("click", () => {
    console.log("Diste Click!");
});
*/

/*
contenedor.addEventListener("mouseenter", () => {
    console.log("Puntero ingresó!");
});
*/

/*
contenedor.addEventListener("mouseout", () => {
    console.log("Salió el puntero!");
});
*/

/*
const botonCarrito = document.querySelector("a");

botonCarrito.addEventListener("mouseover", () => {
    console.log("Puntero encima!");
});

botonCarrito.addEventListener("dblclick", () => {
    console.log("Diste doble click!");
});
*/

const inputNombre = document.querySelector("#nombre");

/*
inputNombre.addEventListener("keydown", () => {
    console.log("Escribiendo...");
});
*/

/*
inputNombre.addEventListener("input", () => {
    console.log("Input...");
});
*/

/*
inputNombre.addEventListener("input", (e) => {
    //console.log(e.data);
    console.log(e.target.value);

    if (e.target.value === "") {
        console.log("Vacío");
    }
});
*/

/*
inputNombre.addEventListener("blur", (e) => {
    if (e.target.value === "") {
        console.log("Campo obligatorio");
    } else {
        console.log("Pasaste la validación");
    }
});
*/

const formulario = document.querySelector("form");

const nombre = document.querySelector("#nombre");
const email = document.querySelector("#email");

formulario.addEventListener("submit", validarFormulario);

// cuando le de submit ejecute:
function validarFormulario(e) {
    e.preventDefault();

    // muestra los valores capturados en los inputs
    console.log(`${nombre.value} ${email.value}`);
}
