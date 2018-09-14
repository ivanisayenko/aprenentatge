import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-notes',
    templateUrl: './notes.component.html',
    styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {

    constructor() { }

    notes = [];
    titol: String;
    nota: String;
    notesImprimides: number = 0;
    titolModificar: String;
    notaModificar: String;
    esPotModificar: boolean = false;
    indexNotaCambiar: number;

    ngOnInit() {
        this.titol = "Lorem Ipsum";
        this.nota = "Donec et tempus magna. Nullam porttitor, lorem a lacinia ullamcorper, mauris nunc pellentesque ipsum, nec cursus risus ligula a enim. Sed eleifend sollicitudin purus, et mattis nibh eleifend fermentum.";
        this.afegirNota();

        this.titol = "Nunc lacinia";
        this.nota = "Fusce eu velit sed lectus placerat commodo. Praesent vel odio nec nibh maximus suscipit quis quis libero.";
        this.afegirNota();
    }

    eliminarNota(titol) {
        for (var index in this.notes) {
            if (this.notes[index].titol == titol) {
                this.notes.splice(parseInt(index), 1);
            }
        }
    }

    modificarNota(titol) {
        console.log(titol);
        for (var index in this.notes) {
            if (this.notes[index].titol == titol) {
                this.titolModificar = this.notes[index].titol;
                this.notaModificar = this.notes[index].nota;
                this.esPotModificar = true;
                this.indexNotaCambiar = parseInt(index);
                break;
            }
        }
    }

    desarNotaModificar() {
        this.notes[this.indexNotaCambiar].titol = this.titolModificar;
        this.notes[this.indexNotaCambiar].nota = this.notaModificar;
        this.esPotModificar = false;
        this.titolModificar = "";
        this.notaModificar = "";
    }

    cancelar(){
        this.esPotModificar = false;
        this.titolModificar = "";
        this.notaModificar = "";
    }

    afegirNota() {
        var existeix = false;
        for (let nota of this.notes) {
            if (nota.titol == this.titol) {
                existeix = true;
                break;
            }
        }
        if (!existeix) {
            this.notes.push(
                {
                    titol: this.titol,
                    nota: this.nota
                }
            );
            this.titol = "";
            this.nota = "";
        } else {
            alert("El titol existeix!");
        }
    }

    sumar() {
        this.notesImprimides++;
    }
}
