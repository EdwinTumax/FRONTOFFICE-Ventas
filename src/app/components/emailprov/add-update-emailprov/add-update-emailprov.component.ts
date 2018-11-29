import { Component, OnInit } from '@angular/core';
import { EmailProveedor } from '../../interfaces/emailProveedor.interface';
import { NgForm } from '@angular/forms';
import { EmailProveedorService } from './../../../services/email-proveedor.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-add-update-emailprov',
  templateUrl: './add-update-emailprov.component.html',
  styles: []
})
export class AddUpdateEmailprovComponent implements OnInit {

  emailProveedor: EmailProveedor = {
    codigoEmail: 0,
    descripcion: '',
    email: '',
    codigoProveedor: 0
  };
  nuevo = false;
  constructor(private _activatedRoute: ActivatedRoute, private _emailprovService: EmailProveedorService, private _router: Router) {
    this._activatedRoute.params.subscribe(params => {
      if ( params['id'] > 0) {
        this._emailprovService.getEmailProveedor(params['id']).subscribe((data: any) => {
          this.emailProveedor = data;
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
      this._emailprovService.addEmailProveedor(this.emailProveedor).subscribe(data => {
        console.log(data);
        this._router.navigate(['/emailprov']);
      });
    } else {
      this._emailprovService.updateEmailProveedor(this.emailProveedor).subscribe(data => {
        console.log(data);
        this._router.navigate(['/emailprov']);
      });
    }
  }

}
