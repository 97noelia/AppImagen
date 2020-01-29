import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CrearUsuarioComponent } from './components/crear-usuario/crear-usuario.component';
import { LeerUsuarioComponent } from './components/leer-usuario/leer-usuario.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'crear',
    component: CrearUsuarioComponent
  },
  {
    path: 'leer',
    component: LeerUsuarioComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
