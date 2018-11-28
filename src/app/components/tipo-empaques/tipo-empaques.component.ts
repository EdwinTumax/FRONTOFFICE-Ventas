import { Component, OnInit } from '@angular/core';
import { TipoEmpaqueService } from 'src/app/services/tipoEmpaque.service';

@Component({
  selector: 'app-tipo-empaques',
  templateUrl: './tipo-empaques.component.html',
  styleUrls: []
})
export class TipoEmpaquesComponent implements OnInit {
  tipoEmpaques: any[] = [];
  loading = false;
  constructor(private _TipoEmpaqueService: TipoEmpaqueService) {
    this.loading = true;
    this._TipoEmpaqueService.getTipoEmpaques().subscribe( (data: any) => {
      this.tipoEmpaques = data;
      this.loading = false;
    })
  }
  // eliminar(index: number){
  //   const registro = this.tipoEmpaques[index];
  //   this._TipoEmpaqueService.
  // }

  ngOnInit() {
  }

}
