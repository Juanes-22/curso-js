const buscador = document.querySelector("#buscador");

buscador.addEventListener("keyup", (e) => {
    console.log(e.key)
    if (e.key == "Escape") {
        e.target.value = "";
    }

    document.querySelectorAll(".articulo").forEach((articulo) => {
        articulo.textContent.toLowerCase().includes(e.target.value.toLowerCase()) ? articulo.classList.remove("filtro") : articulo.classList.add("filtro");
    });
});
