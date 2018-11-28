import { Component, OnInit } from '@angular/core';
import { DireccionProveedor } from '../../interfaces/direccionProveedor.interface';
import { NgForm } from '@angular/forms';
import { DireccionProveedorService } from './../../../services/direccion-proveedor.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-add-update-dirprov',
  templateUrl: './add-update-dirprov.component.html',
  styleUrls: []
})
export class AddUpdateDirprovComponent implements OnInit {
  direccionProveedor: DireccionProveedor = {
    codigoDireccion: 0,
    descripcion: '',
    direccion: '',
    codigoProveedor: 0
  };
  nuevo = false;
  constructor(private _activatedRoute: ActivatedRoute, private _dirprovService: DireccionProveedorService, private _router: Router) {
    this._activatedRoute.params.subscribe(params => {
      if ( params['id'] > 0) {
        this._dirprovService.getDireccionProveedor(params['id']).subscribe((data: any) => {
          this.direccionProveedor = data;
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
      this._dirprovService.addDireccionProveedor(this.direccionProveedor).subscribe(data => {
        console.log(data);
        this._router.navigate(['/dirprov']);
      });
    } else {
      this._dirprovService.updateDireccionProveedor(this.direccionProveedor).subscribe(data => {
        console.log(data);
        this._router.navigate(['/dirprov']);
      });
    }
  }
}
