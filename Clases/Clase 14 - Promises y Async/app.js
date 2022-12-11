/*
setTimeout(() => {
    console.log("Saludos desde setTimeOut");
}, 3000);
*/

/*
console.log("Iniciar el proceso");

setTimeout(() => {
    console.log("Proceso ejecutandose");
}, 2000);

console.log("Fin del proceso");
*/

/*
console.log("primero");

setTimeout(() => {
    console.log("segundo");
}, 0);

console.log("tercero");

setTimeout(() => {
    console.log("cuarto");
}, 0);

new Promise((resolve) => {
    resolve("promesa");
}).then((res) => console.log(res));

function prueba() {
    console.log("funcion");
}

prueba();
*/

/*
const aplicarDescuento = new Promise((resolve, reject) => {
    const descuento = true;
    if (descuento) {
        resolve("descuento aplicado");
    } else {
        reject("no se puede aplicar el descuento");
    }
});

aplicarDescuento
    .then((res) => {
        console.log(res);
    })
    .catch((err) => {
        console.log(err);
    });
*/

/*
const productos = [
    { id: 1, nombre: "monitor", precio: 500 },
    { id: 2, nombre: "teclado", precio: 150 },
    { id: 3, nombre: "mouse", precio: 100 },
];

const findProdById = (id) => {
    const prod = productos.find((item) => item.id === id);

    return new Promise((resolve, reject) => {
        if (prod) {
            resolve(prod);
        } else {
            reject("no se encuentra el producto");
        }
    });
};

findProdById(2)
    .then((prod) => {
        console.log(prod);
    })
    .catch((err) => {
        console.log(err);
    });
*/

/*
const baseDatos = [
    { id: 1, nombre: "monitor", precio: 500 },
    { id: 2, nombre: "teclado", precio: 150 },
    { id: 3, nombre: "mouse", precio: 100 },
];

// simulando consulta a una base de datos
const pedirProductos = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(baseDatos);
        }, 3000);
    });
};

const renderProductos = (productos) => {
    console.log(productos);
};

let productos = [];

pedirProductos().then((res) => {
    productos = res;
    renderProductos(productos);
});
*/