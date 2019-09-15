let btnVolver = document.querySelector("#btnCancelar");
btnVolver.addEventListener("click", cancelar);

let tipo = document.querySelector('#tipo');
tipo.addEventListener("click", desabilitarCampos);

function desabilitarCampos() {
    if (document.querySelector('#tipo').value == "auto") {
        document.querySelector('#capacidadBaul').disabled = false;
        document.querySelector('#capacidadCarga').disabled = true;
        document.querySelector('#capacidadCarga').value = "";

    }
    if (document.querySelector('#tipo').value == "camioneta") {
        document.querySelector('#capacidadBaul').disabled = true;
        document.querySelector('#capacidadBaul').value = "";
        document.querySelector('#capacidadCarga').disabled = false;
    }
}

function cancelar() {
    history.go(-1);
}