class Hamburguesa {
    constructor(nombre, precio, ingredientes, combo) {
        this.nombre = nombre;
        this.precio = parseFloat(precio);
        this.ingredientes = ingredientes;
        this.combo = parseInt(combo);
    }
}

const hamburguesas = [];

hamburguesas.push(new Hamburguesa("Krusty Burger", 150, ["Carne", "Queso"], 1));
hamburguesas.push(new Hamburguesa("Krusty Doble", 250, ["Carne", "Queso", "Panceta"], 0));
hamburguesas.push(new Hamburguesa("Krusty Pollo", 150, ["Pollo", "Queso"], 2));
hamburguesas.push(new Hamburguesa("Super Krusty", 150, ["Carne", "Queso", "Huevo"], 5));
hamburguesas.push(new Hamburguesa("Krusty Vegan", 150, ["Espinaca", "Soja"], 7));

guardarLocalStorage();
elegirHamburguesa();
aumentarPrecioHamburguesas();
elegirHamburguesa();

function guardarLocalStorage() {
    localStorage.setItem('hamburguesas', JSON.stringify(hamburguesas));
}

function elegirHamburguesa() {
    let almacenadas = localStorage.getItem('hamburguesas');

    console.log(JSON.parse(almacenadas));

    if (almacenadas != null) {
        let objetos = JSON.parse(almacenadas);
        let salida = "Seleccionar hamburguesa:\n";

        for (let i = 0; i < objetos.length; i++) {
            salida += `${i} -> ${objetos[i].nombre} ${objetos[i].ingredientes} $${objetos[i].precio}\n`;
        }
        alert(salida);

        let eleccion = parseInt(prompt("Ingresar hamburguesa: "));
        if (eleccion >= 0 && eleccion < objetos.length) {
            alert(`Hamburguesa seleccionada: ${objetos[eleccion].nombre}`);
        } else {
            alert("Error de selección");
        }
    }
}

function aumentarPrecioHamburguesas() {
    let guardadas = localStorage.getItem('hamburguesas');

    if (guardadas != null) {
        let objetos = JSON.parse(guardadas);
        objetos.forEach((hamburguesa) => {
            hamburguesa.precio += hamburguesa.precio * 0.3;
        });
        localStorage.setItem('hamburguesas', JSON.stringify(objetos));
    }
}
