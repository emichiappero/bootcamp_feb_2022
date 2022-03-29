//Ejemplo en JS
// var dato_input = document.getElementById("dato");

// var boton = document.getElementById("boton");

// var res = document.getElementsByClassName("resultado");

// boton.addEventListener('click', function () {
//     res[0].innerHTML = dato_input.value;
// });





//Ejemplo con JQuery
$(document).ready(function () {
    $('#boton').click(function () {
        //console.log($(this));
        //$('.resultado').html($('#dato').val());

        $('#lista').append('<li class="eliminar">' + $('#dato').val() + ' </li>');
        //$(this).remove();

        $('.eliminar').dblclick(function () {
            $(this).css({
                'text-decoration': 'line-through',
                'color': 'red'
            }).fadeOut(1200);

        });

    });

    //LocalStorage en JQuery
    localStorage.email = "emiliano@gmail.com"; //guardar un dato en el "key" email
    console.log(localStorage.email); //mustro el "valor" de la key guardada (email)


    //LocalStorage en JS puro
    localStorage.setItem("edad", 33); //Guardo "edad"
    console.log(localStorage.getItem("edad")); //Recupero "edad"
    //localStorage.removeItem("edad"); //Elimino "edad"

    localStorage.clear(); //borra TODAS las key guardadas


    //agregar una clase
    $('#cambiar').click(function () {
        $('.titulo').toggleClass("clase1 clase2 loquequiera");

        $('#dato').toggleClass("is-valid")

        //$('.titulo').removeClass("loquequiera");
    });


});