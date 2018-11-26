import { Injectable } from '@angular/core';
import { URL_API } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CategoriaService {
  constructor(private _httpClient: HttpClient) { }
  getCategoria() {
    return this._httpClient.get(`${URL_API}categoria`);
  }
}
