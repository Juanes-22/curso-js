/*
function primero(segundo) {
    setTimeout(() => {
        console.log("Primero");
        segundo();
    }, 3000);
}

function segundo() {
    console.log("Segundo");
}

primero(segundo);
*/

// MÉTODOS AVANZADOS DE ARRAYS

/*
const pendientes = ["desafíos", "entregas", "valoraciones", "guion"];

pendientes.forEach((pendiente, indice) => {
    console.log(`${indice}: ${pendiente}`);
});

const numeros = [1, 2, 3, 4, 5, 6];

numeros.forEach((num) => {
    console.log(num);
});

pendientes.map((ele) => {
    console.log(`${ele}`);
});

const cursos = [
    { nombre: "JavaScript", precio: 15000 },
    { nombre: "ReactJS", precio: 22000 },
    { nombre: "AngularJS", precio: 22000 },
    { nombre: "Desarrollo Web", precio: 16000 },
];

const nombres = cursos.map((ele) => ele.nombre);
console.log(nombres);

const carrito = [
    { nombre: "Mouse", precio: 5000 },
    { nombre: "Webcam", precio: 1000 },
    { nombre: "Impresora", precio: 1500 },
];

let total = 0;

carrito.forEach((producto) => {
    total += producto.precio;
});

let resultado = carrito.reduce((acumulado, producto) => {
    return acumulado + producto.precio;
}, 0);

console.log(resultado);

*/

/*
const carrito = [
    { nombre: "Mouse", precio: 5000 },
    { nombre: "Webcam", precio: 1000 },
    { nombre: "Impresora", precio: 1500 },
];

let resultado = carrito.filter((producto) => producto.nombre != "Mouse");

console.log(resultado)

*/

// MATH

console.log(Math.PI);
console.log(Math.max(32, 54, 21, 65, 11, 76));

// DATE

console.log(new Date());

const hoy = new Date("September 07, 2022");

console.log(hoy.getFullYear());
console.log(hoy.getMonth());
