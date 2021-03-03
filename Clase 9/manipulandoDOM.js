
$(document).ready( ()=> {

    // Modificar el texto
    //$("#titulo").text("Titulo modificado");

    // Modificar html
    $("#titulo").html("<u>Titulo modificado</u>");

    const nombre = $("#nombre");

    nombre.on("change", () => {
        $("#titulo").text(nombre.val());
    });

    $("#enlace").text("Google");
    $("#enlace").attr("href", "https://www.google.com/?hl=es");

    $("#enlace").attr({
       class: "Azul",
       target: "_blank" 
    });


});