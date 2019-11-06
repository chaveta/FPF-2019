// Leo el parámetro que viene del llamado de la página anterior (concesionaria-listar-vehiculos.js)
// para obtener la patente del vehículo a modificar.
// Se termina accediendo a la misma con la sentencia: params['patente']
let paramstr = window.location.search.substr(1);
let paramarr = paramstr.split("&");
let params = {};
for (let i = 0; i < paramarr.length; i++) {
    let tmparr = paramarr[i].split("=");
    params[tmparr[0]] = tmparr[1];
}

// Agrego listeners de eventos a los botones e inputs principales de la página

// BOTON VOLVER
let btnVolver = document.querySelector("#btnVolver");
btnVolver.addEventListener("click", volver);

//Inicializo el arreglo de vehiculos y con el número de patente pido los datos del vehículo al servidor
let vehiculo = [];
loadPorPatente(params['patente']);

// Función que solicita al servidor los datos del vehículo a visualizar
async function loadPorPatente(patente) {
    try {
        // Se indica el tipo de vehículo a considerar
        let r = await fetch("/vehiculos/" + patente);
        vehiculos = await r.json();
    } catch (err) {
        alert(err.message);
    }
    // Inicializo los campos del formulario con los datos recibidos
    inicializarCampos();
}

// Inicializa los campos del formulario con los datos recibidos
function inicializarCampos() {
    document.querySelector('#tipo').value = vehiculos[0].tipo;
    document.querySelector('#marca').value = vehiculos[0].marca;
    document.querySelector('#modelo').value = vehiculos[0].modelo;
    document.querySelector('#patente').value = vehiculos[0].patente;
    document.querySelector('#anio').value = vehiculos[0].anio;
    document.querySelector('#precio').value = vehiculos[0].precio;
    if (document.querySelector('#tipo').value == "auto") {
        document.querySelector('#capacidadBaul').value = vehiculos[0].capacidadBaul;
    }
    else if (document.querySelector('#tipo').value == "camioneta") {
        document.querySelector('#capacidadCarga').value = vehiculos[0].capacidadCarga;
    }
}

// Función que vuelve a la página anterior
function volver() {
    location.href = 'concesionaria-listar-vehiculos.html';
}