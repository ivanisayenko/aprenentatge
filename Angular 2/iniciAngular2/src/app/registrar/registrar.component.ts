import { Component, OnInit } from '@angular/core';
import { AutentificacioService } from '../autentificacio.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-registrar',
    templateUrl: './registrar.component.html',
    styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent implements OnInit {
    dadesUsuari = {usuari:"", contrasenya:""};

    constructor(
        private autentificacio: AutentificacioService,
        private rutes: Router
    ) { }

    ngOnInit() {
    }

    registrarUsuari() {
        if (this.dadesUsuari.usuari != "" && this.dadesUsuari.contrasenya != "") {
            // console.log(this.dadesUsuari);
            this.autentificacio.registrarUsuari(this.dadesUsuari)
                .subscribe(
                    res => {
                        console.log(res);
                        this.desarToken(res.token);
                        this.rutes.navigate(['/iniciar']);
                    }
                            ,
                    err => console.log(err)
                )
        }else{
            alert("Els camps no poden estar buits!");
        }

    }

    desarToken(token){
        localStorage.setItem('token', token);
    }
}
