import { Component, OnInit } from '@angular/core';
import { TelClienteService } from './../../services/telCliente.service';
import { TelCliente } from './../interfaces/telCliente.interface';

@Component({
    selector: 'app-telCliente',
    templateUrl: './telCliente.component.html',
    styles: []
})

export class TelClienteComponent implements OnInit {
  TelClientes: any[] = [];
  loading = false;
  constructor(private _TelClienteService: TelClienteService) {
    this.loading = true;
    this._TelClienteService.getTelClientes().subscribe( (data: any) => {
      this.TelClientes = data;
      this.loading = false;
    });
  }
  eliminar(index: number) {
    const registro = this.TelClientes[index];
    this._TelClienteService.deleteTelCliente(registro.codigoTelefono).subscribe((data) => {
        this.TelClientes.splice(index, index + 1);
    });
  }
  ngOnInit() {
  }
}

