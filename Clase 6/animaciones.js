
$(document).ready(() => {
    $("#boton").on("click", function(){
        $("#caja").animate({
            marginLeft: "+=200px"
        }, 500, function(){

        });

        //$(".caja").toggleClass("color");

        $(".caja").animate({
            marginLeft: "-=200px"
        });
    });
});