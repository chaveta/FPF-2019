let btnVolver = document.querySelector("#btnVolver");
btnVolver.addEventListener("click", volver);

function volver() {
    history.go(-1);
}