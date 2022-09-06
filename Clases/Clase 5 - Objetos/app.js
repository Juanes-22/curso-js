const nombre = "Teclado mecánico Genius";
const precio = 300;
const disponible = true;

// OBJETO LITERAL
const producto = {
    // propiedades
    nombre: "Teclado mecánico Genius",
    precio: 300,
    disponible: true,
};

console.log(producto);

console.log(producto.nombre);

// agregar propiedades
producto.imagen = "imagen.jpg";

console.log(producto);

// eliminar propiedades
delete producto.disponible;

console.log(producto);

// CONSTRUCTOR
function Producto(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
    this.disponible = true;
}

const producto2 = new Producto("Monitor", 200);

console.log(producto);

let cadena = "Hola Coder";

// MÉTODOS
console.log(cadena.toUpperCase());

// MÉTODOS PERSONALIZADOS
function Cliente(nombre, edad, domicilio) {
    this.nombre = nombre;
    this.edad = edad;
    this.domicilio = domicilio;
    this.saludar = function () {
        console.log("Saludos " + this.nombre);
    };
}

const cliente1 = new Cliente("Coder", 26, "Pública s/n");
const cliente2 = new Cliente("Juan", 21, "Manzana s/n");

console.log(cliente1);

cliente1.saludar();
cliente2.saludar();

// CLASES

class Persona {
    constructor(nombre, acceso) {
        this.nombre = nombre;
        this.acceso = acceso;
    }
}

const coder = new Cliente("Coder", "Accepted");

console.log(coder);

class Usuario {
    constructor(nombre, acceso) {
        this.nombre = nombre;
        this.acceso = acceso;
    }

    mostrarInfoUsuario() {
        return `Usuario: ${this.nombre}, tu acceso es: ${this.acceso}`;
    }
}

const coderhouse = new Usuario("Coder", "Accepted");

console.log(coderhouse.mostrarInfoUsuario());
