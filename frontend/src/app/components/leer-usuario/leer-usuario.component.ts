import { Component, OnInit } from '@angular/core';
import { MiModelo } from 'src/app/modelo/miModelo';
import { MiModeloService } from 'src/app/services/mi-modelo.service';

@Component({
  selector: 'app-leer-usuario',
  templateUrl: './leer-usuario.component.html',
  styleUrls: ['./leer-usuario.component.css']
})
export class LeerUsuarioComponent implements OnInit {

  private usuarios: MiModelo;
  constructor(private miModeloService: MiModeloService) { }

  ngOnInit() {
    this.miModeloService.getUsuarios().subscribe(
      res => {
        console.log(res);
        this.usuarios = res;
      },
      error => {
        console.log(error);
      }
    );
  }

}
