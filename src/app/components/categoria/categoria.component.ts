import { Component, OnInit } from '@angular/core';
import { CategoriaService } from './../../services/categoria.service';
import { Categoria } from './../interfaces/categoria.interface';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styles: []
})
export class CategoriaComponent implements OnInit {
  categorias: any[] = [];
  constructor(private _categoriaService: CategoriaService) {
    this._categoriaService.getCategoria().subscribe( (data: any) => {
      this.categorias = data;
    });
  }

  ngOnInit() {
  }

}
