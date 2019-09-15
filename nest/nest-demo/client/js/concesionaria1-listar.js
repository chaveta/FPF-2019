let btnVolver = document.querySelector("#btnVolver");
btnVolver.addEventListener("click", volver);

let vehiculos = [];
load();

async function load() {
    try {
        //Llamada a versión 1 del servicio. Levanta info de un arreglo para mockear el back
        let r = await fetch("/vehiculos");
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
    html = "";
    for (let r of vehiculos) {
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
    document.querySelector("#tblVehiculos").innerHTML = html;
}