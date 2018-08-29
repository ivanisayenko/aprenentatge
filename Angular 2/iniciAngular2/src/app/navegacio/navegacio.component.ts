import { Component, OnInit } from '@angular/core';
import { NavegacioService } from './navegacio.service';
@Component({
    selector: 'app-navegacio',
    templateUrl: './navegacio.component.html',
    styleUrls: ['./navegacio.component.css']
})
export class NavegacioComponent {

    title = 'practica';
    variablePerParametre: string = "";
    mostrarAfegirNota: boolean = false;
    repositoriAfegir: IRepo = { name: "", description: "" };
    constructor(private repoService: NavegacioService) { }

    novaVariable() {
        // console.log(this.variablePerParametre);
        // this.router.navigate(["/redi", this.variablePerParametre]);
        this.variablePerParametre = "";
    }


    afegirNovaNota() {
        this.repoService.newRepo({
            name: this.repositoriAfegir.name,
            description: this.repositoriAfegir.description,
        });
    }
}
interface IRepo {
    name: string;
    description: string;
}
