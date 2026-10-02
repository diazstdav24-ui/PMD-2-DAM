$(document).ready(function() {
   
    $("#lista-alumnos").prepend("<li>Carlos</li>")
    $("#lista-alumnos").append("<li>María</li>")

    //El click solo se puede usar sobre elementos que ya existen en el DOM, 
    // por lo que si queremos usarlo sobre elementos que se han creado dinámicamente, 
    // debemos usar la función on() de jQuery.
    $("li").on("click",function() {

        $(this).remove();

    })


});