/*

- Desafío complementario 1 -
Nombre: Juan Esteban García Martínez

Enunciado: 
Algoritmo que repite un bloque de instrucciones. 
Para cada repetición se debe efectura una operación para
obtener una salida por alerta o consola.

Descripción:
Mi programa se compone de un menú con 3 opciones. Consiste
de un ciclo While que se repite hasta que la opción ingresada 
por el usuario sea "3" (que corresponde a la opción de salir).
Con la opción 1 se pide una palabra y un número, y con la opción 2 
se muestra por un alert un mensaje que corresponde a la palabra 
ingresada repetida el número de veces proporcionado por el usuario, 
esto mediante un ciclo For con el que se realiza una concatenación.

*/


let opcion = null;
let palabra = null;
let numero = null;
let mensaje = "";

while (opcion != "3") {
    opcion = prompt(`
    Bienvenido!
    Elige una opción:
    [1] Ingresar palabra
    [2] Imprimir mensaje
    [3] Salir
    `);

    switch (opcion) {
        case "1":
            palabra = prompt("Ingresa palabra: ");
            numero = parseInt(prompt("Ingresa número: "));
            break;
        case "2":
            for (let i = 0; i < numero; i++) {
                mensaje += palabra + "\n";
            }
            alert(mensaje);
            break;
        case "3":
            alert("Has salido del programa...");
            break;
        default:
            alert("Ingresa una opción válida!");
            break;
    }
}
