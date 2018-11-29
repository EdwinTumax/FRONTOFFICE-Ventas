import { Component, OnInit } from '@angular/core';
import { EmailProveedorService } from '../../services/email-proveedor.service';
import { EmailProveedor } from './../interfaces/emailProveedor.interface';
@Component({
  selector: 'app-emailprov',
  templateUrl: './emailprov.component.html',
  styles: []
})
export class EmailprovComponent implements OnInit {

  emailProveedores: any[] = [];
  loading = false;
  constructor(private _emailProveedorService: EmailProveedorService) {
    this.loading = true;
    this._emailProveedorService.getEmailProveedores().subscribe( (data: any) => {
      this.emailProveedores = data;
      this.loading = false;
    });
  }
  eliminar(index: number) {
    const registro = this.emailProveedores[index];
    this._emailProveedorService.deleteEmailProveedor(registro.codigoEmailProveedor).subscribe((data) => {
        this.emailProveedores.splice(index, index + 1);
    });
  }
  ngOnInit() {
  }
}
