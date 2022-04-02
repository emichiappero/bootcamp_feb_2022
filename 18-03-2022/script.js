var pre = document.getElementById("precio");
var cant = document.getElementById("cant");
var agregar = document.getElementById("agregar");
var agregar_array = document.getElementById("mostrar");

var div = document.getElementById("productos");
var h3 = document.getElementById("total");

var productos = "";
var subtotal = 0;
var total = 0;

agregar.addEventListener("click", function () {

    subtotal = parseInt(pre.value) * parseInt(cant.value);

    total = total + subtotal;

    productos = productos + "Precio= " + pre.value + " Cant= " + cant.value + " SUBTOTAL = " + subtotal + "<br>";

    div.innerHTML = productos;

    h3.innerHTML = total;
});

var precio_arr = [];
var cant_arr = [];
var precio_x_cant = [];
var subtotal_arr = 0;
var total_arr = 0;

agregar_array.addEventListener("click", function () {
    precio_arr.push(parseInt(pre.value));
    cant_arr.push(parseInt(cant.value));

    subtotal_arr = parseInt(pre.value) * parseInt(cant.value);
    total_arr = total_arr + subtotal_arr;

    precio_x_cant.push(subtotal_arr);

    div.innerHTML = precio_x_cant;

    h3.innerHTML = total_arr;


    console.log("precio_arr " + precio_arr);
    console.log("cant_arr " + cant_arr);
});