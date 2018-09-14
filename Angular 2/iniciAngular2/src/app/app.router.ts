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
import { HomeComponent } from './home/home.component';
import { TasquesComponent } from "./tasques/tasques.component";
import { NotesComponent } from "./notes/notes.component";

export const router: Routes = [
    // { path: '', redirectTo: "/iniciar", pathMatch: "full" },
    { path: '', component: HomeComponent },
    { path: 'registrar', component: RegistrarComponent },
    { path: 'iniciar', component: IniciarComponent },
    {
        path: 'tasques',
        component: TasquesComponent,
        canActivate: [AutentGuard]
    },
    // { path: 'events', component: EventsComponent },
    // { path: 'special', component: SpecialEventsComponent },
    {
        path: 'notes',
        component: NotesComponent,
        canActivate: [AutentGuard]
    },
    // { path: 'redi', component: RedireccionarComponent}
    // { path: 'redi/:var', component: RedireccionarComponent}
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);