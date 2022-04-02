var nom = document.getElementById("nombre");
var guardar = document.getElementById("guardar");
var recuperar = document.getElementById("recuperar");
var h3 = document.getElementById("h3");

var datos = "";

guardar.addEventListener("click", function () {
    datos = datos + "<br>" + nom.value;
    localStorage.setItem("datos", datos);
    nom.value = "";
});

recuperar.addEventListener("click", function () {
    h3.innerHTML = localStorage.getItem("datos");
});




// localStorage sirve para almacenar y recuperar datos que guardamos en nuestra computadora
// localStorage.setItem("nombre_del_dato", "valor_del_dato") <--- para guardar
// localStorage.getItem("nombre_del_dato")  <--- para recuperar el dato que quiero


/*
EJERCICIO

Se le solicita al usuario que ingrse:
- Nombre, Apellido, Email y Telefono
- Fecha
- Productos (cantidad, nombre del producto y precio)

Cuando haga click en "Generar factura": 
- mostrar todos los datos (ordenados), calculando el total a pagar


FACTURA

nombre apellido
email
telefono

fecha

CANT.  PRODUCTOS    PRECIO
1      Zapatilla    $100
3      Caramelos    $67

Total a pagar= $167

*/