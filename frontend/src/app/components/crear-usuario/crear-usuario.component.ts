import { Component, OnInit } from '@angular/core';
import { MiModeloService } from 'src/app/services/mi-modelo.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MiModelo } from 'src/app/modelo/miModelo';

@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.css']
})
export class CrearUsuarioComponent implements OnInit {

  private formUser: FormGroup;
  public misUsuarios: MiModelo;

  constructor(private formBuilder: FormBuilder, private miModuloService: MiModeloService) { 
    this.formUser = formBuilder.group({
      nombre: ['',[Validators.required]],
      imagen: []
    });
  }

  ngOnInit() {
  }

  submit() {
    console.log(this.misUsuarios);
    this.miModuloService.saveUsuario(this.formUser.value).subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log(err);
      }
    );
  }

}
