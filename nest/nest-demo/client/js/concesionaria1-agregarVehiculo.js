let btnAgregar = document.querySelector("#btnAgregar");
btnAgregar.addEventListener("click", agregar);

let btnVolver = document.querySelector("#btnVolver");
btnVolver.addEventListener("click", volver);

let tipo = document.querySelector('#tipo');
tipo.addEventListener("click", inicializarCampos);

function inicializarCampos() {
    // document.querySelector('#marca').value = "";
    // document.querySelector('#modelo').value = "";
    // document.querySelector('#patente').value = "";
    // document.querySelector('#anio').value = "";
    // document.querySelector('#precio').value = "";
    // document.querySelector('#capacidadBaul').value = "";
    // document.querySelector('#capacidadCarga').value = "";
    if (document.querySelector('#tipo').value == "auto") {
        document.querySelector('#capacidadBaul').disabled = false;
        document.querySelector('#capacidadCarga').disabled = true;
    }
    if (document.querySelector('#tipo').value == "camioneta") {
        document.querySelector('#capacidadBaul').disabled = true;
        document.querySelector('#capacidadCarga').disabled = false;
    }
}

async function agregar() {
    let marca = document.querySelector('#marca').value;
    let modelo = document.querySelector('#modelo').value;
    let patente = document.querySelector('#patente').value;
    let anio = document.querySelector('#anio').value;
    let precio = document.querySelector('#precio').value;
    let capacidadBaul = document.querySelector('#capacidadBaul').value;
    let capacidadCarga = document.querySelector('#capacidadCarga').value;
    
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

    let response = await fetch("/vehiculos", {
        "method": "POST",
        "headers": {
            "Content-Type": "application/json"
        },
        "body": JSON.stringify(registro)
    });
     
    if (response.ok) {
        let json = await response.text();
        if (json != "ok") {
            alert("Error en datos");
        }
    }
    location.href='concesionaria1-gestionarVehiculos.html';
}

function volver() {
    location.href='concesionaria1-gestionarVehiculos.html';
}