

/*
const ejercicio3 = {
    name: "Jumping Jacks",
    muscles: ["Cuerpo Completo"],
    material: "Ninguno",
    stats: {
        fuerza: 1,
        equilibrio: 1,
        resistencia: 3,
    },
};
*/

console.log({ ejercicio1, ejercicio2, ejercicio3 });
console.table([ejercicio1, ejercicio2, ejercicio3]);

const rutina1 = {
    name: "Rutina abdomen",
    exercises: [],
};

rutina1.exercises.push(ejercicio1);
rutina1.exercises.push(ejercicio2);
rutina1.exercises.push(ejercicio3);

console.log(rutina1);

/*
const person = {
    name: "Juan",
    lastname: "Garcia",
    address: {
        street: "123 baker street",
        city: "london",
        country: "united kingdom",
    },
};

function Company(name) {
    let employees = [];

    this.name = name;

    this.getEmployees = function () {
        return employees;
    };

    this.addEmployee = function (employee) {
        employees.push(employee);
    };
}

const company = new Company("coca cola");
const company2 = new Company("pepsi");

company.addEmployee({ name: "ryan" });
company2.addEmployee({ name: "joe" });

console.log(company.getEmployees());
console.log(company2.getEmployees());
*/

class Person {
    constructor(name, lastname) {
        this.name = name;
        this.lastname = lastname;
    }
}

class Programmer extends Person {
    constructor(name, lastname, language) {
        super(name, lastname);
        this.language = language;
    }
}

const user = new Person("maria", "perez");
const programmer = new Programmer("joe", "mcmillan", "python");

console.log(user);
console.log(programmer);
