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
        if(localStorage.getItem("token") != null){
            return true;
        }else if(sessionStorage.getItem("token") != null){
            return true;
        }else{
            return false;
        }
    }

    getToken(){
        if(localStorage.getItem("token") != null){
            return localStorage.getItem("token");
        }
        return sessionStorage.getItem("token");
    }

    eliminarToken(){
        localStorage.removeItem("token");
        sessionStorage.removeItem("token");
    }
}
