import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../interfaces/usuario.interface';
import { NgForm } from '@angular/forms';
import { UsuarioService } from './../../../services/usuario.service';
import { Router, ActivatedRoute } from '@angular/router';
import { RolService } from 'src/app/services/rol.service';

@Component({
  selector: 'app-add-update-usuario',
  templateUrl: './add-update-usuario.component.html',
  styles: []
})

export class AddUpdateUsuarioComponent implements OnInit {
  roles: any[] = [];
    usuario: Usuario = {
    codigoUsuario: 0,
    email: '',
    nombre: '',
    password: '',
    codigoRol: 0
  };
  nuevo = false;
  constructor(private _activatedRoute: ActivatedRoute,
    private _usuarioService: UsuarioService,
    private _router: Router,
    private _rolService: RolService) {
    this._activatedRoute.params.subscribe(params => {
      if ( params['id'] > 0) {
        this._usuarioService.getUsuario(params['id']).subscribe((data: any) => {
          this.usuario = data;
        });
      } else {
        this.nuevo = true;
      }
    });
   }

  ngOnInit() {
    this.obtenerRoles();
  }

  obtenerRoles() {
    this._rolService.getRoles().subscribe( (data: any) => {
      this.roles = data;
    });
  }

  guardar() {
    if ( this.nuevo ) {
      this._usuarioService.addUsuario(this.usuario).subscribe(data => {
        console.log(data);
        this._router.navigate(['/usuario']);
      });
    } else {
      this._usuarioService.updateUsuario(this.usuario).subscribe(data => {
        console.log(data);
        this._router.navigate(['/usuario']);
      });
    }
  }
}
