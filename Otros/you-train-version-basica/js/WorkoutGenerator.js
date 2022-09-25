import Ejercicio from "./Ejercicio.js";

export default class WorkoutGenerator {
    static LOCAL_STORAGE_DATA_KEY = "workout-generator-entries";

    constructor(root, ejercicios) {
        this.root = root;
        this.root.innerHTML = WorkoutGenerator.getHTML();

        this.entries = [];
        this.nonDuplicatesEntries = [];

        this.ejercicios = ejercicios;
        this.renderEjercicios();

        this.loadEntries();
        this.renderRutina();

        const cards = this.root.querySelectorAll(".card");
        cards.forEach((card) => {
            card.addEventListener("dblclick", () => {
                this.addEntry(card.dataset.ejercicioId);
            });
        });

        const btnRemoveAll = this.root.querySelector("#rutina__removeAll");
        btnRemoveAll.addEventListener("click", () => {
            this.deleteAllEntries();
        });
    }

    static getHTML() {
        return `
            <div class="container">
                <div class="row">
                    <section class="col-sm-7 row px-5">
                        <div id="ejercicios" class="row row-cols-1 row-cols-md-2 g-2"></div>
                    </section>

                    <aside class="col-sm-5 py-2">
                        <h3 class="fw-bold my-3">Rutina:</h3>

                        <ul id="rutina__entries" class="list-group list-group-light"></ul>

                        <button id="rutina__removeAll" type="button" class="btn btn-dark float-end my-3">Borrar</button>
                    </aside>
                </div>
            </div>
        `;
    }

    static listItemRutinaHTML() {
        return `
            <li class="list-group-item d-flex justify-content-between align-items-center">        
                <div class="d-flex align-items-center">
                    <div class="ms-3">
                        <p class="fw-bold mb-1 rutina-entry__nombre">Push-Ups</p>
                        <input disabled type="number" min="1" max="10" class="form-control border border-0 disabled rutina-entry__cantidad" />
                    </div>
                </div>

                <ul class="list-inline m-3">
                    <li class="list-inline-item">
                        <button class="btn btn-dark btn-sm rutina-entry__add" type="button" title="Add"><i class="fa fa-plus"></i></button>
                    </li>
                    <li class="list-inline-item">
                        <button class="btn btn-dark btn-sm rutina-entry__edit" type="button" title="Edit"><i class="fa fa-edit"></i></button>
                    </li>
                    <li class="list-inline-item">
                        <button class="btn btn-dark btn-sm rutina-entry__delete" type="button" title="Delete"><i class="fa fa-trash"></i></button>
                    </li>
                </ul>
            </li>
        `;
    }

    renderEjercicios() {
        const ejerciciosDOM = document.querySelector("#ejercicios");

        for (const ejercicio of this.ejercicios) {
            const card = ejercicio.getHTMLElement();

            ejerciciosDOM.appendChild(card);
        }
    }

    renderRutina() {
        const rutinaDOM = document.querySelector("#rutina__entries");

        const renderListItemRutina = (entry) => {
            const template = document.createElement("template");
            let listItemRutina = null;

            template.innerHTML = WorkoutGenerator.listItemRutinaHTML().trim();

            listItemRutina = template.content.firstElementChild;

            listItemRutina.querySelector(".rutina-entry__nombre").innerText = entry.nombre;
            listItemRutina.querySelector(".rutina-entry__cantidad").value = entry.cantidad;

            // eventos de los botones de una entry
            listItemRutina.querySelector(".rutina-entry__add").addEventListener("click", () => {
                this.addEntry(entry.id);
            });

            listItemRutina.querySelector(".rutina-entry__edit").addEventListener("click", () => {
                const inputCantidad = listItemRutina.querySelector(".rutina-entry__cantidad");

                inputCantidad.disabled = false;

                inputCantidad.addEventListener("blur", (e) => {
                    inputCantidad.disabled = true;
                    entry.cantidad = e.target.value;
                    this.saveEntries();
                });
            });

            listItemRutina.querySelector(".rutina-entry__delete").addEventListener("click", () => {
                this.deleteEntry(entry);
            });

            rutinaDOM.appendChild(listItemRutina);
        };

        // obtiene todos los nodos list-group-item de rutina__entries
        const listItemsRutina = rutinaDOM.querySelectorAll(".list-group-item");

        // borrar todos los nodos
        listItemsRutina.forEach((listItem) => {
            listItem.remove();
        });

        // renderiza todas las entries
        this.nonDuplicatesEntries.forEach((entry) => {
            renderListItemRutina(entry);
        });
    }

    loadEntries() {
        const entriesJSON = localStorage.getItem(WorkoutGenerator.LOCAL_STORAGE_DATA_KEY) || "[]";
        this.entries = JSON.parse(entriesJSON);
        this.updateNonDuplicatesEntries();
    }

    updateNonDuplicatesEntries() {
        this.nonDuplicatesEntries = [...new Set(this.entries)];

        this.nonDuplicatesEntries.forEach((noDuplicateEntry) => {
            // cuenta el numero de veces que se repite la entry
            noDuplicateEntry.cantidad = this.entries.reduce((total, entry) => {
                return noDuplicateEntry.id === entry.id ? (total += 1) : total;
            }, 0);
        });
    }

    saveEntries() {
        this.updateNonDuplicatesEntries();
        localStorage.setItem(WorkoutGenerator.LOCAL_STORAGE_DATA_KEY, JSON.stringify(this.nonDuplicatesEntries));
    }

    addEntry(id) {
        const newEntry = this.ejercicios.find((ejercicio) => id == ejercicio.id);

        if (newEntry) {
            this.entries.push(newEntry);
            this.saveEntries();
            this.renderRutina();
        }
    }

    deleteEntry(entryToDelete) {
        this.entries = this.entries.filter((entry) => entry !== entryToDelete);

        this.saveEntries();
        this.renderRutina();
    }

    deleteAllEntries() {
        this.entries = [];
        this.noDuplicatesEntries = [];
        this.saveEntries();
        this.renderRutina();
    }
}
