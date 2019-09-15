let btnCalcular = document.querySelector("#btnCalcular");
btnCalcular.addEventListener("click", calcular);
let btnVolver = document.querySelector("#btnVolver");
btnVolver.addEventListener("click", volver);

let calculos = [];

async function calcular() {
    try {
        let num1 = parseInt(document.querySelector('#num1').value);
        let operador = document.querySelector('#operador').value;
        let num2 = parseInt(document.querySelector('#num2').value);
        let r = null;
        r = await fetch(`/calculos2/${num1}/${operador}/${num2}`);
        let json = await r.json();
        document.querySelector('#num1').value = "";
        document.querySelector('#num2').value = "";
        if (json[0].operador == "d") {
            json[0].operador = "/"; // No se admite ni "% ni "/" como parámetro, por ello paso una "d"
        }
        calculos.push(json[0]);
        mostrarTablaCalculos();
    } catch (err) {
        alert(err.message);
    }
}

function mostrarTablaCalculos() {
    html = "";
    for (let r of calculos) {
        html += `
            <tr>
                <td>${r.num1}</td>
                <td>${r.operador}</td>
                <td>${r.num2}</td>
                <td>${r.resultado}</td>
            </tr>
        `;
    }
    document.querySelector("#tblCalculos").innerHTML = html;
}

function volver() {
    history.go(-1);
}