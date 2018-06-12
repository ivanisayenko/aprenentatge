export class Banco {
    nombre: String;
    direccion: String;
    // clientes:Cliente[];

    constructor(nombre: String, direccion: String){
        this.nombre = nombre;
        this.direccion = direccion;
    }

    getNombre(){
        return this.nombre;
    }

    getDireccion(){
        return this.direccion;
    }
}
