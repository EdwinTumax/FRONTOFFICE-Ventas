import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ClienteService } from './../../../services/cliente.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Cliente } from '../../interfaces/cliente.interface';
@Component({
  selector: 'app-add-update-cliente',
  templateUrl: './add-update-cliente.component.html',
  styles: []
})
export class AddUpdateClienteComponent implements OnInit {
  cliente: Cliente = {
    codigoCliente: 0,
    dpi: 0,
    nit: 0,
    nombre: ''
  };
  nuevo = false;
  constructor(private _activatedRoute: ActivatedRoute, private _clienteService: ClienteService, private _router: Router) {
    this._activatedRoute.params.subscribe(params => {
      if ( params['id'] > 0) {
        this._clienteService.getCliente(params['id']).subscribe((data: any) => {
          this.cliente = data;
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
      this._clienteService.addCliente(this.cliente).subscribe(data => {
        console.log(data);
        this._router.navigate(['/cliente']);
      });
    } else {
      this._clienteService.updateCliente(this.cliente).subscribe(data => {
        console.log(data);
        this._router.navigate(['/cliente']);
      });
    }
  }
}