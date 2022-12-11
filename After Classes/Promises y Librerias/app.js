/*
const autenticado = true;

let mensaje = autenticado ? "usuario autenticado" : "usuario no autenticado";

console.log(mensaje)

*/


const saldo = 1000;
const pagar = 1100;
const tarjeta = true;

const mensaje = saldo > pagar ? "pagar" : tarjeta ? "pagar con tarjeta" : "no puede comprar";

console.log(mensaje);


/*
const producto = {
    nombre: "monitor 20 pulgadas",
    precio: 300,
    disponible: true,
};


const { precio, disponible } = producto;

console.log(precio, disponible);
*/

/*
const producto = {
    nombre: "monitor 20 pulgadas",
    precio: 300,
    disponible: true,
};

const cliente = {
    nombre: "Juan",
    tipo: "premium",
};

// error:
//const { nombre } = producto;
//const { nombre } = cliente;

// uso de alias:
const { nombre } = producto;
const { nombre: nombreCliente } = cliente;

console.log(nombre);
console.log(nombreCliente);
*/

/*
const producto = {
    nombre: "monitor 20 pulgadas",
    precio: 300,
    disponible: true,
};

const cliente = {
    nombre: "Juan",
    tipo: "premium",
};

const obj = {
    producto: { ...producto },
    cliente: { ...cliente },
};

console.log(obj);
*/

/*
const carrito = [];

// operador AND
carrito.length === 0 && console.log("El carrito está vacío");
*/

/*
const usuario1 = {
    nombre: "John Doe",
    edad: 14,
};

const usuario2 = null;

console.log(usuario1 || "El usuario no existe");

console.log(usuario2 || "El usuario no existe");
*/

/*
// operador ??

console.log(0 ?? "nullish");
console.log(40 ?? "nullish");
console.log(null ?? "nullish");
console.log(undefined ?? "nullish");
console.log(false ?? "nullish");
*/