import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { URL_API } from 'src/environments/environment';
import { TipoRegistro } from '../components/interfaces/tipo-registro.interface';

@Injectable({
    providedIn: 'root'
})

export class TipoRegistroService {
    constructor(private _httpClient: HttpClient){ }

    getTipoRegistro(){
        return this._httpClient.get(`${URL_API}tipo-registro`, {headers: this.getHeaders()});
    }

    getTipoRegistros(id: number){
        return this._httpClient.get(`${URL_API}tipo-registro/${id}`, {headers: this.getHeaders()});
    }

    addTipoRegistro(TipoRegistro: TipoRegistro){
        const body = JSON.stringify(TipoRegistro);
    }

    getHeaders() {
        const headers = new HttpHeaders()
          .set('Content-Type', 'Application/json')
          .set('Authorization', `Bearer ${window.sessionStorage.getItem('access_token')}`);
          return headers;
      }
}