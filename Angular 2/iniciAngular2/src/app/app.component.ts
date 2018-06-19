import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular 2';
  variablePerParametre: string = "";

  constructor(
    // private router: Router,
  ) { }
  
  novaVariable(){
    // console.log(this.variablePerParametre);
    // this.router.navigate(["/redi", this.variablePerParametre]);
    this.variablePerParametre = "";
    
  }
}
