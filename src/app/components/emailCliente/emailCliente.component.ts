import { Component, OnInit } from '@angular/core';
import { EmailClienteService } from './../../services/emailCliente.service';
import { EmailCliente } from './../interfaces/emailCliente.interface';

@Component({
    selector: 'app-emailCliente',
    templateUrl: './emailCliente.component.html',
    styles: []
})

export class EmailClienteComponent implements OnInit {
  EmailClientes: any[] = [];
  loading = false;
  constructor(private _EmailClienteService: EmailClienteService) {
    this.loading = true;
    this._EmailClienteService.getEmailClientes().subscribe( (data: any) => {
      this.EmailClientes = data;
      this.loading = false;
    });
  }
  eliminar(index: number) {
    const registro = this.EmailClientes[index];
    this._EmailClienteService.deleteEmailCliente(registro.codigoEmail).subscribe((data) => {
        this.EmailClientes.splice(index, index + 1);
    });
  }
  ngOnInit() {
  }
}
