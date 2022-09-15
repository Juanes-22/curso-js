class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }

    mostrarProducto() {
        return `Producto: ${this.nombre}\nPrecio: $${this.precio}`;
    }
}

class DetallePedido {
    constructor(producto, cantidad) {
        this.producto = producto;
        this.cantidad = cantidad;
    }

    mostrarDetalle() {
        return `${this.producto.mostrarProducto()}\nCantidad: ${this.cantidad}`;
    }

    calcularMontoDetalle() {
        return this.cantidad * this.producto.precio;
    }
}

class Pedido {
    constructor(fecha, detalles) {
        this.fecha = fecha;
        this.detalles = detalles;
    }

    calcularTotal() {
        let resultado = 0;

        for (let i = 0; i < this.detalles.length; i++) {
            resultado += this.detalles[i].calcularMontoDetalle();
        }

        return resultado;
    }

    mostrarPedido() {
        let resultado = "";

        for (const detalle of this.detalles) {
            resultado += detalle.mostrarDetalle() + "\n\n";
        }
        resultado += `TOTAL: $${this.calcularTotal()}`;

        return resultado;
    }
}

let producto1 = new Producto("Sándwich de Bondiola", 900);
let producto2 = new Producto("Pizza Muzzarella", 1020);
let producto3 = new Producto("Papas Cheddar", 700);

// console.log(producto1.mostrarProducto());
// console.log(producto2.mostrarProducto());
// console.log(producto3.mostrarProducto());

let detalle1 = new DetallePedido(producto1, 3);
let detalle2 = new DetallePedido(producto2, 1);
let detalle3 = new DetallePedido(producto3, 2);

// console.log(detalle1);
// console.log(detalle1.mostrarDetalle());

// console.log(detalle2);
// console.log(detalle2.mostrarDetalle());

// console.log(detalle3);
// console.log(detalle3.mostrarDetalle());

// console.log(detalle1.calcularMontoDetalle());
// console.log(detalle2.calcularMontoDetalle());
// console.log(detalle3.calcularMontoDetalle());

let detalles1 = [];

detalles1.push(detalle1);
detalles1.push(detalle2);
detalles1.push(detalle3);

//console.log(detalles1)

let pedido1 = new Pedido(new Date(), detalles1);

// console.log(pedido1);
// console.log(pedido1.calcularTotal());
console.log(pedido1.mostrarPedido());
