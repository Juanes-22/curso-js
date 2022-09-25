/*
const ejemplo = {
    firstName: "John",
    lastName: "Smith",
    address: {
        streetAddress: "21 2nd Street",
        city: "New York",
        state: "NY",
        postalCode: 10021,
    },
    phoneNumbers: ["212-732-1234", "646-123-4567"],
};

console.log(ejemplo);

const obj_json = `
{
    "firstName": "John",
    "lastName": "Smith",
    "address": {
        "streetAddress": "21 2nd Street",
        "city": "New York",
        "state": "NY",
        "postalCode": 10021
    },
    "phoneNumbers": ["212-732-1234", "646-123-4567"]
}`;

const obj = JSON.parse(obj_json);

console.log(obj);

*/

/*
const curso = {
    titulo: "JavaScript",
    duracion: 16,
    finalizado: false,
};

const cursoJSON = JSON.stringify(curso);

console.log(cursoJSON);

localStorage.setItem("curso", "JavaScript");

sessionStorage.setItem("curso", "React");

*/

/*
const curso = {
    titulo: "JavaScript",
    precio: 20000,
};

const cursoJSON = JSON.stringify(curso);

localStorage.setItem("cursoActual", cursoJSON);

console.log(cursoJSON);
*/

/*
const cursos = ["Desarrollo Web", "JavaScript", "React", "Node"];

const cursosJSON = JSON.stringify(cursos);

localStorage.setItem("cursos", cursosJSON);
*/

/*
const cursos = localStorage.getItem("cursos");

const cursosArray = JSON.parse(cursos);

console.log(cursosArray);

cursosArray.push("Data");

console.log(cursosArray);

localStorage.setItem("cursos", JSON.stringify(cursosArray));
*/

// EJERCICIO

class Product {
    constructor(name, price, quantity) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }
}

const productos = [];

for (let i = 0; i < 3; i++) {
    const producto = new Product(prompt("Ingrese nombre producto: "), prompt("Ingrese precio: "), prompt("Ingrese cantidad: "));

    productos.push(producto);
}

localStorage.setItem("productos", JSON.stringify(productos));

console.log((JSON.parse(localStorage.getItem("productos"))));
