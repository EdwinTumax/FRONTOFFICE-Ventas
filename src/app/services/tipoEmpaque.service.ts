import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { URL_API } from "src/environments/environment";

@Injectable({
     providedIn: 'root'
})

export class TipoEmpaqueService{
    constructor(private _httpClient : HttpClient) { }

    getTipoEmpaque(){
        return this._httpClient.get(`${URL_API}tipoEmpaque`, {headers: this.getHeaders()});
    }

    getHeaders() {
        const headers = new HttpHeaders()
          .set('Content-Type', 'Application/json')
          .set('Authorization', `Bearer ${window.sessionStorage.getItem('access_token')}`);
          return headers;
      }
}