
// Armando una base de datos y mostrarla como ecommerce
// Quiero 3 objetos los cuales cuentan con 
//   > id
//   > nombre
//   > precio

// Quiero mostrar estos productos en mi html

class Producto {
    constructor(id, nombre, precio, detalle = "Este producto es muy fachero",img = "js/messi.png") {
        this.id = id
        this.nombre = nombre
        this.precio = precio
        this.detalle = detalle
        this.img = img
    }
}

let baseDatos = []
baseDatos.push(new Producto(0,"Clarinetes",300000,"Esta caro el clarinete"))
baseDatos.push(new Producto(1,"Zapatilla",100))
baseDatos.push(new Producto(2,"cuchara",100000))
baseDatos.push(new Producto(3,"tenedor",10000))
baseDatos.push(new Producto(4,"Grapadora",50,"Grapadora que grapa"))
baseDatos.push(new Producto(5,"Messi",1000000000,"Messi"))

let baseFiltrada = [baseDatos[1],baseDatos[4]]

// DOM
let section = document.getElementById("seccion-productos")
let temp = document.querySelector("template")
let card = temp.content.querySelector("div")


function renderizar(array) {

    section.innerHTML = ""

    array.forEach((producto)=> {
        let cardClonada = card.cloneNode(true)
        section.appendChild(cardClonada)
        // Nombre del producto
        cardClonada.children[0].innerText = producto.nombre
    
        // Precio
        cardClonada.children[1].innerText = producto.precio
        
        // Detalle
        cardClonada.children[2].innerText = producto.detalle
    
        //Img
        // cardClonada.children[1].src = producto.img
    
    
        
    
        if (producto.nombre == "cuchara") {
            cardClonada.children[3].disabled = "true"
        }
    
    
        // NO ES EFECTIVO
        // let div = document.createElement("div")
        // div.innerHTML = `
        //     <div class="product-card">
        //     <h3 class="bg-blue">${producto.nombre}</h3>
        //     <p>precio</p>
        //     <p>detalle</p>
        //     <button>Comprar</button>
        //     </div>
    
        //     <div>
        // `
    
    })
}








    


































