"use strict";
class Coche {
    constructor(color, matricula) {
        this.color = color;
        this.matricula = matricula;
        Coche.cantCoches++;
    }
    infoCoche() {
        return `El coche es de color ${this.color} y con la matricula ${this.matricula}`;
    }
    getColor() {
        return this.color;
    }
}
Coche.cantCoches = 0;
class MarcaCoche extends Coche {
    constructor(color, matricula, marca) {
        super(color, matricula);
        this.marca = marca;
    }
    marcaCoche() {
        return this.marca;
    }
    infoCoche() {
        return `El coche de marca ${this.marca} es de color ${this.color} y con la matricula ${this.matricula}`;
    }
}
var coches = [];
coches.push(new MarcaCoche("Rojo", 123, "Mazda"));
coches.push(new MarcaCoche("Azul", 321, "VolksWagen"));
for (let coche of coches) {
    console.log(coche.infoCoche());
}
