import { Component, OnInit } from '@angular/core';
import { DirClienteService } from './../../services/dirCliente.service';
import { DirCliente } from './../interfaces/dirCliente.interface';

@Component({
    selector: 'app-dirCliente',
    templateUrl: './dirCliente.component.html',
    styles: []
})

export class DirClienteComponent implements OnInit {
  DirClientes: any[] = [];
  loading = false;
  constructor(private _DirClienteService: DirClienteService) {
    this.loading = true;
    this._DirClienteService.getDirClientes().subscribe( (data: any) => {
      this.DirClientes = data;
      this.loading = false;
    });
  }
  eliminar(index: number) {
    const registro = this.DirClientes[index];
    this._DirClienteService.deleteDirCliente(registro.codigoDireccion).subscribe((data) => {
        this.DirClientes.splice(index, index + 1);
    });
  }
  ngOnInit() {
  }
}
