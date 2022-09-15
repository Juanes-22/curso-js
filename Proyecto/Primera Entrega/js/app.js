/*

- Primera entrega del proyecto final -
Nombre: Juan Esteban García Martínez

Enunciado:
>>Objetivos Generales:
    - Codificar la funcionalidad inicial del simulador. 
    - Identificar el flujo de trabajo del script en términos de captura de entradas ingresadas por el usuario, procesamiento esencial del simulador y notificación de resultados en forma de salida.

>>Objetivos Específicos:
    - Capturar entradas mediante prompt().
    - Declarar variables y objetos necesarios para simular el proceso seleccionado.
    - Crear funciones y/o métodos para realizar operaciones (suma, resta, concatenación, división, porcentaje, etc).
    - Efectuar una salida, que es el resultado de los datos procesados, la cual puede hacerse por alert() o console.log().

>>Para tener en cuenta:
    -La estructura hace referencia a el html y css, correspondientes al armado de la página general, pero que el JS que se evalúa, aún no está interactuando con ella.

>>Se debe entregar:
    -Estructura HTML del proyecto. 
    -Variables de JS necesarias. 
    -Funciones esenciales del proceso a simular.
    -Objetos de JS.
    -Arrays.
    -Métodos de búsqueda y filtrado sobre el Array.

Descripción:


*/

class Usuario {
    constructor(username, password) {
        this.username = username;
        this.password = password;
        this.loginStatus = false;
        this.registerDate = new Date();
        this.isPremium = false;
    }

    login() {
        this.loginStatus = true;
    }

    logout() {
        this.loginStatus = false;
    }
}

class Perfil extends Usuario {
    constructor() {
        super();
        this.datosUsuario = {
            nombre: null,
            apellido: null,
            sexo: null,
            edad: null,
            email: null,
            altura: null,
            peso: null,
            ubicacion: null,
        };
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
        Nivel: ${this.datosUsuario.nivel}
        `;
    }

    actualizarDatos() {}

    mostrarSesiones() {
        let salida = `Histórico sesiones:\n`;

        for (const sesion of this.sesiones) {
            salida += sesion.mostrarSesion();
        }

        return salida;
    }

    mostrarRutinas() {
        let salida = `Rutinas del usuario:\n`;

        for (const rutina of this.rutinas) {
            salida += rutina.mostrarRutina();
        }

        return salida;
    }

    agregarSesion(sesion) {
        this.sesiones.push(sesion);
    }

    agregarRutina(rutina) {
        this.rutinas.push(rutina);
    }
}

class Ejercicio {
    constructor(nombre, musculos, dificultad, material, categoria) {
        this.nombre = nombre;
        this.musculos = musculos;
        this.dificultad = dificultad;
        this.material = material;
        this.categoria = categoria;
    }

    mostrarEjercicio() {
        let salida = `
        Ejercicio: ${this.nombre}
        Partes del cuerpo: ${this.musculos}
        Enfoque principal: ${this.categoria}
        `;

        return salida;
    }
}

class Rutina {
    constructor(nombre, dificultad, ejercicios, rondas) {
        this.nombre = nombre;
        this.dificultad = dificultad;
        this.ejercicios = ejercicios;
        this.rondas = Number(rondas);
        this.duracion = this.calcularDuracion();
        this.musculos = [];
        this.estadisticas = { fuerza: null, resistencia: null, equlibrio: null };
    }

    mostrarRutina() {
        let salida = `
        Rutina: ${this.nombre}
        Dificultad: ${this.dificultad}
        Rondas: ${this.rondas}
        Partes del cuerpo: ${this.musculos}
        Duración: ${this.duracion} min
        Estadísticas: ${JSON.stringify(this.estadisticas)}
        `;

        return salida;
    }

    mostrarEjercicios() {
        let salida = `
        Ejercicios:\n`;

        for (const ejercicio of this.ejercicios) {
            salida += ejercicio.mostrarEjercicio();
        }

        return salida;
    }

    agregarEjercicio(ejercicio) {
        this.ejercicios.push(ejercicio);
    }

    calcularDuracion() {
        // cantidadEjercicios * rondas
        return this.ejercicios.length * this.rondas;
    }
}

class Sesion {
    constructor(rutina, duracion, calorias) {
        this.rutina = rutina;
        this.fecha = new Date();
        this.duracion = duracion;
        this.calorias = calorias;
    }

    mostrarSesion() {
        let salida = `
        Fecha: ${this.fecha}
        Rutina: ${this.rutina.nombre}
        Duración: ${this.duracion} min
        Calorías: ${this.calorias} cal
        `;

        return salida;
    }
}

// ejercicios disponibles
const ejerciciosDisponibles = [
    new Ejercicio("Low Plank", ["Abdomen"], "Principiante", "Ninguno", "Fuerza"),
    new Ejercicio("Mountain Climbers", ["Abdomen"], "Principiante", "Ninguno", "Cardio"),
    new Ejercicio("Jumping Jacks", ["Cuerpo Completo"], "Principiante", "Ninguno", "Cardio"),

    new Ejercicio("Banded Biceps Curl", ["Brazos"], "Principiante", "Banda de resistencia", "Fuerza"),
    new Ejercicio("Knee Diamond Push-Ups", ["Tren superior"], "Intermedio", "Ninguno", "Fuerza"),
    new Ejercicio("Up Downs", ["Brazos"], "Intermedio", "Ninguno", "Fuerza"),

    new Ejercicio("Backward Lunges", ["Piernas"], "Principiante", "Ninguno", "Fuerza"),
    new Ejercicio("Bicycle Crunches", ["Abdomen"], "Intermedio", "Ninguno", "Fuerza"),
    new Ejercicio("Bridge", ["Abdomen"], "Principiante", "Ninguno", "Fuerza"),

    new Ejercicio("Clap Jacks", ["Cuerpo Completo"], "Principiante", "Ninguno", "Cardio"),
    new Ejercicio("Quick Feet", ["Cuerpo Completo"], "Principiante", "Ninguno", "Cardio"),
    new Ejercicio("Star Jacks", ["Cuerpo Completo"], "Intermedio", "Ninguno", "Cardio"),
];

const ejercicios1 = [];

ejercicios1.push(buscarEjercicioByNombre("Low Plank"));
ejercicios1.push(buscarEjercicioByNombre("Mountain Climbers"));
ejercicios1.push(buscarEjercicioByNombre("Bicycle Crunches"));

const ejercicios2 = [];

ejercicios2.push(buscarEjercicioByNombre("Jumping Jacks"));
ejercicios2.push(buscarEjercicioByNombre("Banded Biceps Curl"));
ejercicios2.push(buscarEjercicioByNombre("Knee Diamond Push-Ups"));
ejercicios2.push(buscarEjercicioByNombre("Up Downs"));

const ejercicios3 = [];

ejercicios3.push(buscarEjercicioByNombre("Clap Jacks"));
ejercicios3.push(buscarEjercicioByNombre("Quick Feet"));
ejercicios3.push(buscarEjercicioByNombre("Star Jacks"));

// rutinas disponibles
const rutinasDisponibles = [
    new Rutina("Reto abdomen", "Principiante", ejercicios1, 3),
    new Rutina("Brazos en 20min", "Intermedio", ejercicios2, 5),
    new Rutina("Cardio en 15min", "Principiante", ejercicios3, 5),
];

// usuarios registrados
const usuariosRegistrados = [];

// lo que pasa cuando un usuario se registra...
const usuario1 = new Perfil();

usuario1.username = "bob123";
usuario1.password = "password";
usuario1.loginStatus = false;

usuario1.isPremium = true;

usuariosRegistrados.push(usuario1);

// usuario crea perfil
usuario1.datosUsuario = {
    nombre: "Bob",
    apellido: "Smith",
    sexo: "Hombre",
    edad: 21,
    email: "bob@gmail.com",
    altura: 181,
    peso: 73,
    ubicacion: "USA",
    nivel: "Intermedio",
};

usuario1.nivel = "Intermedio";

// usuario de la sesión
let usuarioLogin = null;

/* COMIENZA EL PROGRAMA */
menuInicio();

/* FUNCIONES MENU INICIO Y PRINCIPAL */
function menuInicio() {
    let opcion = null;

    while (opcion != 3) {
        opcion = Number(
            prompt(`Bienvenido a YouTrain - Calisthenics! \n\nElije una opción:
        [1] Iniciar sesión
        [2] Registrarse
        [3] Salir
        `)
        );

        switch (opcion) {
            case 1:
                inicioSesion();
                break;
            case 2:
                registro();
                break;
            case 3:
                alert("Saliste, vuelve pronto!");
                break;
            default:
                alert("Opción no válida");
                break;
        }
    }
}

function menuPrincipal() {
    let opcion = null;

    while (opcion != 6) {
        opcion = Number(
            prompt(`Menú Principal\n\nElije una opción:
        [1] Mi perfil
        [2] Mostrar rutinas recomendadas
        [3] Creación de rutinas
        [4] Entrenar
        [5] Entrenamientos recientes
        [6] Cerrar sesión
        `)
        );

        switch (opcion) {
            case 1:
                menuPerfil();
                break;
            case 2:
                //calcularRutinas();
                break;
            case 3:
                menuCreacionRutinas();
                break;
            case 4:
                menuEntrenamiento();
                break;
            case 5:
                mostrarHistoricoPerfil();
                break;
            case 6:
                usuarioLogin.logout();
                alert("Cerraste sesión...");
                break;
            default:
                alert("Opción no válida!");
                break;
        }
    }
}

/* FUNCIONES PARA LOGEO Y REGISTRO USUARIO */
function inicioSesion() {
    const username = prompt("Ingrese su nombre de usuario:");
    const password = prompt("Ingrese su contraseña: ");

    if (autenticar(username, password)) {
        usuarioLogin.login();

        while (usuarioLogin.loginStatus == true) {
            menuPrincipal();
        }
    } else {
        alert("Autenticación no exitosa...");
    }
}

function autenticar(username, password) {
    // realiza autenticación...

    const usuarioBusqueda = usuariosRegistrados.find((user) => {
        return user.username === username && user.password === password;
    });

    if (usuarioBusqueda) {
        usuarioLogin = usuarioBusqueda;
        alert(`Usuario ${username} autenticado. Presione Aceptar para continuar...`);
        return 1;
    } else {
        return 0;
    }
}

function registro() {
    let username = null;
    let password = null;

    while (true) {
        username = prompt("Ingrese un nombre de usuario de menos de 8 caracteres:");

        if (username != null && username.length <= 8) {
            break;
        } else {
            alert("Ingrese un nombre de usuario válido");
        }
    }

    while (true) {
        password = prompt("Ingrese una contraseña de más de 6 caracteres: ");

        if (password != null && password.length >= 6) {
            break;
        } else {
            alert("Ingrese una contraseña válida");
        }
    }

    const usuario = new Perfil();

    usuario.username = username;
    usuario.password = password;

    alert("Usuario creado exitosamente, unos datos más y estamos listos...");

    usuario.datosUsuario.email = prompt("Ingresa un email:");
    usuario.datosUsuario.nombre = prompt("¿Cuál es tu nombre?");
    usuario.datosUsuario.sexo = prompt("¿Cuál es tu sexo?");
    usuario.datosUsuario.ubicacion = prompt("¿En qué país vives?");

    let nivel = null;
    while (true) {
        let opcion = prompt(`¿Cuál es tu nivel de experiencia? 
        [1] Principiante
        [2] Intermedio
        [3] Avanzado`);

        switch (opcion) {
            case "1":
                nivel = "Principiante";
                break;
            case "2":
                nivel = "Intermedio";
                break;
            case "3":
                nivel = "Avanzado";
                break;
            default:
                alert("Ingrese nivel válido");
                break;
        }

        if (nivel == "Principiante" || nivel == "Intermedio" || nivel == "Avanzado") {
            break;
        }
    }
    usuario.datosUsuario.nivel = nivel;

    alert(`Registro exitoso:
    Usuario: ${usuario.username}
    Nombre: ${usuario.datosUsuario.nombre}
    Email: ${usuario.datosUsuario.email}
    Sexo: ${usuario.datosUsuario.sexo}
    Ubicación: ${usuario.datosUsuario.ubicacion}
    Nivel: ${usuario.datosUsuario.nivel}
    `);

    usuariosRegistrados.push(usuario);
}

/* FUNCIONES DE PÁGINA ENTRENAMIENTO */
function menuEntrenamiento() {
    // selecciona rutina, comienza entrenamiento, termina entrenamiento, guarda registro de entrenamiento (objeto)
    let opcion = null;
    let rutinaSeleccionada;

    while (opcion != 3) {
        opcion = Number(
            prompt(`Menú Entrenamiento\n\nElije una opción:
        [1] Ver rutinas disponibles
        [2] Seleccionar rutina y comenzar entrenamiento
        [3] Salir
        `)
        );

        switch (opcion) {
            case 1:
                mostrarRutinasDisponibles();
                break;
            case 2:
                rutinaSeleccionada = seleccionarRutina();
                if (rutinaSeleccionada) {
                    alert("Comienza entrenamiento!");
                    entrenar(rutinaSeleccionada);
                }
                break;
            case 3:
                alert("Saliste...");
                menuPrincipal();
                break;
            default:
                alert("Opción no válida!");
                break;
        }
    }
}

function seleccionarRutina() {
    // usuario selecciona rutina a entrenar
    const nombre = prompt("Ingrese nombre de rutina: ");

    const rutina = rutinasDisponibles.find((rutina) => rutina.nombre === nombre);

    // si rutina está definido (se encontró coincidencia)
    if (rutina) {
        alert(`
        Rutina seleccionada:
        ${rutina.mostrarRutina()}`);
        return rutina;
    }

    // si no, buscar en las rutinas creadas por el usuario
    const rutinaUsuario = usuarioLogin.rutinas.find((rutina) => rutina.nombre === nombre);
    if (rutinaUsuario) {
        alert(`Rutina seleccionada:\n
        ${rutinaUsuario.mostrarRutina()}`);
        return rutinaUsuario;
    }

    // si no encontró rutina en rutinasDisponibles ni en las rutinas del usuario...
    alert("Error de selección");
}

function mostrarRutinasDisponibles() {
    let salida = "Rutinas disponibles:\n";

    for (const rutina of usuarioLogin.rutinas) {
        salida += `${rutina.mostrarRutina()}`;
    }

    for (const rutina of rutinasDisponibles) {
        salida += `${rutina.mostrarRutina()}`;
    }

    alert(salida);
}

function entrenar(rutina) {
    alert("Entrenando...");

    // usuario entrena...
    const duracion = getRandomArbitrary(rutina.duracion - 2, rutina.duracion + 5);
    const calorias = getRandomArbitrary(50, 80);

    alert("Entrenamiento finalizado");

    const sesion = new Sesion(rutina, duracion, calorias);

    alert(`Resumen del entrenamiento:
    ${sesion.mostrarSesion()}
    `);

    // agrega sesión
    usuarioLogin.agregarSesion(sesion);
}

/* FUNCIONES DE PÁGINA MI PERFIL */
function menuPerfil() {
    let opcion = null;

    while (opcion != 3) {
        opcion = Number(
            prompt(`Menú Mi Perfil:\n\nElije una opción:
        [1] Ver mi perfil
        [2] Editar mi perfil
        [3] Salir
        `)
        );

        switch (opcion) {
            case 1:
                mostrarPerfil();
                break;
            case 2:
                menuEdicionPerfil();
                break;
            case 3:
                alert("Saliste...");
                menuPrincipal();
                break;
            default:
                alert("Opción no válida!");
                break;
        }
    }
}

function menuEdicionPerfil() {
    let opcion = null;

    while (opcion != 10) {
        opcion = Number(
            prompt(`Menú Edición Perfil:\n${usuarioLogin.mostrarPerfil()}\nElije dato a editar:
        [1] Nombre
        [2] Apellido
        [3] Sexo
        [4] Edad
        [5] Email
        [6] Altura
        [7] Peso
        [8] Ubicación
        [9] Nivel
        [10] Salir      
        `)
        );

        switch (opcion) {
            case 1:
                usuarioLogin.datosUsuario.nombre = prompt("Ingresa nombre:");
                break;
            case 2:
                usuarioLogin.datosUsuario.apellido = prompt("Ingresa apellido:");
                break;
            case 3:
                usuarioLogin.datosUsuario.sexo = prompt("Ingresa sexo:");
                break;
            case 4:
                usuarioLogin.datosUsuario.edad = prompt("Ingresa edad:");
                break;
            case 5:
                usuarioLogin.datosUsuario.email = prompt("Ingresa email:");
                break;
            case 6:
                usuarioLogin.datosUsuario.altura = prompt("Ingresa altura (cm):");
                break;
            case 7:
                usuarioLogin.datosUsuario.peso = prompt("Ingresa peso (kg):");
                break;
            case 8:
                usuarioLogin.datosUsuario.ubicacion = prompt("Ingresa tu país:");
                break;
            case 9:
                usuarioLogin.datosUsuario.nivel = prompt("Ingresa tu nivel (Principiante, Intermedio, Avanzado):");
                break;
            case 10:
                alert("Saliste...");
                menuPerfil();
                break;
            default:
                alert("Opción no válida!");
                break;
        }
    }
}

function mostrarPerfil() {
    alert(`
    Datos de perfil:
    ${usuarioLogin.mostrarPerfil()}`);
}

function mostrarHistoricoPerfil() {
    alert(usuarioLogin.mostrarSesiones());

    console.log("Histórico sesiones:\n");
    console.table(usuarioLogin.mostrarSesiones());
}

function mostrarRutinasPerfil() {
    alert(usuarioLogin.mostrarRutinas());

    console.log("Rutinas creadas:\n");
    console.table(usuarioLogin.mostrarRutinas());
}

/* FUNCIONES DE PÁGINA EDICIÓN DE RUTINAS */
function menuCreacionRutinas() {
    // las rutinas son listas de ejercicios -> ejercicios son objetos

    let opcion = null;

    while (opcion != 4) {
        opcion = Number(
            prompt(`Menú creación de rutinas\n\nElije una opción:
        [1] Ver ejercicios disponibles
        [2] Crear nueva rutina
        [3] Ver mis rutinas
        [4] Salir
        `)
        );

        switch (opcion) {
            case 1:
                mostrarEjerciciosDisponibles();
                break;
            case 2:
                crearRutina();
                break;
            case 3:
                mostrarRutinasPerfil();
                break;
            case 4:
                alert("Saliste...");
                menuPrincipal();
                break;
            default:
                alert("Opción no válida!");
                break;
        }
    }
}

function mostrarEjerciciosDisponibles() {
    let salida = "Ejercicios disponibles:\n";

    for (const ejercicio of ejerciciosDisponibles) {
        salida += `${ejercicio.mostrarEjercicio()}\n`;
    }

    alert(salida);
}

function menuBuscarEjercicio() {
    // buscar ejercicio por nombre
    // buscar ejercicio por dificultad
    // buscar ejercicio por musculo
}

function buscarEjercicioByNombre(nombre) {
    const ejercicio = ejerciciosDisponibles.find((ejercicio) => {
        return ejercicio.nombre === nombre;
    });

    return ejercicio;
}

function crearRutina() {
    let misEjercicios = [];

    const nombreRutina = prompt("Ingrese nombre de nueva rutina: ");
    const dificultadRutina = prompt("Ingrese dificultad de nueva rutina: ");
    const cantidadEjercicios = Number(prompt("¿Cuántos ejercicios deseas en la rutina?:"));

    mostrarEjerciciosDisponibles();

    // seleccionar ejercicios
    for (let i = 0; i < cantidadEjercicios; i++) {
        const nombre = prompt("Ingrese nombre de ejercicio: ");

        const ejercicio = buscarEjercicioByNombre(nombre);

        // si ejercicio está definido (se encontró coincidencia)
        if (ejercicio) {
            misEjercicios.push(ejercicio);
        } else {
            alert("Error de selección");
        }
    }

    if (misEjercicios.length > 0) {
        const rondasRutina = prompt("¿Cuántas rondas?: ");

        const miRutina = new Rutina(nombreRutina, dificultadRutina, misEjercicios, rondasRutina);

        alert(`Rutina creada:\n
        ${miRutina.mostrarRutina()}`);

        usuarioLogin.agregarRutina(miRutina);
    } else {
        alert("No seleccionaste ejercicios");
    }
}

/* OTRAS FUNCIONES */
function getRandomArbitrary(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}
