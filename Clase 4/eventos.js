
$(document).ready(() => {
    const boton = $("#boton");

    /* boton.on("click", ()=>{
        alert("Evento activado");
    });*/

    /* const alerta = () => {
        alert("Evento activado");
    }

    boton.on("click", alerta);*/

    /*
    // Al deslizar el mouse sobre el boton cambiar color de fondo del documento
    boton.on("mouseenter", () => {
        document.body.style.background = "#000";
    });

    // Al retirar el mouse del boton el fondo cambia a color blanco
    boton.on("mouseleave", () => {
        document.body.style.background = "#fff";
    });
    */

    /*
    // Desactivar evento de un boton
    boton.on("click", () => {
        alert("Evento activado");
    });

    $("#desactivar").on("click", () => {
        boton.off("click");
    });
    */

    // Desactivar evento por defecto del mouse 
    $("a").on("click", (e) => {
        e.preventDefault();
        alert("Efecto de hipervinculo desactivado");
    });
});