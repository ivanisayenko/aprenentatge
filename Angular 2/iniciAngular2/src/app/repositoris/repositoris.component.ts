import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-repositoris',
  templateUrl: './repositoris.component.html',
  styleUrls: ['./repositoris.component.css']
})
export class RepositorisComponent implements OnInit {
  misastgePersonalitzat: String = 'Això es un nou component';
  meuRepositri: any;
  cargado: boolean = false;

  constructor() { }

  ngOnInit() {

    setTimeout(() => {
      this.meuRepositri = [{
        name: "Prova 1",
        description: "Aixo es una prova del meu component personalitzat"
      },
      {
        name: "Prova 2",
        description: "M'agrada molt aprendre diferents frameworks i llenguatges de programació"
      },
      {
        name: "Prova 3",
        description: "Angular 2 no té res a veure amb la seva primera versió"
      },
      {
        name: "Prova 4",
        description: "TypeScript m'agrada moltissim"
      }];
      this.cargado = true;
    }, 3000);
  }

}
