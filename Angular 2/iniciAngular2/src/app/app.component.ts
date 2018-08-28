import { Component, ViewChild, AfterViewInit, Input } from '@angular/core';
import { RepositorisService } from './repositoris/repositoris.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'Angular';
    variablePerParametre: string = "";
    mostrarAfegirNota: boolean = false;
    repositoriAfegir: IRepo = { name: "", description: "" };
    constructor(private repoService: RepositorisService) { }

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