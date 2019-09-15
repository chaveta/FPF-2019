let btnAgregar = document.querySelector("#btnAgregar");
btnAgregar.addEventListener("click", agregar);
let btnTotal = document.querySelector("#btnTotal");
btnTotal.addEventListener("click", sumar);
let btnVolver = document.querySelector("#btnVolver");
btnVolver.addEventListener("click", volver);

let compras = [];

load();

function agregar() {
    console.log("Función Agregar");
    let producto = document.querySelector('#producto').value;
    let descripcion = document.querySelector('#descripcion').value;
    let precio = parseInt(document.querySelector('#precio').value);
    let iva = precio * 0.21;
    document.querySelector('#producto').value = "";
    document.querySelector('#descripcion').value = "";
    document.querySelector('#precio').value = "";
    let renglon = {
        "producto": producto,
        "descripcion": descripcion,
        "precio": precio,
        "iva": iva
    }
    compras.push(renglon);
    mostrarTablaCompras();
}
function sumar() {
    console.log("Función Sumar");
    let total = 0;
    for (let i = 0; i < compras.length; i++) {
        total += compras[i].precio + compras[i].iva;
    }
    let max = compras[0].precio;
    for (let r of compras) {
        if (max < r.precio)
            max = r.precio;
    }
    document.querySelector("#total").innerHTML =
        "<p>Total: $ " + total + "</p>" +
        "<p>Máximo: $ " + max + "</p>"
}

function mostrarTablaCompras() {
    html = "";
    for (let r of compras) {
        html += `
           <tr>
               <td>${r.producto}</td>
               <td>${r.descripcion}</td>
               <td>${r.precio}</td>
               <td>${r.iva}</td>
           </tr>
       `;
    }
    document.querySelector("#tblCompras").innerHTML = html;
}

async function load() {
    try {
        //Llamada a versión 4 del servicio. Agrega los campos Descripción e Iva.
        let r = await fetch("/productos4");
        compras = await r.json();
        mostrarTablaCompras();
    } catch (err) {
        alert(err.message);
    }
}

function volver() {
    history.go(-1);
}