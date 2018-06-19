import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { routes } from './app.router';
import { RepositorisComponent } from './repositoris/repositoris.component';
import { RepositorisService } from './repositoris/repositoris.service';
import { RedireccionarComponent } from './redireccionar/redireccionar.component';

@NgModule({
  declarations: [
    AppComponent,
    RepositorisComponent,
    RedireccionarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    // RepositorisService,
    HttpModule,
    routes
  ],
  providers: [
    RepositorisService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
