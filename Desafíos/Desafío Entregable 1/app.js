/*

- Desafío entregable 1 -
Nombre: Juan Esteban García Martínez

Enunciado: 
Definición de un algoritmo que emplee funciones para resolver
el procesamiento principal del simulador. Incorporar lo ejercitado
en las clases anteriores sobre algoritmo condicional y algoritmo con ciclo.
Utilizar funciones para realizar esas operaciones.

Descripción:
Mi simulador se trata de un aplicativo de rutinas de ejercicios inspirado
en aplicaciones como Adidas Training, entre otras. Para esta entrega me
concentré en desarrollar un menú de inicio, registro de usuario, inicio de
sesión y una primera propuesta del menú principal. 
A través de funciones se realizan algunas de las operaciones que comprenden 
la operación del simulador, además de que ayudan a que el código sea lo más 
modular posible.
Con comentarios describí algunas de los siguientes pasos que estaré
tomando para la siguiente entrega, teniendo en cuenta que ya se han visto
temas fundamentales como Objetos y Arrays, que permitirán desarrollar un 
código mucho más óptimo.

*/

// usuario default
let defaultNombre = "Bob";
let defaultNivel = "Avanzado";
let defaultDuracion = 45;

let nombreUsuario = defaultNombre;
let nivelUsuario = defaultNivel;
let duracionUsuario = defaultDuracion;

menuInicio();

function menuInicio() {
    let opcion = null;

    while (opcion != 3) {
        opcion = prompt(`Bienvenido a YouTrain - Calisthenics! \n\nElija una opción:
        [1] Iniciar sesión
        [2] Registrarse
        [3] Salir
        `);

        switch (opcion) {
            case "1":
                inicioSesion();
                break;
            case "2":
                registro();
                break;
            case "3":
                alert("Saliste, vuelve pronto!");
                break;
            default:
                alert("Opción no válida");
                break;
        }
    }
}

function inicioSesion() {
    let username = prompt("Ingrese su nombre de usuario:");
    let password = prompt("Ingrese su contraseña: ");

    if (autenticar(username, password) == "SUCCESS") {
        menuPrincipal();
    } else {
        alert("Autenticación no exitosa...");
    }
}

function autenticar(username, password) {
    // realiza autenticación...

    alert(`Usuario ${username} autenticado. Presione Aceptar para continuar...`);
    return "SUCCESS";
}

function registro() {
    let username = null;
    let password = null;
    let nivel = null;
    let duracion = null;

    while (true) {
        username = prompt("Ingrese un nombre de usuario de menos de 8 caracteres:"
        );

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

    while (true) {
        duracion = prompt("¿Cuántos minutos desea entrenar por rutina?");

        if (duracion > 15 && duracion < 50) {
            break;
        } else {
            alert("Ingrese duración válida (mayor a 15min y menor a 50min)");
        }
    }

    guardarRegistro(username, nivel, duracion);
}

function guardarRegistro(username, nivel, duracion) {
    // guarda el registro...

    alert(`Registro exitoso!
    Usuario: ${username}
    Nivel: ${nivel}
    Duración rutinas: ${duracion} min
    `);
}

function menuPrincipal() {
    let opcion = null;

    while (opcion != 5) {
        opcion = prompt(`Elije una opción:
        [1] Mostrar rutinas recomendadas
        [2] Crear rutina personalizada
        [3] Entrenar
        [4] Entrenamientos recientes
        [5] Cerrar sesión
        `);

        switch (opcion) {
            case "1":
                calcularRutinas();
                break;
            case "2":
                menuEntrenamiento();
                break;
            case "3":
                menuCreacionRutinas();
                break;
            case "4":
                mostrarEntrenamientosRecientes();
                break;
            case "5":
                alert("Cerraste sesión...");
                break;
            default:
                alert("Opción no válida!");
                break;
        }
    }
}

function calcularRutinas() {
    // para la siguiente versión -> arrays de objetos
    const nombreRutina1 = "Cuerpo entero en 15min";
    const duracionRutina1 = 15;
    const dificultadRutina1 = "Principiante";
    const musculosRutina1 = "Cuerpo completo";

    const nombreRutina2 = "Rutina Tren superior";
    const duracionRutina2 = 25;
    const dificultadRutina2 = "Intermedio";
    const musculosRutina2 = "Tren superior";

    const nombreRutina3 = "Desafío Six Pack";
    const duracionRutina3 = 40;
    const dificultadRutina3 = "Avanzado";
    const musculosRutina3 = "Abdomen";

    let nombreRutina = null;
    let duracionRutina = null;
    let dificultadRutina = null;
    let musculosRutina = null;

    if (duracionUsuario < 25 && nivelUsuario == "Principiante") {
        // acá habría un for que verificaría cada rutina del array de objetos y llenaria un array de rutinas recomendadas
        nombreRutina = nombreRutina1;
        duracionRutina = duracionRutina1;
        dificultadRutina = dificultadRutina1;
        musculosRutina = musculosRutina1;
    } else if (
        duracionUsuario >= 25 &&
        duracionUsuario < 40 &&
        nivelUsuario == "Intermedio"
    ) {
        // acá habría un for que verificaría cada rutina del array de objetos y llenaria un array de rutinas recomendadas
        nombreRutina = nombreRutina2;
        duracionRutina = duracionRutina2;
        dificultadRutina = dificultadRutina2;
        musculosRutina = musculosRutina2;
    } else if (duracionUsuario >= 40 && nivelUsuario == "Avanzado") {
        // acá habría un for que verificaría cada rutina del array de objetos y llenaria un array de rutinas recomendadas
        nombreRutina = nombreRutina3;
        duracionRutina = duracionRutina3;
        dificultadRutina = dificultadRutina3;
        musculosRutina = musculosRutina3;
    }

    // acá mostraría el listado de rutinas recomendadas
    alert(`Rutinas recomendadas:
    - Rutina #1 -
    Nombre: ${nombreRutina}
    Duración: ${duracionRutina}
    Dificultad: ${dificultadRutina}
    Grupo muscular: ${musculosRutina}
    `);
}

function menuEntrenamiento() {
    // selecciona rutina, comienza entrenamiento, termina entrenamiento, guarda registro de entrenamiento (objeto)
}

function menuCreacionRutinas() {
    // las rutinas son listas de ejercicios -> ejercicios son objetos
}

function mostrarEntrenamientosRecientes() {
    // muestra últimos registros de entrenamientos -> array de objetos
}
