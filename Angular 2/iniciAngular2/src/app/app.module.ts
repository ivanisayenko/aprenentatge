import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { routes } from './app.router';
import { RepositorisComponent } from './repositoris/repositoris.component';
import { RepositorisService } from './repositoris/repositoris.service';
import { RedireccionarComponent } from './redireccionar/redireccionar.component';
import { RegistrarComponent } from './registrar/registrar.component';
import { IniciarComponent } from './iniciar/iniciar.component';
import { NavegacioComponent } from './navegacio/navegacio.component';
import { AutentificacioService } from './autentificacio.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { SpecialEventsComponent } from './special-events/special-events.component';
import { EventsComponent } from './events/events.component';
import { EventService } from "./event.service";
import { RouterModule } from '@angular/router';
import { AutentGuard } from './autent.guard';
import { TokenInterceptorService } from './token-interceptor.service';

@NgModule({
    declarations: [
        AppComponent,
        RepositorisComponent,
        RedireccionarComponent,
        RegistrarComponent,
        IniciarComponent,
        NavegacioComponent,
        SpecialEventsComponent,
        EventsComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        // RepositorisService,
        HttpModule,
        routes,
        HttpClientModule,
        RouterModule
    ],
    providers: [
        RepositorisService,
        AutentificacioService,
        AutentGuard,
        EventService,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: TokenInterceptorService,
            multi: true
        }
        
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
