import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CalcularService {

  constructor(private http:HttpClient) { }
  getCalcular(parametros:any): Observable<any>{
    const URL ='https://recruiting-api.newshore.es/api/flights/1';
    return this.http.get(URL);
  }
}
