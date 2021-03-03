$(document).ready(()=>{
    // Selecciona todas las cajas y accede a la primera
    /*$(".caja").first().css({
        background: "#000"
    });*/

    // Selecciona todas las cajas y accede a la útlima
    /*$(".caja").last().css({
        background: "#000"
    });*/

    // Selecciona todas las cajas y se accede por medio del index a la tercera caja
    /*$(".caja").eq(2).css({
        background: "#000"
    });*/

    // Seleccionamos todas las cajas y luego filtramos por id
    /*$(".caja").filter("#segunda").css({
        background: "#ffff00"
    });*/

    // Seleccionamos todas las cajas excepto la que tiene el id segunda
    $(".caja").not("#segunda").css({
        background: "#ffff00"
    });
});