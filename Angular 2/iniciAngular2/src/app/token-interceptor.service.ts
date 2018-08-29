import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { AutentificacioService } from './autentificacio.service';

@Injectable({
    providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

    constructor(private injector: Injector) { }

    intercept(req, next) {
        let autentificacio = this.injector.get(AutentificacioService);
        let tokenizedReq = req.clone({
            setHeaders: {
                Authorization: `Bearer ${autentificacio.getToken()}`
            }
        });
        return next.handle(tokenizedReq);
    }
}
