import { Component, OnInit } from '@angular/core';
import { DetalleFacturaService } from '../../services/detalle-factura.service';

@Component({
  selector: 'app-detalle-factura',
  templateUrl: './detalle-factura.component.html'
})

export class DetalleFacturaComponent implements OnInit {
detalleFacturas: any[] = [];
loading = false;
  constructor(private _detalleFacturaService: DetalleFacturaService) {
    this.loading = true;
    this._detalleFacturaService.getDetalleFacturas().subscribe((data: any) => {
        console.log(data);
        this.detalleFacturas = data;
        this.loading = false;
    });
  }

  ngOnInit() {
  }


}
