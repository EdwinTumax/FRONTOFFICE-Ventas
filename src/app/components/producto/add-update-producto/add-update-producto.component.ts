import { Component, OnInit } from '@angular/core';
import { Producto } from '../../interfaces/producto.interface';
import {NgForm} from '@angular/forms';
import {ProductoService} from './../../../services/producto.service';
import { Router, ActivatedRoute } from '@angular/router';
// import { Categoria } from '../../interfaces/categoria.interface';
// import { ProductoService } from '../../../services/producto.service';
@Component({
  selector: 'app-add-update-producto',
  templateUrl: './add-update-producto.component.html',
  styles: []
})
export class AddUpdateProductoComponent implements OnInit {
  // categoria: Categoria = {
  //   codigoCategoria: 0,
  //   descripcion: ''
  // };
  producto: Producto = {
    codigoProducto: 0,
    descripcion: '',
    // codigoCategoria:,
    // codigoTipoEmpaque: 0,
    imagen: ''
  };
  nuevo = false;
  constructor(private _activatedRoute: ActivatedRoute, private _productoService: ProductoService, private _router: Router) {
    // this._activatedRoute.params.subscribe(params => {
    //   if ( params['id'] > 0) {
    //     this._productoService.getProducto(params['id']).subscribe((data: any) => {
    //       this.producto = data;
    //     });
    //   } else {
    //     this.nuevo = true;
    //   }
    // });
  }
  ngOnInit() {
  }
  guardar() {
    if ( this.nuevo ) {
      this._productoService.addProducto(this.producto).subscribe(data => {
        console.log(data);
        this._router.navigate(['/producto']);
      });
    } else {
      this._productoService.updateProducto(this.producto).subscribe(data => {
        console.log(data);
        this._router.navigate(['/producto']);
      });
    }
  }
}
