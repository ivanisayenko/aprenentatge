"use strict";
class Random {
    constructor(paraula) {
        this.nombreRandom = Math.random() * (10000);
        this.paraulaRandom = "";
        this.paraulaRandom = paraula;
    }
    getNombre() {
        return this.nombreRandom;
    }
    getParaula() {
        return this.paraulaRandom;
    }
}
let random = new Random("prova de interface");
console.log(random.getNombre());
console.log(random.getParaula());
