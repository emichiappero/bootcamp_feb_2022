// //Acceder a un elemento mediante su ID
// var edad = document.getElementById("input_edad");

// //alert(edad.name);

// var my_div = document.getElementById("cualquier_cosa");


// var parr = document.getElementById("parrafo");

// parr.style.color = "blue";
// parr.innerText = "Ahora dice otra cosa";


function suma() {
    var suma = 1 + 3;
    alert("la suma es " + suma);
}

//PARA CAPUTAR UN EVENTO

//Seleccionamos el elemento
var p = document.getElementById("parrafo");

//Escuchar el evento que necesitamos (click)
p.addEventListener("click", function () {
    alert("hiciste click en el elemento");
    suma();
});


//EJemplo 2

var btn = document.getElementById("boton");
var input = document.getElementById("nombre");

btn.addEventListener("click", function () {

    var valor_input = input.value;
    alert(valor_input);

    input.value = "";

});

//Ejercicio
//Crear 2 inputs, y un botón. Al hacer click en el botón, sumar los valores de los inputs
//mostrar en un alert

function sumar_numeros(a, b) {
    var resultado = parseInt(a) + parseInt(b);
    return resultado;
}

var n1 = document.getElementById("num1");
var n2 = document.getElementById("num2");
var btn_suma = document.getElementById("suma");

btn_suma.addEventListener("click", function () {
    var sum = sumar_numeros(n1.value, n2.value);
    alert(sum);
});

var h4 = document.getElementById("id_h4");
h4.innerText = "hola que tal?????"

/*
Proyecto Nº 2

a)  Hacer una calculadora con HTML + CSS + JS. 
    Utilizar funciones (para las operaciones), addEventListener, etc.
    Mostrar el resultado de la operación en un h4.


b)  Según el texto ingresado por el usuario (en un input), y la opción correspondiente, mostrar:
    - dicho texto en MAYUSCULAS
    - dicho texto en MINÚSCULAS
    - cantidad de caracteres

    Mostrar en un H4
*/


var input_seleccionado = "num1";

//Entrada de datos
var num1 = document.getElementById("num1");
var num2 = document.getElementById("num2");
var enter = document.getElementById("enter");

//Numeros de calculadora
var uno = document.getElementById("btn1");
var dos = document.getElementById("btn2");
var tres = document.getElementById("btn3");

var boton_numero = document.getElementsByClassName("boton_num");

enter.addEventListener("click", function () {
    if (input_seleccionado == "num1") {
        input_seleccionado = "num2";
        enter.innerText = "<--";
    } else {
        input_seleccionado = "num1";
        enter.innerText = "-->";
    }
});

//Funcion escribir
function escribir(numero) {
    if (input_seleccionado == "num1") {
        num1.value += numero;
    } else {
        num2.value += numero;
    }
}

// uno.addEventListener("click", function(){
//     escribir(1);
// });

// dos.addEventListener("click", function(){
//     escribir(2);
// });

// tres.addEventListener("click", function(){
//     escribir(3);
// });

for (var i = 0; i < boton_numero.length; i++) {
    boton_numero[i].addEventListener("click", function () {
        miFuncion(i);
    });
}

function miFuncion(i) {
    console.log(i);
    console.log(boton_numero[i].value);
}