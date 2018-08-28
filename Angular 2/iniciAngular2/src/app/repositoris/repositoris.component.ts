import { Component, OnInit } from '@angular/core';
import { RepositorisService } from './repositoris.service';

@Component({
    selector: 'app-repositoris',
    templateUrl: './repositoris.component.html',
    styleUrls: ['./repositoris.component.css']
})
export class RepositorisComponent implements OnInit {
    misastgePersonalitzat: String = 'Això es un nou component';
    meuRepositri: any;
    cargado: boolean = false;
    repositoriSeleccionat: IRepo = { name: "cap repositori", description: "cap" };
    repositoriAfegir: IRepo = { name: "", description: "" };

    constructor(private repoService: RepositorisService) {
    }

    ngOnInit() {
        setTimeout(() => {
            this.repoService.newRepo({ name: "1", description: "1" });
            this.cargado = true;
            this.meuRepositri = this.repoService.getMeuRepository();
        }, 800);
    }

    newRepo() {
        this.repoService.newRepo({
            name: this.repositoriAfegir.name, 
            description: this.repositoriAfegir.description, 
        });
    }
}

interface IRepo {
    name: String;
    description: String;
}
