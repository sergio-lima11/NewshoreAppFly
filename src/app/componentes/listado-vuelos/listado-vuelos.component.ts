import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-listado-vuelos',
  templateUrl: './listado-vuelos.component.html',
  styleUrls: ['./listado-vuelos.component.css']
})
export class ListadoVuelosComponent {
  @Input() listVuelos: any;

  constructor(){}
  


}


