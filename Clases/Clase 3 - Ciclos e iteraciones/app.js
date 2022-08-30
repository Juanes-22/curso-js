
/*
let food = prompt("¿Qué se te antoja cenar?");

switch (food) {
    case "hamburguesa":
        console.log(`Pedido: ${food}, valor 1000`); // `` template literals
        break;
    case "pizza":
        console.log(`Pedido: ${food}, valor 1200`);
        break;
    case "lomo":
        console.log(`Pedido: ${food}, valor 900`);
    default:
        console.log("Hoy no pedimos cena");
        break;
}
*/

/*
let option = prompt(`Elija una opción de película:
1. Batman
2. Superman
3. Spiderman
4. MoonFall`);

switch (option) {
    case "1":
        console.log("Batman");
        break;
    case "2":
        console.log("Superman");
        break;
    case "3":
        console.log("Spiderman");
        break;
    case "4":
        console.log("MoonFall");
        break;
    default:
        console.log("No ingresaste una opción válida");
        break;
}
*/

// WHILE

/*
let x = 0;

while (x <= 10) {
    console.log(`El valor de x es: ${x}`);
    x++;
}
*/

/*
let entrada = prompt("Ingrese un texto o ESC para interrumpir");

let texto = "";

while (entrada != "ESC" && entrada != "esc") {
    texto += entrada + " ";
    entrada = prompt("Ingrese un texto o ESC para interrumpir");
}

alert(texto);
*/

// DO WHILE

/*
let y = 0;

do {
    console.log(`El valor de y es: ${y}`);
    y++;
} while (y <= 10);
*/

/*
let x = 20;

do {
    console.log(x);
    x++;
} while (x <= 30);
*/

// FOR

/*
for (let i = 0; i <= 10; i++) {
    console.log(i);
}
*/

// TABLA DE MULTIPLICAR

let numero = prompt("Ingrese número: ");

for (let i = 0; i <= 10; i++) {
    let resultado = numero * i;

    console.log(`${numero} x ${i} = ${resultado}`);
}

for (let i = 0; i <= 10; i++) {
    if (i == 6) {
        break;
    }
    console.log(`El valor de i es: ${i}`);
}

for (let i = 0; i <= 10; i++) {
    if (i == 6) {
        continue;
    }
    console.log(`El valor de i es: ${i}`);
}