import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { BarraNavegacionComponent } from './components/barra-navegacion/barra-navegacion.component';
import { CrearUsuarioComponent } from './components/crear-usuario/crear-usuario.component';
import { LeerUsuarioComponent } from './components/leer-usuario/leer-usuario.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BarraNavegacionComponent,
    CrearUsuarioComponent,
    LeerUsuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
