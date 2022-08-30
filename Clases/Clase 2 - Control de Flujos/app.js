/*
if (condicion) {
    // bloque verdadero
}
else {
    // bloque falso
}
*/

/* OPERADORES LÓGICOS

==  igual a
!=  diferente a
=== estrictamente igual
!== estrictamente diferente
>   mayor que
>=  mayo o igual que
<   menor que
<=  menor o igual que
||  OR
&&  AND

*/

const puntaje = "1000";

/*
if (puntaje == 1000) {
    console.log("Es igual");
}
else {
    console.log("No es igual");
}
*/

// == no valida el tipo de datos
// === estrictamente igual -> sí valida el tipo de datos

if (puntaje === 1000) {
    console.log("Es igual");
} else {
    console.log("No es igual");
}

// --------------------------------------------------- //

/*
const dinero = 600;
const total_a_pagar = 500;

if (dinero >= total_a_pagar) {
    console.log("Podemos pagar");
} else {
    console.log("Fondos insuficientes");
}
*/

// --------------------------------------------------- //

/*
const dinero = 300;
const total_a_pagar = 800;
const tarjeta = true;

if (dinero >= total_a_pagar) {
    console.log("Podemos pagar");
} else if (tarjeta) {
    console.log("Puedo abonar porque tengo tarjeta");
} else {
    console.log("Fondos insuficientes");
}
*/

// --------------------------------------------------- //

const efectivo = 300;
const credito = 400;
const disponible = efectivo + credito;
const total_a_pagar = 600;

if (
    efectivo >= total_a_pagar ||
    credito > total_a_pagar ||
    disponible > total_a_pagar
) {
    console.log("Podemos comprar");
} else {
    console.log("Fondos insuficientes");
}

// --------------------------------------------------- //

let precio = prompt("Ingrese el precio del producto: ");

if (precio >= 100) {
    alert("El producto es muy costoso");
} else if (precio >= 50) {
    alert("El producto es caro");
} else {
    alert("El precio del producto es accesible");
}

// --------------------------------------------------- //

let nombre_alumno = prompt("Ingrese el nombre del alumno:");
let apellido_alumno = prompt("Ingrese el apellido del alumno:");

if (nombre_alumno != "" && apellido_alumno != "") {
    alert("Nombre: " + nombre_alumno + "\nApellido: " + apellido_alumno);
} else {
    alert("No ingresó datos");
}
