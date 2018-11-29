import { Component, OnInit } from '@angular/core';
import { Producto } from '../../interfaces/producto.interface';
import {NgForm} from '@angular/forms';
import {ProductoService} from './../../../services/producto.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Categoria } from '../../interfaces/categoria.interface';
import { CategoriaService } from '../../../services/categoria.service';
@Component({
  selector: 'app-add-update-producto',
  templateUrl: './add-update-producto.component.html',
  styles: []
})
export class AddUpdateProductoComponent implements OnInit {
  categorias: any[] = [];
  producto: Producto = {
    codigoProducto: 0,
    descripcion: '',
    categoria: { codigoCategoria: 0, descripcion : ''},
    // tipoempaque:{ codigotipoempaque: 0, descripcion : '' },
    imagen: ''
  };
  nuevo = false;
  constructor(private _activatedRoute: ActivatedRoute,
     private _productoService: ProductoService,
      private _categoriaService: CategoriaService,
       private _router: Router ) {
    this._activatedRoute.params.subscribe(params => {
      if ( params['id'] > 0) {
        this._productoService.getProducto(params['id']).subscribe((data: any) => {
          this.producto = data;
        });
      } else {
        this.nuevo = true;
      }
    });
  }

  obtenerCategorias() {
    this._categoriaService.getCategorias().subscribe( (data: any) => {
      this.categorias = data;
    });
  }

  async categoriaChange(event: any): Promise<void> {
    console.log(event);
  }

  ngOnInit() {
    this.obtenerCategorias();
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
