let btnVolver = document.querySelector("#btnVolver");
btnVolver.addEventListener("click", volver);
let tipo = document.querySelector('#tipo');
tipo.addEventListener("click", load);

let vehiculos = [];
load();

async function load() {
    try {
        let r = await fetch("/vehiculos/"+tipo.value);
        vehiculos = await r.json();
        mostrarTablaVehiculos();
    } catch (err) {
        alert(err.message);
    }
}

function volver() {
    history.go(-1);
}

function mostrarTablaVehiculos() {
    // Muestra el encabezado
    let table = document.getElementById("tbl");
    table.deleteTHead();
    let header = table.createTHead();
    let row = header.insertRow(0);
    let cell = row.insertCell(0);
    cell.innerHTML = "Marca";
    cell = row.insertCell(1);
    cell.innerHTML = "Modelo";
    cell = row.insertCell(2);
    cell.innerHTML = "Patente";
    cell = row.insertCell(3);
    cell.innerHTML = "Año";
    cell = row.insertCell(4);
    cell.innerHTML = "Precio";
    if (tipo.value == 'autos') {
        cell = row.insertCell(5);
        cell.innerHTML = "Capacidad de Baúl";
    }
    else if (tipo.value == 'camionetas') {
        cell = row.insertCell(5);
        cell.innerHTML = "Capacidad de Carga";
    }
    // Muestra el contenido de la tabla
    html = "";
    for (let r of vehiculos) {
        if (tipo.value == 'autos') {
            html += `
                <tr>
                    <td>${r.marca}</td>
                    <td>${r.modelo}</td>
                    <td>${r.patente}</td>
                    <td>${r.anio}</td>
                    <td>${r.precio}</td>
                    <td>${r.capacidadBaul}</td>
                </tr>
            `;
        }
        else if (tipo.value == 'camionetas') {
            html += `
                <tr>
                    <td>${r.marca}</td>
                    <td>${r.modelo}</td>
                    <td>${r.patente}</td>
                    <td>${r.anio}</td>
                    <td>${r.precio}</td>
                    <td>${r.capacidadCarga}</td>
                </tr>
            `;
        }
        else {
            html += `
                <tr>
                    <td>${r.marca}</td>
                    <td>${r.modelo}</td>
                    <td>${r.patente}</td>
                    <td>${r.anio}</td>
                    <td>${r.precio}</td>
                </tr>
            `;
        }
    }
    document.querySelector("#tblVehiculos").innerHTML = html;
}