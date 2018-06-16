"use strict";
class Ciutat {
    //han de ser publics si o si
    constructor(ciutat, codiPostal) {
        this.ciutat = ciutat;
        this.codiPostal = codiPostal;
    }
}
class Random {
    constructor(paraulaRandom) {
        this.paraulaRandom = paraulaRandom;
        this.nombreRandom = Math.random() * (10000);
    }
    getNombre() {
        return this.nombreRandom;
    }
    getParaula() {
        return this.paraulaRandom;
    }
    novaCiutat(ciutat) {
        console.log(`Hem afegit una ciutat nova: ${ciutat.ciutat} amb el codi postal ${ciutat.codiPostal}`);
    }
}
let ciutats = new Random("Llista de ciutats");
// console.log(random.getNombre());
console.log(ciutats.getParaula());
//podem afegir directament objectes d'interfaces
ciutats.novaCiutat({ ciutat: "Barcelona", codiPostal: 08900 });
//o podem crear un objecte nou mitjançnat constructor d'una clase
//que implementa aquesta interface 
ciutats.novaCiutat(new Ciutat("Madrid", 0972));
