import { Component, OnInit } from '@angular/core';
import { AutentificacioService } from '../autentificacio.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-iniciar',
    templateUrl: './iniciar.component.html',
    styleUrls: ['./iniciar.component.css']
})

export class IniciarComponent implements OnInit {

    constructor(
        private autentificacio: AutentificacioService,
        private rutes: Router
    ) { }

    dadesUsuari = {usuari:"", contrasenya:""};

    ngOnInit() {
    }

    iniciarUsuari(){
        if (this.dadesUsuari.usuari != "" && this.dadesUsuari.contrasenya != "") {
            // console.log(this.dadesUsuari);
            this.autentificacio.iniciarUsuari(this.dadesUsuari)
                .subscribe(
                    res => {
                        console.log(res);
                        this.desarToken(res.token);
                        this.rutes.navigate(['/navegacio']);
                    },
                    err =>{
                        console.log(err);
                        alert("Usuari o contrasenya incorrecte");
                    } 
                )
        }else{
            alert("Els camps no poden estar buits!");
        }
    }

    desarToken(token){
        localStorage.setItem('token', token);
    }

}
