import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MonedaService {

  constructor(private http:HttpClient) { }
  getMoneda(parametros:any): Observable<any>{
    const URL ='https://recruiting-api.newshore.es/api/flights/0';
    return this.http.get(URL);
}
}
