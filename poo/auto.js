"use strict";
exports.__esModule = true;
var Auto = /** @class */ (function () {
    function Auto(marca, modelo) {
        this.marca = marca;
        this.modelo = modelo;
    }
    Auto.prototype.imprimirAuto = function () {
        console.log(this);
    };
    return Auto;
}());
exports["default"] = Auto;
