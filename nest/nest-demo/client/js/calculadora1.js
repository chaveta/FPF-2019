let btnCalcular = document.querySelector("#btnCalcular");
btnCalcular.addEventListener("click", calcular);
let btnVolver = document.querySelector("#btnVolver");
btnVolver.addEventListener("click", volver);

let calculos = [];
load();

function calcular() {
    console.log("Función Calcular");
    let num1 = parseInt(document.querySelector('#num1').value);
    let operador = document.querySelector('#operador').value;
    let num2 = parseInt(document.querySelector('#num2').value);
    switch (operador) {
        case '+':
            resultado = num1 + num2;
            break;
        case '-':
            resultado = num1 - num2;
            break;
        case '*':
            resultado = num1 * num2;
            break;
        case '/':
            resultado = num1 / num2;
            break;
        case '^':
            resultado = Math.pow(num1, num2);
            break;
        default:
            resultado = 0;
            break;
    }
    document.querySelector('#num1').value = "";
    document.querySelector('#num2').value = "";

    let renglon = {
        "num1": num1,
        "operador": operador,
        "num2": num2,
        "resultado": resultado
    }
    calculos.push(renglon);
    mostrarTablaCalculos();
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