import { Component, OnInit } from '@angular/core';
import { RepositorisService } from './repositoris.service';

@Component({
  selector: 'app-repositoris',
  templateUrl: './repositoris.component.html',
  styleUrls: ['./repositoris.component.css']
})
export class RepositorisComponent implements OnInit {
  misastgePersonalitzat: String = 'Això es un nou component';
  meuRepositri: any = [];
  cargado: boolean = false;
  repositoriSeleccionat: IRepo = { name: "cap repositori", description: "cap" };
  repositoriAfegir: IRepo = { name: "", description: "" };

  constructor(private repoService: RepositorisService) { }

  newRepo() {
    this.meuRepositri.push({ name: this.repositoriAfegir.name, description: this.repositoriAfegir.description });
    this.repositoriAfegir.name = "";
    this.repositoriAfegir.description = "";
  }

  ngOnInit() {
    setTimeout(() => {
      this.meuRepositri[0] = ({name: 1, description: 1});
      this.repoService.getRepos().subscribe((data)=>{
        for(let index of data.json()){
          this.meuRepositri.push({name: index.full_name, description: index.description});
        }
      });
      this.cargado = true;
    }, 1000);
    
  }

}

interface IRepo {
  name: string;
  description: string;
}
