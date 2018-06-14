interface Defecte {
    nombreRandom: number;
    paraulaRandom: string;

    getNombre(): number;
    getParaula(): string;
}

interface ICiutat{
    ciutat: string;
    codiPostal: number;
}

class Ciutat implements ICiutat{
    //han de ser publics si o si
    constructor(public ciutat: string, public codiPostal: number) {
    }
}

class Random implements Defecte {
    public nombreRandom = Math.random() * (10000);
    constructor(public paraulaRandom: string) {
    }

    getNombre(): number {
        return this.nombreRandom;
    }

    getParaula(): string {
        return this.paraulaRandom;
    }

    novaCiutat(ciutat: ICiutat) {
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