class Tienda {
    constructor(nombre, direccion, propietario, rubro) {
        this.nombre = nombre;
        this.direccion = direccion;
        this.propietario = propietario;
        this.rubro = rubro;
    }

    estaAbierto(hora) {
        if ((hora >= 8 && hora <= 12) || (hora >= 15 && hora <= 19)) {
            return true;
        }
        return false;
    }

    esPropietario(nombre) {
        return this.propietario == nombre;
    }
}

const tienda1 = new Tienda("Kwik-E-Mart", "Park 123", "Apu", "Almacén");
const tienda2 = new Tienda(
    "Edna's Edibles",
    "Perez 323",
    "Edna Krbappel",
    "Panadería"
);
const tienda3 = new Tienda(
    "Springfield Mall",
    "Hall 231",
    "Mr. Burns",
    "Shopping"
);

let ingresados = "";

for (let i = 0; i < 5; i++) {
    let tienda = new Tienda(
        prompt("Nombre:"),
        prompt("Dirección:"),
        prompt("Propietario:"),
        prompt("Rubro")
    );

    ingresados += `
    Tienda: ${tienda.nombre}
    Dirección: ${tienda.direccion}
    Propietario: ${tienda.propietario}
    Rubro: ${this.rubro}
    `;
}

alert(ingresados);

const tienda4 = new Tienda("33 cents store", "cheap 231", "Bob", "Ropa");

for (let i = 0; i < 3; i++) {
    let entrada = parseInt(prompt("Ingresar hora en punto"));
    if (tienda4.estaAbierto(entrada)) {
        alert(`La tienda está abierta a las ${entrada}`);
    } else {
        alert(`La tienda está cerrada a las ${entrada}`);
    }
}

for (let i = 0; i < 5; i++) {
    let entrada = parseInt(prompt("Ingresar nombre de propietario"));

    if (tienda1.esPropietario(entrada)) {
        alert(`${entrada} es propietario de la tienda ${tienda1.nombre}`);
    }
}

class Cliente {
    constructor(nombre, presupuesto, tarjeta, telefono) {
        this.nombre = nombre;
        this.presupuesto = parseFloat(presupuesto);
        this.tarjeta = tarjeta;
        this.telefono = telefono;
    }

    transferirDinero(valor) {
        if (this.presupuesto > 0 && valor < this.presupuesto) {
            this.presupuesto -= valor;
            return valor;
        } else {
            return 0;
        }
    }
}

const cliente1 = new Cliente("Homero", 2000, true, "1234560");
const cliente2 = new Cliente("Carlos", 1000, false, "21234560");
const cliente3 = new Cliente("Barny", 50, false, "231234560");

let entrada = parseFloat(prompt("Ingresar monto: "));

if (cliente1.transferirDinero(entrada)) {
    alert(`El cliente ${cliente1.nombre} te puede pagar $${this.entrada}`);
}
