class Producto {
    constructor(id, nombre, precio, detalle = "Este producto es muy fachero", img = "...") {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.detalle = detalle;
        this.img = img;
    }
}

let baseDatos = [];

baseDatos.push(new Producto(0, "Flauta", 300, "Está cara la flauta"));
baseDatos.push(new Producto(1, "Zapatilla", 100));
baseDatos.push(new Producto(2, "Cuchara", 1000));
baseDatos.push(new Producto(3, "Tenedor", 1000));
baseDatos.push(new Producto(4, "Grapadora", 50, "Grapadora que grapa"));
baseDatos.push(new Producto(5, "Messi", 1000000000000, "Es Messi.", "./img/messi.png"));

// DOM
// Nodos son objetos del DOM

let seccionProductos = document.getElementById("section-productos");
/*
seccionProductos.innerText = "Hola que hace";
seccionProductos.innerHTML = `
    <p>Hola que hace</p>
`;
*/

// seleccionado por etiqueta
let template = seccionProductos.querySelector("template");

// hay que usar content con la etiqueta template
let card = template.content.querySelector("div");

// añadir card a nuestro arbol de nodos, a nuestra section especificamente
// seccionProductos.appendChild(card);

// let cardClonada1 = card.cloneNode(true);
// let cardClonada2 = card.cloneNode(true);

// lo anterior es muy ineficiente, por tanto se hace un forEach
baseDatos.forEach((producto) => {
    let cardClonada = card.cloneNode(true);
    seccionProductos.appendChild(cardClonada);

    //console.log(cardClonada.children);

    // nombre del producto
    cardClonada.children[0].innerText = producto.nombre;

    // imagen
    cardClonada.children[1].src = producto.img;

    // precio
    cardClonada.children[2].innerText = producto.precio;

    // detalle
    cardClonada.children[3].innerText = producto.detalle;


    if (producto.nombre == "Cuchara") {
        cardClonada.children[3].disabled = "true";
    }
});
