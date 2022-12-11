class Persona {
    constructor(id, nombre, edad, correo, img) {
        this.id = id;
        this.nombre = nombre;
        this.edad = edad;
        this.correo = correo;
        this.img = img;
    }
}

const personas = [];

personas.push(
    new Persona(1, "Carlos Arturo", 24, "carlos@gmail.com", "./img/1.png"),
    new Persona(2, "Alejandro", 25, "alejandro@gmail.com", "./img/2.png"),
    new Persona(3, "Stephanie", 20, "stephanie@gmail.com", "./img/3.png"),
    new Persona(4, "Mike", 55, "mike@gmail.com", "./img/4.png")
);

const showPersonas = (personas) => {
    const listaPersonas = document.querySelector("#lista-personas");

    for (const persona of personas) {
        const template = document.createElement("template");

        let card = null;

        template.innerHTML = `
            <div class="card-persona" data-id="persona-${persona.id}">
                <div class="card-persona__foto">
                    <img src="${persona.img}" alt="" />
                </div>

                <div class="card-persona__nombre">
                    <div>
                        <p class="card-persona__label">Nombre</p>
                        <p class="card-persona__dato">${persona.nombre}</p>
                    </div>
                </div>

                <div class="card-persona__edad">
                    <p class="card-persona__label">Edad</p>
                    <p class="card-persona__dato">${persona.edad}</p>
                </div>

                <div class="card-persona__correo">
                    <div class="card-persona__label">Correo</div>
                    <p class="card-persona__dato">${persona.correo}</p>
                </div>
            </div>
        `;

        card = template.content.firstElementChild;

        listaPersonas.appendChild(card);
    }
};

const orderPersonas = (personas) => {
    const listaPersonas = document.querySelector("#lista-personas");

    Sortable.create(listaPersonas, {
        animation: 150,
        chosenClass: "seleccionado",
        dragClass: "drag",
        onEnd: () => {
            //console.log("Se insertó un elemento");
        },
        group: "lista-personas",
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
                //console.log(orden);

                return orden;
            },
        },
    });
};

showPersonas(personas);
orderPersonas(personas);


/*

Drag and Drop (arrastra y suelta) en Javascript | SortableJS
https://www.youtube.com/watch?v=-N515SDoYuU

*/
