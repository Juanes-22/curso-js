// ARRAYS

/*
const array = [54, true, "Coder"];

console.log(array[0]);
console.log(array[1]);
console.log(array[2]);

const numeros = [54, 36, 28, 125];

for (let i = 0; i < 4; i++) {
    alert(numeros[i]);
}

*/

// MÉTODOS y PROPIEDADES DE ARRAYS

/*
const miArray = ["teclado", "mouse", "monitor"];

// .length da la longitud del array

console.log(miArray.length);

miArray.push("parlantes");

// .unshift() agrega elementos al principio del array

miArray.unshift(25);

console.log(miArray);

// .pop() elimina el último elemento del array

miArray.pop();

console.log(miArray);

// .shift() elimina el primer elemento del array

miArray.shift();

console.log(miArray);

// .splice()

miArray.splice(1, 2);

// .join() genera un string con todos los elementos del array

miArray.join["*"];

console.log(miArray);

*/

// ARRAY VACÍO

/*
const listaNombre = [];
let cantidad = 5;

do {
    let entrada = prompt("Ingrese un nombre");

    listaNombre.push(entrada);
} while (listaNombre.length != cantidad);

alert(listaNombre);

*/

// ELIMINAR ELEMENTO

/*
const componentes = ["teclado", "mouse", "monitor", "teclado"];

const eliminar = (comp) => {
    let index = componentes.indexOf(comp);

    if (index != -1) {
        componentes.splice(index, 1);
    }
};

eliminar();

*/

// ARRAY DE OBJETOS

const componentes = [
    {id: 1, descripcion:"teclado", precio: 500},
    {id: 2, descripcion: "mouse", precio: 200},
    {id: 3, descripcion: "webcam", precio: 300}
];

console.log(componentes);

for (const producto of componentes) {
    console.log(producto);
}
