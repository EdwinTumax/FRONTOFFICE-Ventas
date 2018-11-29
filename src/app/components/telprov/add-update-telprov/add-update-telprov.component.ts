import { Component, OnInit } from '@angular/core';
import { TelefonoProveedor } from '../../interfaces/telefonoProveedor.interface';
import { NgForm } from '@angular/forms';
import { TelefonoProveedorService } from './../../../services/telefono-proveedor.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-add-update-telprov',
  templateUrl: './add-update-telprov.component.html',
  styles: []
})
export class AddUpdateTelprovComponent implements OnInit {

  telefonoProveedor: TelefonoProveedor = {
    codigoTelefono: 0,
    descripcion: '',
    numeroTelefono: 0,
    codigoProveedor: 0
  };
  nuevo = false;
  constructor(private _activatedRoute: ActivatedRoute, private _telprovService: TelefonoProveedorService, private _router: Router) {
    this._activatedRoute.params.subscribe(params => {
      if ( params['id'] > 0) {
        this._telprovService.getTelefonoProveedor(params['id']).subscribe((data: any) => {
          this.telefonoProveedor = data;
        });
      } else {
        this.nuevo = true;
      }
    });
   }

  ngOnInit() {
  }

  guardar() {
    if ( this.nuevo ) {
      this._telprovService.addTelefonoProveedor(this.telefonoProveedor).subscribe(data => {
        console.log(data);
        this._router.navigate(['/telprov']);
      });
    } else {
      this._telprovService.updateTelefonoProveedor(this.telefonoProveedor).subscribe(data => {
        console.log(data);
        this._router.navigate(['/telprov']);
      });
    }
  }

}
