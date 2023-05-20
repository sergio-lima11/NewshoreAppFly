import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VuelosService {

  constructor(private http:HttpClient) { }

  getViajes(parametros:any): Observable<any>{
    const URL ='https://recruiting-api.newshore.es/api/flights/2';
    return this.http.get(URL);
  }


}
