$(document).ready(function(){

   $("#add").on("click",function() {

        $("tbody").append('<tr><th scope="row">2</th><td>Jacob</td><td>Thornton</td><td>@fat</td></tr>');
    })

       $("#remove").on("click",function() {

        $("tbody").remove('<tr><th scope="row">2</th><td>Jacob</td><td>Thornton</td><td>@fat</td></tr>');
    })


})
