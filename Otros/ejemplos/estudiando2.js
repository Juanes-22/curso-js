class producto {
    constructor(id, componente, nombre, precio){
        this.id = id;
        this.componente = componente;
        this.nombre = nombre;
        this.precio = Number(precio)
    }
}

const p1 = new producto (1, "motherboard", "asus B450", 20000);
const p2 = new producto (2, "procesador", "ryzen 5600x", 50000);
const p3 = new producto (3, "memoria ram", "g-skill trident z 16gb", 25000);
const p4 = new producto (4, "disco rigido", "NVMe samsung 970 evo 1tb", 45000);
const p5 = new producto (5, "placa video", "asus RTX 3080ti", 330000);

const productos = [];

productos.push (p1);
productos.push (p2);
productos.push (p3);
productos.push (p4);
productos.push (p5);

const carrito = [];


function addToCart (){

let productoId = Number(prompt (`Seleccione el Numero del producto:
1. Motherboard - asus - B450 - $20000
2. Procesador - ryzen 5600x - $50000
3. Memoria ram - g-skill trident z 16gb - $25000
4. Disco rigido - NVMe samsung 970 evo 1tb - $45000
5. Placa de video - asus RTX 3080ti - $330000
6. Ir al CARRITO`))


while (productoId != 6) {
    let cantidad = Number(prompt("seleccione cantidad de dicho producto"))

    let producto = productos.find(product => product.id===productoId)
    producto.cantidad = cantidad
    producto.total = producto.precio * cantidad
    carrito.push(producto)

productoId = Number(prompt (`seleccione producto:
1. Motherboard - asus - B450 - $20000
2. Procesador - ryzen 5600x - $50000
3. Memoria ram - g-skill trident z 16gb - $25000
4. Disco rigido - NVMe samsung 970 evo 1tb - $45000
5. Placa de video - asus RTX 3080ti - $330000
6. Ir al CARRITO`))

}
console.log(carrito)

let eleccion = Number(prompt(`seleccione: 
1. si quiere seguir agregando productos a su carrito
2. desea generar el total y realizar la compra`))

if (eleccion == 1) {
    addToCart();
} else {
    calcularTotal(carrito);
    console.log(`su total va a ser: $${calcularTotal(carrito)}`)
}
}
addToCart();

function calcularTotal(carrito){
    let total = 0;
    carrito.forEach(producto=> {
        total += producto.total
    })
    return total
}