class Coche {
    public static cantCoches: number = 0;

    constructor(protected color: string, protected matricula: number) {
        Coche.cantCoches++;
    }

    infoCoche(): String {
        return `El coche es de color ${this.color} y con la matricula ${this.matricula}`;
    }

    getColor(): String {
        return this.color;
    }

}

class MarcaCoche extends Coche {
    constructor(color: string, matricula: number, private marca: String) {
        super(color, matricula);
    }

    marcaCoche(): String {
        return this.marca;
    }

    infoCoche(): String {
        return `El coche de marca ${this.marca} es de color ${this.color} y con la matricula ${this.matricula}`;
    }
}

var coches: Coche[] = [];
coches.push(new MarcaCoche("Rojo", 123, "Mazda"));
coches.push(new MarcaCoche("Azul", 321, "VolksWagen"));

for (let coche of coches) {
    console.log(coche.infoCoche());
}