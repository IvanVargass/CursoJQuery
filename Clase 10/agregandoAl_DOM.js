
$(document).ready( () => {
    const contenedor = $("#contenedor");
    let contador = 1;

    $("#agregar").on("click", () => {
        const caja = $("<di></di>").attr("class", "caja").text(contador);
        contador++;

        //contenedor.append(caja);
        //contenedor.prepend(caja);
        //contenedor.before(caja);
        contenedor.after(caja);
    });
});