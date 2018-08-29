import { Component, ViewChild, AfterViewInit, Input } from '@angular/core';
import { AutentificacioService } from "./autentificacio.service";


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    constructor(private autentificacio: AutentificacioService) { }
}

