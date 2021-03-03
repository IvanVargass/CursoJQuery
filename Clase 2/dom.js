
$(document).ready(()=>{
    // Acceder al emeneto padre (parent)
    /* $("#tercera").parent().css({
        background: '#000'
    }); */

    // Acceder a los elementos padres (Parents)
    // $("#tercera").parents();

    // Acceder a los elementos hijos
    //$("#padre").children().fadeOut(2000);

    // Acceder a un elemento hijo en específico
    //$("#contenedor").find("div.caja").fadeOut(500);

    // Acceder a los contenedores hermanos
    //$("#tercera").siblings().fadeOut(300);

    // Acceder a los elementos siguientes o anteriores (next o prevent)
    /*$("#tercera").next().css({
        background: "#000"
    }); */

    /*$("#tercera").nextAll().css({
        background: "#000"
    }); */

    /*$("#tercera").prev().css({
        background: "#000"
    });*/

    $("#tercera").prevAll().css({
        background: "#000"
    });

});