// Inicializo los botones e inputs principales y les agrego sus listeners de eventos

// BOTON AGREGAR
let btnAgregar = document.querySelector("#btnAgregar");
btnAgregar.addEventListener("click", agregar);

// INPUT DE SELECTOR DE TIPO
let tipo = document.querySelector('#tipo');
tipo.addEventListener("click", inicializarCampos);

// BOTON VOLVER
let btnVolver = document.querySelector("#btnVolver");
btnVolver.addEventListener("click", volver);

// Función que agrega un vehículo
async function agregar() {
    // Obtengo los datos del DOM y compruebo los máximos y mínimos de los campos numéricos
    let marca = document.querySelector('#marca').value;
    let modelo = document.querySelector('#modelo').value;
    let patente = document.querySelector('#patente').value;
    patente = patente.toUpperCase();
    let anio = validarAnio(document.querySelector('#anio').value);
    let precio = validarNumero(document.querySelector('#precio').value);
    let capacidadBaul = validarNumero(document.querySelector('#capacidadBaul').value);
    let capacidadCarga = validarNumero(document.querySelector('#capacidadCarga').value);
    // Armo un registro con los datos obtenidos
    let registro = {
        "tipo": tipo.value,
        "marca": marca,
        "modelo": modelo,
        "patente": patente,
        "anio": anio,
        "precio": precio,
        "capacidadBaul": capacidadBaul,
        "capacidadCarga": capacidadCarga
    }
    // Envío el registro al servidor con el método POST
    let response = await fetch("/vehiculos", {
        "method": "POST",
        "headers": {
            "Content-Type": "application/json"
        },
        "body": JSON.stringify(registro)
    });
    if (response.ok) {
        let json = await response.text();
        if (json == "ok") {
            location.href='concesionaria-listar-vehiculos.html';
        }
        else{
            alert("Error: No se ingresó la patente o la misma ya corresponde a otro vehículo.");
        }        
    }    
}

// Función que abilita capacidad de baúl o de carga según el tipo de vehículo a ingresar
function inicializarCampos() {
    if (document.querySelector('#tipo').value == "auto") {
        document.querySelector('#capacidadBaul').disabled = false;
        document.querySelector('#capacidadCarga').disabled = true;
    }
    if (document.querySelector('#tipo').value == "camioneta") {
        document.querySelector('#capacidadBaul').disabled = true;
        document.querySelector('#capacidadCarga').disabled = false;
    }
}

// Función que chequea un número y lo mantiene dentro de limites aceptables
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

// Función que chequea un año y lo mantiene dentro de limites aceptables
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

// Vuelve a la página anterior
function volver() {
    location.href='concesionaria-listar-vehiculos.html';
}