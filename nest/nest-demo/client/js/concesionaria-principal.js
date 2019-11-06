let btnListarVehiculos = document.querySelector("#btnListarVehiculos");
btnListarVehiculos.addEventListener("click", listarVehiculos);

let btnVolver = document.querySelector("#btnVolver");
btnVolver.addEventListener("click", volver);

function listarVehiculos() {
    location.href = "concesionaria-listar-vehiculos.html";
}

function volver() {
    location.href = "index.html";
}