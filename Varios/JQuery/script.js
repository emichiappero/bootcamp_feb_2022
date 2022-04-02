//Escribo todo mi codigo dentro de la función
$(document).ready(function () {

    //document.getElementById("boton")
    $('#boton');

    //document.getElementsByClassName("texto")
    var a = $('.texto').html(); //document.getElementsByClassName("texto").innerHTML
    var b = $('.texto').text(); //document.getElementsByClassName("texto").innerText

    console.log(a);
    console.log(b);


    //boton.addEventListener(function(){   });
    $('#boton').click(function () {
        //alert("hiciste click");
        $('.texto').css({
            'color': 'red',
            'margin-left': '100px'
        });

        $('.texto').html('<strong>Otro texto</strong>');

        var inp = $("#nombre").val();
        console.log(inp);

        $('#div').append('<h3 class="miClase">' + inp + '</h3>');

        $("#parrafo").fadeOut(1000);

        $(".texto").fadeIn(1200);
    });

});

//display: none;