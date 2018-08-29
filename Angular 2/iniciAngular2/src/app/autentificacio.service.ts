import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AutentificacioService {

    constructor(private http: HttpClient) { }
    private iniciar: string = "http://localhost:3000/api/iniciar";
    private registrar: string = "http://localhost:3000/api/registrar";

    registrarUsuari(usuari) {
        return this.http.post<any>(this.registrar, usuari);
    }

    iniciarUsuari(usuari) {
        return this.http.post<any>(this.iniciar, usuari);
    }

    usuariLogeat(){
        return !!localStorage.getItem("token");
    }

    getToken(){
        return localStorage.getItem("token");
    }

    eliminarToken(){
        localStorage.removeItem("token");
    }
}
