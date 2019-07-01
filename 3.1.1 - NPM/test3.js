console.clear();
console.log();
console.log("Esta es la funcionalidad del archivo test3.js");
console.log("Utiliza la libreria numbers-to-words");
console.log("Se ejecuta mediante el script prueba3");
console.log("Genera un texto que representa el valor númerico pasado como parámetro: ");
console.log("Es similar a test2 pero esta vez utiliza el parámetro pasado en el script")
var converter = require('number-to-words');
let parametros = process.argv.slice(2);
console.log(parametros);
var valor = parseInt(parametros[0]);
console.log(valor + " ----> " + converter.toWords(valor));
console.log();