const tareas = document.querySelector("#tareas");
const tareasCompletadas = document.querySelector("#tareas-completadas");

const listaTareas = Sortable.create(tareas, {
    group: {
        name: "lista-tareas",
        pull: true,
        put: false,
    },
    animation: 200,
    easing: "cubic-bezier(0.895, 0.03, 0.685, 0.22)",
    handle: ".fas",
    filter: ".titulo-tarea",
    chosenClass: "active",
	store: {
		// guarda el orden de la lista
		set: (sortable) => {
			const orden = sortable.toArray();
			console.log(orden);

			const {
				options: { group },
			} = sortable;

			localStorage.setItem(group.name, JSON.stringify(orden));
		},

		// obtiene el orden de la lista
		get: (sortable) => {
			const {
				options: { group },
			} = sortable;

			const orden = JSON.parse(localStorage.getItem(group.name)) || [];

			return orden;
		},
	}
});

const listaTareasCompletadas = Sortable.create(tareasCompletadas, {
    group: {
        name: "lista-tareas",
        pull: false,
        put: true,
    },
    animation: 200,
    easing: "cubic-bezier(0.895, 0.03, 0.685, 0.22)",
    handle: ".fas",
    filter: ".titulo-tarea",
    chosenClass: "active",
});

const btnToggle = document.querySelector("#toggle");
btnToggle.addEventListener("click", () => {
    const estado = listaTareas.option("disabled");
	console.log(listaTareas)
    listaTareas.option("disabled", !estado);

    btnToggle.textContent = estado ? "Bloquear" : "Desbloquear";
});
