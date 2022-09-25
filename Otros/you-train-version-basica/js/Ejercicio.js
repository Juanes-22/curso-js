export default class Ejercicio {
    constructor(id, nombre, dificultad, categoria, material, parte, img = "...") {
        this.id = id;
        this.nombre = nombre;
        this.dificultad = dificultad;
        this.categoria = categoria;
        this.material = material;
        this.parte = parte;
        this.img = img;
    }

    getHTMLElement() {
        const card = document.createElement("div");
        card.classList.add("col");

        card.innerHTML = `
            <div class="card h-100 text-white bg-dark" data-ejercicio-id="${this.id}">
                <img src="${this.img}" class="card-img-top" alt="Ejercicio" />
                <div class="card-body">
                    <h5 class="card-title">${this.nombre}</h5>

                    <ul class="list-inline card-stats"></ul>
                </div>
            </div>
        `;
        const cardStatsList = card.querySelector(".card-stats");

        const template = document.createElement("template");
        let icon = null;

        template.innerHTML = `
            <li class="list-inline-item">
                <i class="fas fa-fire mx-1"></i>
            </li>
        `;

        icon = template.content.firstElementChild;

        for (let i = 0; i < this.dificultad; i++) {
            const iconClonado = icon.cloneNode(true);

            cardStatsList.appendChild(iconClonado);
        }

        return card;
    }
}
