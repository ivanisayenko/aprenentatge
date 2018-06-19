import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Router, RouterModule, NavigationStart, NavigationEnd, ActivationStart } from '@angular/router';
// import 'rxjs/add/operator/pairwise';

@Component({
  selector: 'app-redireccionar',
  templateUrl: './redireccionar.component.html',
  styleUrls: ['./redireccionar.component.css']
})
export class RedireccionarComponent implements OnInit {
  variable: any = null;
  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    //escucha dinamicamente los cambios en los parametros de las rutas
    //gràcies a les funcions fletxes
    this.route.params.forEach(params => {
      this.variable = params["var"];
    })
  }

}
