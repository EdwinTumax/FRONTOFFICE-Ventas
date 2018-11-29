import { Component, OnInit } from '@angular/core';
import { DetalleFacturaService } from '../../../services/detalle-factura.service';
import { FacturaService } from '../../../services/factura.service';
import { Factura } from '../../interfaces/factura.interface';
import { DetalleFactura } from '../../interfaces/detalle-factura.interface';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Producto } from '../../interfaces/producto.interface';
import { Categoria } from '../../interfaces/categoria.interface';

@Component({
  selector: 'app-add-update-detalle-factura',
  templateUrl: './add-update-detalle-factura.component.html',
})
export class AddUpdateDetalleFacturaComponent implements OnInit {
detalleFactura: DetalleFactura = {
  codigoFacturaDetalle: 0,
  precio: 0,
  cantidad: 0,
  subTotal: 0,
  producto: null
};
nuevo = false;
  constructor(private _activatedRoute: ActivatedRoute, private _detalleFacturaService: DetalleFacturaService, private _router: Router) {
    this._activatedRoute.params.subscribe(params => {
        if ( params['id'] > 0) {
          this._detalleFacturaService.getDetalleFactura(params['id']).subscribe((data: any) => {
            this.detalleFactura = data;
          });
        } else {
          this.nuevo = true;
        }
    });
   }

guardar() {
  if ( this.nuevo ) {
    this._detalleFacturaService.addDetalleFactura(this.detalleFactura).subscribe(data => {
      console.log(data);
      this._router.navigate(['/detalle-factura']);
    });
  } else {
      this._detalleFacturaService.updateDetalleFactura(this.detalleFactura).subscribe(data => {
        console.log(data);
        this._router.navigate(['/detalle-factura']);
      });
  }
}

  ngOnInit() {
  }

}
