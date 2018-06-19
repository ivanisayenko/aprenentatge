import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RepositorisComponent } from './repositoris/repositoris.component';
import { RedireccionarComponent } from './redireccionar/redireccionar.component';

export const router: Routes = [
    { path: '', component: RepositorisComponent },
    { path: 'redi', component: RedireccionarComponent },
    { path: 'redi/:var', component: RedireccionarComponent}
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);