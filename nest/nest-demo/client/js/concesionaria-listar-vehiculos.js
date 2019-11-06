// Se inicializan los botones e inputs principales y se agregan sus listeners de eventos

// INPUT DE SELECCION DE TIPO
let tipo = document.querySelector('#tipo');
tipo.addEventListener("click", inputTipoClick);
// Solicita al servidor la lista de vehículos según el tipo indicado
function inputTipoClick() {
    load(tipo.value);
    ultimaBusqueda = tipo.value;
}

// BARRA DE CONSULTA
let palabraClave = document.querySelector("#palabraClave");
palabraClave.addEventListener("input", activarBtnBuscar);
palabraClave.addEventListener("keydown", event => { if (event.keyCode == '13') { btnBuscarClick(); } });

// BOTON BUSCAR
let btnBuscar = document.querySelector("#btnBuscar");
btnBuscar.addEventListener("click", btnBuscarClick);

// Función que activa al botón #btnBuscar
function activarBtnBuscar() {
    document.querySelector("#btnBuscar").disabled = false;
}

// Función que consulta los vehiculos por palabra clave
function btnBuscarClick() {
    let palabraClave = "";
    palabraClave = document.querySelector('#palabraClave').value;
    palabraClave = palabraClave.toLowerCase();
    if (palabraClave == "autos") {
        document.querySelector('#tipo').value = 'autos';
    }
    else if (palabraClave == "camionetas") {
        document.querySelector('#tipo').value = 'camionetas';
    }
    else if (palabraClave) {
        document.querySelector('#tipo').value = 'todos';
    }
    load(palabraClave);
    ultimaBusqueda = palabraClave;
    document.querySelector('#palabraClave').value = "";
    document.querySelector("#btnBuscar").disabled = true;
}

// BOTON AGREGAR
let btnAgregarVehiculo = document.querySelector("#btnAgregarVehiculo");
btnAgregarVehiculo.addEventListener("click", btnAgregarVehiculoClick);
// Función que agrega un vehículo
function btnAgregarVehiculoClick() {
    // El tratamiento se realiza en una página auxiliar
    location.href = "concesionaria-agregar-vehiculo.html";
}

// BOTON VOLVER
let btnVolver = document.querySelector("#btnVolver");
btnVolver.addEventListener("click", btnVolverClick);
// Función que vuelve al menú principal
function btnVolverClick() {
    location.href = "concesionaria-principal.html";
}

// Se inicializa el arreglo de vehículos y se carga con la información suministrada por el servidor
let vehiculos = [];
load('todos');
let ultimaBusqueda = 'todos';

// Función que solicita al servidor la lista de vehículos
async function load(param1) {
    try {
        // Se indica el tipo de vehículo a considerar
        // let r = await fetch("/vehiculos/" + tipo.value);
        let r = await fetch("/vehiculos/" + param1)
        vehiculos = await r.json();
        mostrarTablaVehiculos();
    } catch (err) {
        alert(err.message);
    }
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
    load(ultimaBusqueda);
}

// Función que modifica un vehículo
async function btnEditarClick() {
    // El tratamiento se realiza en una página auxiliar
    let patente = this.getAttribute("patente");
    location.href = `concesionaria-modificar-vehiculo.html?patente=${patente}`;
}

// Función que visualiza un vehículo
async function btnVisualizarClick() {
    // El tratamiento se realiza en una página auxiliar
    let patente = this.getAttribute("patente");
    location.href = `concesionaria-visualizar-vehiculo.html?patente=${patente}`;
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
    cell = row.insertCell(6);
    cell.innerHTML = "";
    if (tipo.value == 'autos') {
        cell = row.insertCell(5);
        cell.innerHTML = "Baúl (lts)";
        cell = row.insertCell(7);
        cell.innerHTML = "";
    }
    else if (tipo.value == 'camionetas') {
        cell = row.insertCell(5);
        cell.innerHTML = "Carga (kg)";
        cell = row.insertCell(7);
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
                    <td><button patente="${r.patente}" class="mybtnEditar" title="Modificar Vehículo"> </button></td> 
                    <td><button patente="${r.patente}" class="mybtnVisualizar" title="Visualizar Vehículo"> </button></td> 
            </tr>
        `;
    }
        
    // Se asigna el contenido generado a la tabla correspondiente
    document.querySelector("#tblVehiculos").innerHTML = html;
    // Se asigna un listener de evento de click a cada uno de los botones
    let botonesBorrar = document.querySelectorAll(".mybtnEliminar");
    botonesBorrar.forEach(e => { e.addEventListener("click", btnBorrarClick); });
    let botonesEditar = document.querySelectorAll(".mybtnEditar");
    botonesEditar.forEach(e => { e.addEventListener("click", btnEditarClick); });
    let botonesVisualizar = document.querySelectorAll(".mybtnVisualizar");
    botonesVisualizar.forEach(e => { e.addEventListener("click", btnVisualizarClick); });
}