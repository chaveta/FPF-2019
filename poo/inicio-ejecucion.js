"use strict";
exports.__esModule = true;
console.clear();
var auto_1 = require("./auto");
var auto1 = new auto_1["default"]("Fiat", 2018);
var auto2 = new auto_1["default"]("Chevrolet", 2017);
var auto3 = new auto_1["default"]("Ford", 2019);
auto1.imprimirAuto();
console.log(auto1);
auto2.imprimirAuto();
console.log(auto2);
auto3.imprimirAuto();
console.log(auto3);
