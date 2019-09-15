let btnAgregar = document.querySelector("#btnAgregar");
btnAgregar.addEventListener("click", agregar);
let btnTotal = document.querySelector("#btnTotal");
btnTotal.addEventListener("click", sumar);
let btnPosicion = document.querySelector("#btnPosicion");
btnPosicion.addEventListener("click", posicion);
let btnVolver = document.querySelector("#btnVolver");
btnVolver.addEventListener("click", volver);

let compras = [];
load();

function agregar() {
    console.log("Funcion Agregar");
    let producto = document.querySelector('#producto').value;
    let precio = parseInt(document.querySelector('#precio').value);
    document.querySelector('#producto').value="";
    document.querySelector('#precio').value="";
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
    for (let i = 0; i <  compras.length; i++) {
        total += compras[i].precio;
    }
    let max = compras[0].precio;
    for (let r of compras) {
        if(max <  r.precio)
            max = r.precio;
    }
    document.querySelector("#total").innerHTML =
                    "<p>Total: $" + total + "</p>"+
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
        let posicion = document.querySelector('#posicion').value;
        let p=posicion.split(" ");
        document.querySelector('#posicion').value="";
        let r=null;
        if (posicion != "") {
            r = await fetch(`/productos6/${p[0]}/${p[1]}/${p[2]}/${p[3]}`);
        } else {
            r = await fetch("/productos6");
        }        
        let json = await r.json();
        compras = json;
        mostrarTablaCompras();
    } catch (err) {
        alert(err.message);
    }
}

async function posicion() {
    try {
        let posicion = document.querySelector('#posicion').value;
        let p=posicion.split(" ");
        document.querySelector('#posicion').value="";        
        let r = await fetch(`/productos6/${p[0]}/${p[1]}/${p[2]}/${p[3]}`);
        let json = await r.json();
        compras = json;
        mostrarTablaCompras();
    } catch (err) {
        alert(err.message);
    }
}

function volver() {
    history.go(-1);
}