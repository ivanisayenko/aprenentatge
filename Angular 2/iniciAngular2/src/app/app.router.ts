import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RepositorisComponent } from './repositoris/repositoris.component';
import { RedireccionarComponent } from './redireccionar/redireccionar.component';
import { RegistrarComponent } from './registrar/registrar.component';
import { NavegacioComponent } from './navegacio/navegacio.component';
import { IniciarComponent } from './iniciar/iniciar.component';
import { EventsComponent } from './events/events.component';
import { SpecialEventsComponent } from './special-events/special-events.component';
import { AutentGuard } from './autent.guard';

export const router: Routes = [
    // { path: '', redirectTo: "/iniciar", pathMatch: "full" },
    { path: '', component: RepositorisComponent  },
    { path: 'registrar', component: RegistrarComponent },
    { path: 'iniciar', component: IniciarComponent },
    // { path: 'events', component: EventsComponent },
    // { path: 'special', component: SpecialEventsComponent },
    { 
        path: 'navegacio', 
        component: NavegacioComponent, 
        canActivate: [AutentGuard]
    },
    // { path: 'redi', component: RedireccionarComponent}
    // { path: 'redi/:var', component: RedireccionarComponent}
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);