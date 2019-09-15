let btnAgregar = document.querySelector("#btnAgregar");
btnAgregar.addEventListener("click", agregar);
let btnTotal = document.querySelector("#btnTotal");
btnTotal.addEventListener("click", sumar);
let btnVolver = document.querySelector("#btnVolver");
btnVolver.addEventListener("click", volver);

let compras = [];

load();

function agregar() {
    console.log("Funcion Agregar");
    let producto = document.querySelector('#producto').value;
    let precio = parseInt(document.querySelector('#precio').value);
    document.querySelector('#producto').value = "";
    document.querySelector('#precio').value = "";
    let renglon = {
        "producto": producto,
        "precio": precio
    }
    compras.push(renglon);
    mostrarTablaCompras();
}
function sumar() {
    console.log("Funcion Sumar");
    let total = 0;
    for (let i = 0; i < compras.length; i++) {
        total += compras[i].precio;
    }
    let max = compras[0].precio;
    for (let r of compras) {
        if (max < r.precio)
            max = r.precio;
    }
    document.querySelector("#total").innerHTML =
        "<p>Total: $" + total + "</p>" +
        "<p>Maximo: $" + max + "</p>"
}

function mostrarTablaCompras() {
    html = "";
    for (let r of compras) {
        html += `
           <tr>
               <td>${r.producto}</td>
               <td>${r.precio}</td>
           </tr>
       `;
    }
    document.querySelector("#tblCompras").innerHTML = html;
}

async function load() {
    try {
        //Llamada a versión 3 del servicio. Genera info aleatoria.
        let r = await fetch("/productos3");
        compras = await r.json();
        mostrarTablaCompras();
    } catch (err) {
        alert(err.message);
    }
}

function volver() {
    history.go(-1);
}