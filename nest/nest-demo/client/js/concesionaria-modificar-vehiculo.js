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

// BOTON MODIFICAR
let btnModificarVehiculo = document.querySelector("#btnModificarVehiculo");
btnModificarVehiculo.addEventListener("click", modificarVehiculo);

// INPUT DE SELECCION DE TIPO
let tipo = document.querySelector('#tipo');
tipo.addEventListener("click", cambiarDeTipo);

// BOTON VOLVER
let btnVolver = document.querySelector("#btnVolver");
btnVolver.addEventListener("click", volver);

//Inicializo el arreglo de vehiculos y con el número de patente pido los datos del vehículo al servidor
let vehiculo = [];
loadPorPatente(params['patente']);

// Función que solicita al servidor los datos del vehículo a modificar
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
        document.querySelector('#capacidadCarga').disabled = true;
        document.querySelector('#capacidadBaul').disabled = false;
        document.querySelector('#capacidadBaul').value = vehiculos[0].capacidadBaul;
    }
    else if (document.querySelector('#tipo').value == "camioneta") {
        document.querySelector('#capacidadBaul').disabled = true;
        document.querySelector('#capacidadCarga').disabled = false;
        document.querySelector('#capacidadCarga').value = vehiculos[0].capacidadCarga;
    }
}

// Función que abilita la capacidad de baúl o de carga según el tipo de vehículo a modificar
function cambiarDeTipo() {
    if (document.querySelector('#tipo').value == "auto") {
        document.querySelector('#capacidadBaul').disabled = false;
        document.querySelector('#capacidadCarga').disabled = true;
        document.querySelector('#capacidadCarga').value = "";
    }
    else if (document.querySelector('#tipo').value == "camioneta") {
        document.querySelector('#capacidadBaul').disabled = true;
        document.querySelector('#capacidadBaul').value = "";
        document.querySelector('#capacidadCarga').disabled = false;
    }
}

// Función que modifica un vehículo
async function modificarVehiculo() {
    // Obtengo los datos del DOM
    let tipo = document.querySelector('#tipo').value;
    let marca = document.querySelector('#marca').value;
    let modelo = document.querySelector('#modelo').value;
    let patente = document.querySelector('#patente').value;
    let anio = validarAnio(document.querySelector('#anio').value);
    let precio = validarNumero(document.querySelector('#precio').value);
    let capacidadBaul = validarNumero(document.querySelector('#capacidadBaul').value);
    let capacidadCarga = validarNumero(document.querySelector('#capacidadCarga').value);
    // Armo un registro con los datos obtenidos
    let registro = {
        "tipo": tipo,
        "marca": marca,
        "modelo": modelo,
        "patente": patente,
        "anio": anio,
        "precio": precio,
        "capacidadBaul": capacidadBaul,
        "capacidadCarga": capacidadCarga
    }
    // Solicito el PUT al servidor
    let response = await fetch(`/vehiculos/${patente}`, {
        "method": "PUT",
        "headers": {
            "Content-Type": "application/json"
        },
        "body": JSON.stringify(registro)
    })
    // Vuelvo a la página de gestión de vehículos
    location.href = 'concesionaria-listar-vehiculos.html';
}

// Función que chequea un input de número y lo mantiene dentro de limites aceptables
function validarNumero(numero){
    let numeroAux = Math.floor(numero);
    if (numeroAux > 9999999) {
        numeroAux = 9999999
    }
    else if (numeroAux < 1) {
        numeroAux = "";
    }
    return numeroAux;
}

// Función que chequea un input de año y lo mantiene dentro de limites aceptables
function validarAnio(anio){
    anio = Math.floor(anio);
    let today = new Date();
    let year = today.getFullYear();
    if (anio > year+1) { 
        anio = year+1;
    }
    else if (anio < 1900) { 
        anio = "";
    }    
    return anio;
}

// Función que vuelve a la página anterior
function volver() {
    location.href = 'concesionaria-listar-vehiculos.html';
}