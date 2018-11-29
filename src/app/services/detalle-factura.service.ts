import { Injectable } from '@angular/core';
import { URL_API } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DetalleFactura } from '../components/interfaces/detalle-factura.interface';

@Injectable({
  providedIn: 'root'
})
export class DetalleFacturaService {
  constructor(private _httpClient: HttpClient) { }

  getHeaders() {
    const headers = new HttpHeaders()
      .set('Content-Type', 'Application/json')
      .set('Authorization', `Bearer ${window.sessionStorage.getItem('access_token')}`);
      return headers;
  }

  getDetalleFacturas() {
    return this._httpClient.get(`${URL_API}detalle-factura`, {headers: this.getHeaders()});
  }

  getCategoria(id: number) {
    return this._httpClient.get(`${URL_API}detalle-factura/${id}`, {headers: this.getHeaders()});
  }
}
