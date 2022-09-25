class Jugador {
    constructor(nombre, club, pais, fechaNacimiento, posicion, dorsal, pie, valor, img = "...") {
        this.nombre = nombre;
        this.club = club;
        this.pais = pais;
        this.fechaNacimiento = fechaNacimiento;
        this.posicion = posicion;
        this.dorsal = Number(dorsal);
        this.pie = pie;
        this.valor = Number(valor);
        this.img = img;
        this.edad = this.#calcularEdad();
    }

    #calcularEdad() {
        const birthday = new Date(this.fechaNacimiento);
        const today = new Date();

        let years = today.getFullYear() - birthday.getFullYear();
        let month = today.getMonth() - birthday.getMonth();

        if (month < 0 || (month === 0 && today.getDate() < birthday.getDate())) {
            years--;
        }

        return years;
    }
}

const jugadores = [];

jugadores.push(new Jugador("Lionel Messi", "Paris Saint German", "ARG", new Date("1987-06-24"), "ED", 30, "LF", 69500000, "./img/messi.png"));
jugadores.push(new Jugador("Robert Lewandowski", "F.C. Barcelona", "POL", new Date("1988-09-21"), "ST", 9, "RF", 119500000, "./img/lewandowski.png"));
jugadores.push(new Jugador("Kevin De Bruyne", "Manchester City", "BEL", new Date("1991-06-28"), "CM", 9, "RF", 125500000, "./img/kevin.webp"));

const section = document.querySelector(".section-jugadores");
let template = section.querySelector("template");
let card = template.content.querySelector("div");

jugadores.forEach((jugador) => {
    let cardClonada = card.cloneNode(true);
    section.appendChild(cardClonada);

    console.log(cardClonada.childNodes);

    let cardTop = cardClonada.childNodes[1];
    let cardInfo = cardClonada.childNodes[3];

    cardTop.childNodes[1].src = jugador.img;
    cardTop.childNodes[3].innerText = jugador.nombre;

    cardInfo.childNodes[1].innerText = `Club: ${jugador.club}`;
    cardInfo.childNodes[3].innerText = `País: ${jugador.pais}`;
    cardInfo.childNodes[5].innerText = `Edad: ${jugador.edad}`;
    cardInfo.childNodes[7].innerText = `Pie: ${jugador.pie}`;
    cardInfo.childNodes[9].innerText = `Posición: ${jugador.posicion}`;
});
