$(document).ready(() => {

    $("#ejecutar").on("click", () => {
        $(".caja").slideUp(3000, () => {
            $(".caja").slideDown(3000);
        });
    });
});