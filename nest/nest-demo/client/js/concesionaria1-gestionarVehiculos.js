// Se inicializan los botones y se agregan sus listeners de eventos
let btnAgregarVehiculo = document.querySelector("#btnAgregarVehiculo");
btnAgregarVehiculo.addEventListener("click", btnAgregarVehiculoClick);
let btnVolver = document.querySelector("#btnVolver");
btnVolver.addEventListener("click", btnVolverClick);
let tipo = document.querySelector('#tipo');
tipo.addEventListener("click", load);

// Se inicializa el arreglo de vehículos y se carga con la información suministrada por el servidor
let vehiculos = [];
load();

// Función que solicita al servidor la lista de vehículos
async function load() {
    try {
        // Se indica el tipo de vehículo a considerar
        let r = await fetch("/vehiculos/" + tipo.value);
        vehiculos = await r.json();
        mostrarTablaVehiculos();
    } catch (err) {
        alert(err.message);
    }
}

// Función que agrega un vehículo
function btnAgregarVehiculoClick() {
    // El tratamiento se realiza en una página auxiliar
    location.href = "concesionaria1-agregarVehiculo.html";
}

// Función que solicita al servidor el borrado de un vehículo
async function btnBorrarClick() {
    // Se indica como parámetro el número de patente del vehículo a borrar
    let patente = this.getAttribute("patente");
    let response = await fetch(`/vehiculos/${patente}`, {
        "method": "DELETE",
        "headers": {
            "Content-Type": "application/json"
        }
    })
    load();
}

// Función que vuelve al menú principal
function btnVolverClick() {
    location.href = "concesionaria1-principal.html";
}

// Función que muestra por pantalla la tabla de vehículos
function mostrarTablaVehiculos() {
    // Se genera el encabezado de la tabla
    let table = document.getElementById("tbl");
    table.deleteTHead();
    let header = table.createTHead();
    let row = header.insertRow(0);
    let cell = row.insertCell(0);
    cell = row.insertCell(0);
    cell.innerHTML = "Marca";
    cell = row.insertCell(1);
    cell.innerHTML = "Modelo";
    cell = row.insertCell(2);
    cell.innerHTML = "Patente";
    cell = row.insertCell(3);
    cell.innerHTML = "Año";
    cell = row.insertCell(4);
    cell.innerHTML = "Precio";
    cell = row.insertCell(5);
    cell.innerHTML = "";
    if (tipo.value == 'autos') {
        cell.innerHTML = "Capacidad de Baúl";
        cell = row.insertCell(6);
        cell.innerHTML = "";
    }
    else if (tipo.value == 'camionetas') {
        cell.innerHTML = "Capacidad de Carga";
        cell = row.insertCell(6);
        cell.innerHTML = "";
    }
    // Se genera el contenido de la tabla
    html = "";
    for (let r of vehiculos) {
        html += `
                <tr>
                    <td>${r.marca}</td>
                    <td>${r.modelo}</td>
                    <td>${r.patente}</td>
                    <td>${r.anio}</td>
                    <td>${r.precio}</td>
                `;
        if (tipo.value == 'autos') {
            html += `
                    <td>${r.capacidadBaul}</td>
            `;
        }
        else if (tipo.value == 'camionetas') {
            html += `
                    <td>${r.capacidadCarga}</td>
            `;
        }
        html += `
                    <td><button patente="${r.patente}" class="mybtnEliminar" title="Eliminar Vehículo"> </button></td>
                    <td><input type='button' name='' class='mybtnEditar'</td>           
            </tr>
        `;
    }
    // Se asigna el contenido generado a la tabla correspondiente
    document.querySelector("#tblVehiculos").innerHTML = html;
    // Se asigna un listener de evento de click a cada uno de los botones
    let botonesBorrar = document.querySelectorAll(".mybtnEliminar");
    botonesBorrar.forEach(e => { e.addEventListener("click", btnBorrarClick); });
}