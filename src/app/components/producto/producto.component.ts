import { Component, OnInit } from '@angular/core';
import {Producto} from './../interfaces/producto.interface';
import {ProductoService} from './../../services/producto.service';
@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styles: []
})
export class ProductoComponent implements OnInit {

  constructor(private _productoService: ProductoService) { }

  ngOnInit() {
  }

}
