import WorkoutGenerator from "./WorkoutGenerator.js";
import Ejercicio from "./Ejercicio.js";

const ejercicios = [];

ejercicios.push(
    new Ejercicio(1, "Pike Push-Ups", 3, "Fuerza", "Ninguno", "Brazos", "./img/ejercicios/pikepushups.gif"),
    new Ejercicio(2, "Bicycle Crunches", 2, "Cardio", "Ninguno", "Abdomen", "./img/ejercicios/bicyclecrunches.gif"),
    new Ejercicio(3, "Jumping Jacks", 1, "Cardio", "Ninguno", "Cuerpo Completo", "./img/ejercicios/jumpingjacks.gif"),
    new Ejercicio(4, "Push-Ups", 2, "Fuerza", "Ninguno", "Brazos", "./img/ejercicios/pushups.gif")
);

const root = document.getElementById("app");

const wg = new WorkoutGenerator(root, ejercicios);

// Usuario ve lista de ejercicios disponibles
// Usuario agrega/edita/elimina ejercicio a rutina
