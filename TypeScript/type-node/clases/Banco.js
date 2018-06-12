"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Banco = /** @class */ (function () {
    // clientes:Cliente[];
    function Banco(nombre, direccion) {
        this.nombre = nombre;
        this.direccion = direccion;
    }
    Banco.prototype.getNombre = function () {
        return this.nombre;
    };
    Banco.prototype.getDireccion = function () {
        return this.direccion;
    };
    return Banco;
}());
exports.Banco = Banco;
