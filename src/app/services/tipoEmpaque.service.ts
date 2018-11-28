import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { URL_API } from "src/environments/environment";
import { tipoEmpaque } from "../components/interfaces/tipoEmpaque.interface";

@Injectable({
     providedIn: 'root'
})

export class TipoEmpaqueService{
    constructor(private _httpClient : HttpClient) { }

    getTipoEmpaques(){
        return this._httpClient.get(`${URL_API}tipoEmpaque`, {headers: this.getHeaders()});
    }

    getTipoEmpaque(id: Number){
        return this._httpClient.get(`${URL_API}tipoEmpaque/${id}` , {headers: this.getHeaders()});
    }

    addTipoEmpaque(tipoEmpaque: tipoEmpaque){
        const body = JSON.stringify(tipoEmpaque);
        return this._httpClient.post(`${URL_API}tipoEmpaque/`, body, {headers: this.getHeaders()});
    }

    updateTipoEmpaque(tipoEmpaque: tipoEmpaque){
        const body = JSON.stringify(tipoEmpaque);
        return this._httpClient.put(`${URL_API}`)
    }
    

    getHeaders() {
        const headers = new HttpHeaders()
          .set('Content-Type', 'Application/json')
          .set('Authorization', `Bearer ${window.sessionStorage.getItem('access_token')}`);
          return headers;
      }
}