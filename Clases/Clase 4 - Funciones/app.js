/*
function solicitarNombre () {
    let nombre = prompt("Ingrese su nombre: ");
    console.log(`El nombre del usuario es: ${nombre}`);
}

solicitarNombre();
*/

/*
function sumar (x, y) {
    let resultado = x + y;
    return resultado;
}

console.log(sumar(5, 6));
*/

/*
function sumar (x, y) {
    let resultado = x + y;
    return resultado;
}

let numero1 = Number(prompt("Ingrese un número: "));
let numero2 = Number(prompt("Ingrese otro número: "));

let resultado = sumar(numero1, numero2);

console.log(resultado);
*/

/*
function saludar (nombre, apellido) {
    console.log(`Hola ${nombre} ${apellido}!`);
}

saludar("Juan", "García");
*/

/*
let x = 0;
let y = 0;

function calculadora (x, y, operacion) {
    switch (operacion) {
        case "+":
            return x + y
            break;
        case "-":
            return x - y;
            break;
        case "*":
            return x * y;
            break;
        case "/":
            return x / y;
            break;
        default:
            return 0;
            break;
    }
}

console.log(calculadora(30, 50, "/"));
*/

// SCOPE O AMBITO DE LAS VARIABLES

/*
function crearMensaje () {
    let mensaje = "Mensaje de prueba";
}

console.log(mensaje);
*/

/*
iniciarApp();

function iniciarApp() {
    console.log("Iniciando app...");

    segundaFuncion();
}

function segundaFuncion() {
    console.log("Desde la segunda funcion");

    usuarioAutenticado("Coder");
}

function usuarioAutenticado(usuario) {
    console.log("Autenticando usuario... espere");
    console.log(`Usuario autenticado: ${usuario}`);
}
*/

// FUNCIONES FLECHA

/*
const aprendiendo2 = () => {
    return "Aprendiendo JavaScript";
};

const aprendiendo2 = () => "Aprendiendo JavaScript";

console.log(aprendiendo2());


const suma = (a, b) => a + b;

console.log(suma(15, 20));
*/

// FUNCIONES ANÓNIMAS

/*
const saludo = function () {
    return "Hola";
}

console.log(saludo());


let producto = function (a, b) {
    return a * b;
}

let resultado = producto(3, 8);

console.log(resultado);
*/

