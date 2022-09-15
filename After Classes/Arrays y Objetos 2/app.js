class Producto {
    constructor(id, nombre, precio, inventario) {
        this.id = Number(id);
        this.nombre = nombre;
        this.precio = Number(precio);
        this.inventario = Number(inventario);
    }

    mostrarStock() {
        alert(`Tenemos ${this.inventario} unidades disponibles.`);
    }
    realizarVenta() {
        this.inventario--;
        alert(`Venta realizada con éxito.`);
    }
    agregarStock() {
        this.inventario += cantidad;
        alert(`Has agregado ${this.cantidad} ${this.nombre} al inventario.`);
    }
}

function addToCarrito() {
    let id = Number(prompt("Id producto: "));
    let cantidad = Number(prompt("Cantidad"));

    let producto = productos.find((producto) => producto.id === id);

    producto.cantidad = cantidad;
    producto.total = producto.precio * cantidad;

    carrito.push(producto);
}

function removeFromCarrito() {
    let id = Number(prompt("Id producto a eliminar: "));

    let producto = productos.find((producto) => producto.id === id);

    let indice = carrito.indexOf(producto);

    carrito.splice(indice, 1);
}

function modificarCantidadCarrito() {
    let id = Number(prompt("Id producto a modificar: "));
    let cantidad = Number(prompt("Nueva cantidad: "));

    let producto = carrito.find((producto) => producto.id === id);

    producto.cantidad = cantidad;
    producto.total = producto.precio * cantidad;
}

function vaciarCarrito() {
    carrito = [];
}

function calcularTotalCarrito() {
    let total = 0;

    for (const producto of carrito) {
        total += producto.total;
    }

    return total;
}

function crearProducto() {
    let nuevoProducto = new Producto(
        prompt("Ingrese id: "),
        prompt("Ingrese nombre: "),
        prompt("Ingrese precio: "),
        prompt("Ingrese inventario inicial: ")
    );

    // let existe = productos.find((producto) => producto.id === nuevoProducto.id);

    // if (existe != undefined) {
    //     alert(`Producto ya existente`);
    // } else {
    //     productos.push(nuevoProducto);
    // }

    let existe = productos.filter(
        (producto) => producto.id == nuevoProducto.id
    );

    if (existe.length > 0) {
        alert(`Producto ya existente`);
    } else {
        productos.push(nuevoProducto);
    }
}

let productos = [
    new Producto(1, "Monitor", 15000, 10),
    new Producto(2, "Motherboard", 3000, 10),
    new Producto(3, "Teclado", 1200, 5),
    new Producto(4, "Mouse", 500, 5),
];

crearProducto();
console.log("Inventario de productos:", productos);

let carrito = [];

addToCarrito();
addToCarrito();
addToCarrito();
console.log("Carrito", carrito);

removeFromCarrito();

alert(`El total del carrito es: ${calcularTotalCarrito(carrito)}`);

const datos = [
    {
        nombre: "pam",
        edad: "21",
    },
    {
        nombre: "jim",
        edad: "20",
    },
    {
        nombre: "michael",
        edad: "40",
    },
];

const datosFiltrados = datos.filter((ele) => ele.edad > 20);
const nombres = datosFiltrados.map((ele) => ele.nombre);

console.log(datosFiltrados);
console.log(nombres);
console.log(nombres.join("\n"));
