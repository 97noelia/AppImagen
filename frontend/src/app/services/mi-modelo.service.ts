import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MiModelo } from '../modelo/miModelo';

@Injectable({
  providedIn: 'root'
})
export class MiModeloService {

  constructor(private http: HttpClient) { }
  getUsuarios(): Observable<any> {
    return this.http.get('http://localhost:3000/usuarios');
  }
  /*
  getUsuario(){

  }
  */
  saveUsuario(usuario: MiModelo): Observable<any> {
    console.log(usuario);
    return this.http.post('http://localhost:3000/usuarios', usuario);
  }
  /*
  deleteUsuario(){

  }
  updateUsuario(){

  }
  */
}
