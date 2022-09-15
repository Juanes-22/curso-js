/*

- Desafío complementario 2 -
Nombre: Juan Esteban García Martínez

Enunciado: 
- Incorporar al menos un array en tu proyecto
- Utilizar algunos de los métodos o propiedades vistos en la clase

Descripción:


*/

class Usuario {
    constructor(username, password, loginStatus, registerDate) {
        this.username = username;
        this.password = password;
        this.loginStatus = loginStatus;
        this.registerDate = registerDate;
    }

    verifyLogin() {}

    register() {}

    login() {}

    logout() {}
}

class Perfil extends Usuario {
    constructor(datosUsuario, isPremium) {
        super();
        this.datosUsuario = datosUsuario;
        this.isPremium = isPremium;
        this.sesiones = [];
        this.rutinas = [];
    }

    mostrarPerfil() {
        return `
        Nombre: ${this.datosUsuario.nombre}
        Apellido: ${this.datosUsuario.apellido}
        Sexo: ${this.datosUsuario.sexo}
        Edad: ${this.datosUsuario.edad}
        Email: ${this.datosUsuario.email}
        Altura: ${this.datosUsuario.altura} cm
        Peso: ${this.datosUsuario.peso} kg
        Ubicación: ${this.datosUsuario.ubicacion}
        Premium: ${this.isPremium}
        `;
    }

    actualizarDatos() {}

    mostrarSesiones() {
        return this.sesiones;
    }

    mostrarRutinas() {
        return this.rutinas;
    }

    agregarSesion(sesion) {
        this.sesiones.push(sesion);
    }

    agregarRutina(rutina) {
        this.rutinas.push(rutina);
    }
}

class Ejercicio {
    constructor(nombre, musculos, material, estadisticas) {
        this.nombre = nombre;
        this.musculos = musculos;
        this.material = material;
        this.estadisticas = estadisticas;
    }

    mostrarEjercicio() {
        let salida = `
        Ejercicio: ${this.nombre}
        Grupo Muscular: ${this.musculos}
        Estadísticas: ${JSON.stringify(this.estadisticas)}
        `;

        return salida;
    }
}

class Rutina {
    constructor(
        nombre,
        dificultad,
        ejercicios,
        rondas,
        musculos,
    ) {
        this.nombre = nombre;
        this.dificultad = dificultad;
        this.ejercicios = ejercicios;
        this.rondas = Number(rondas);
        this.musculos = musculos;
        this.estadisticas = {fuerza: null, resistencia: null, equlibrio: null};
    }

    mostrarRutina() {
        let salida = `
        Rutina: ${this.nombre}
        Dificultad: ${this.dificultad}
        Rondas: ${this.rondas}
        Grupo Muscular: ${this.musculos}
        Estadísticas: ${this.estadisticas}
        Ejercicios:\n`;

        for (const ejercicio of this.ejercicios) {
            salida += ejercicio.mostrarEjercicio();
        }

        return salida;
    }
}

class Sesion {
    constructor(rutina, fecha, duracion, calorias) {
        this.rutina = rutina;
        this.fecha = fecha;
        this.duracion = duracion;
        this.calorias = calorias;
    }

    mostrarSesion() {
        let salida = `
        Fecha: ${this.fecha}
        Duración: ${this.duracion} min
        Calorías: ${this.calorias} cal
        `;
        salida += this.rutina.mostrarRutina();

        return salida;
    }
}

const usuarios = [
    {
        username: "admin",
        password: "123",
    },
    {
        username: "Bob789",
        password: "messi",
    },
    {
        username: "maria01",
        password: "password",
    },
];

// variable global para perfil de usuario
const perfil1 = new Perfil(
    {
        nombre: "Bob",
        apellido: "Smith",
        sexo: "Hombre",
        edad: 21,
        email: "bob@gmail.com",
        altura: 181,
        peso: 73,
        ubicacion: "USA"
    },
    true
);

// ejercicios disponibles
const ejercicios = [
    new Ejercicio("Low Plank", ["Abdomen"], "Ninguno", 
    {
        fuerza: 1,
        equilibrio: 0,
        resistencia: 3,
    }),
    new Ejercicio("Mountain Climbers", ["Abdomen"], "Ninguno", 
    {
        fuerza: 0,
        equilibrio: 0,
        resistencia: 2,
    }),
    new Ejercicio("Jumping Jacks", ["Cuerpo Completo"], "Ninguno", 
    {
        fuerza: 0, 
        equilibrio: 1, 
        resistencia: 2
    })
];

// rutinas disponibles
const rutinas = [
    new Rutina("Reto abdomen", "Principiante", ejercicios, 4, ["Abdomen", "Piernas"]),
    new Rutina("Reto piernas extremo", "Avanzado", ejercicios, 4, ["Piernas"]),
    new Rutina("Brazos en 15min", "Principiante", ejercicios, 4, ["Brazos", "Pecho"]),
    new Rutina("Cardio intenso", "Intermedio", ejercicios, 4, ["Cuerpo completo"]),
    new Rutina("Cuerpo completo en 20min", "Principiante", ejercicios, 4, ["Cuerpo Completo"])
];

// menú del perfil
mostrarPerfil();

// usuario selecciona rutina a entrenar
let rutinaSeleccionada = seleccionarRutina();

// entrena rutina disponible
if(rutinaSeleccionada) {
    entrenar(rutinaSeleccionada);    
}

// crear una nueva rutina
crearRutina();

// entrena rutina creada
entrenar(perfil1.rutinas[0]);

// menú del perfil
mostrarHistorico();
mostrarRutinasPerfil();

/* FUNCIONES DE PÁGINA ENTRENAMIENTO */
function seleccionarRutina(){
    const nombre = prompt("Ingrese nombre de rutina: ");

    const rutina = rutinas.find((rutina) => rutina.nombre === nombre);
    
    // si rutina está definido (se encontró coincidencia)
    if(rutina) {
        return rutina;
    } else {
        alert("Error de selección");
    }
}

function mostrarRutinas() {
    let salida = "Rutinas disponibles:\n"

    for (const rutina of rutinas) {
        salida += `${rutina.mostrarRutina()}\n`
    }

    alert(salida);
}

function entrenar(rutina) {
    // usuario entrena...
    let duracion = 27;
    let calorias = 78;

    // agrega sesión
    perfil1.agregarSesion(new Sesion(rutina, new Date(), duracion, calorias));
}

/* FUNCIONES DE PÁGINA MI PERFIL */
function mostrarPerfil() {
    alert(`
    Datos de perfil:
    ${perfil1.mostrarPerfil()}`
    );
}

function mostrarHistorico() {
    console.log("Histórico sesiones:\n");
    console.table(perfil1.mostrarSesiones());
}

function mostrarRutinasPerfil() {
    console.log("Rutinas creadas:\n");
    console.table(perfil1.mostrarRutinas());
}

/* FUNCIONES DE PÁGINA EDICIÓN DE RUTINAS */
function mostrarEjercicios() {
    let salida = "Ejercicios disponibles:\n"

    for (const ejercicio of ejercicios) {
        salida += `${ejercicio.mostrarEjercicio()}\n`
    }

    alert(salida);
}

function crearRutina() {
    let misEjercicios = []

    const nombreRutina = prompt("Ingrese nombre de nueva rutina: ");
    const dificultadRutina = prompt("Ingrese dificultad de nueva rutina: ");
    const cantidadEjercicios = Number(prompt("¿Cuántos ejercicios deseas en la rutina?:"));

    mostrarEjercicios();

    // seleccionar ejercicios
    for (let i = 0; i < cantidadEjercicios; i++) {        
        const nombre = prompt("Ingrese nombre de ejercicio: ");

        const ejercicio = ejercicios.find((ejercicio) => ejercicio.nombre === nombre);
    
        // si ejercicio está definido (se encontró coincidencia)
        if(ejercicio) {
            misEjercicios.push(ejercicio);
        } else {
            alert("Error de selección");
        }
    }

    if(misEjercicios.length > 0) {
        const rondasRutina = prompt("¿Cuántas rondas?: ");

        const miRutina = new Rutina(nombreRutina, dificultadRutina, misEjercicios, rondasRutina, ["Cuerpo Completo"]);
    
        perfil1.agregarRutina(miRutina);
    } else {
        alert("No seleccionaste ejercicios");
    }
}
