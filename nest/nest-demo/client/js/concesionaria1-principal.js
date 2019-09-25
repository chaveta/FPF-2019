let btnGestionarVehiculos = document.querySelector("#btnGestionarVehiculos");
btnGestionarVehiculos.addEventListener("click", gestionarVehiculos);

let btnVolver = document.querySelector("#btnVolver");
btnVolver.addEventListener("click", volver);

function gestionarVehiculos() {
    location.href = "concesionaria1-gestionarVehiculos.html";
}

function volver() {
    location.href = "index.html";
}