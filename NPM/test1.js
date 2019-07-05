console.clear();
console.log();
console.log("Esta es la funcionalidad del archivo test1.js");
console.log("Utiliza la libreria random-int");
console.log("Se ejecuta mediante el script prueba1");
const randomInt = require('random-int');
aleatorio = randomInt(1, 6);    
console.log("Genera un número aleatorio entre 1 y 6 ----> " + aleatorio);
console.log();