import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AutentificacioService } from "./autentificacio.service";

@Injectable()
export class AutentGuard implements CanActivate {
    constructor(
        private rutes: Router,
        private autentificacio: AutentificacioService
    ){}

    canActivate(): boolean{
        if(this.autentificacio.usuariLogeat()){
            return true;
        }else{
            this.rutes.navigate(['/iniciar']);
            return false;
        }
    }
}
