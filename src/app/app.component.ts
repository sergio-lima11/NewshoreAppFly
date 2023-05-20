import { Component } from '@angular/core';
import {VuelosService} from './services/vuelos.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  listVuelos: any[] = [];
  listMoneda: any[] = [];
  listViajes: any[] = [];

  constructor(private _vuelosService: VuelosService){

  }
  
  

 ObtenerRuta(parametros:any): void{
  console.log('soy el padre');
  console.log(parametros);

  this._vuelosService.getViajes(parametros).subscribe(data => {
    console.log(data);
    this.listVuelos = data;
  },error =>{
    console.log(error);
  })
 }

 

 
}
