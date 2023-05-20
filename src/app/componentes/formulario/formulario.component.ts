import { Component, EventEmitter, Output } from '@angular/core';
import{FormBuilder,FormGroup,Validators} from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  @Output() seleccion = new EventEmitter<any>
  Origin: any;
  Destini: any;
  Price: any;

  forma!:FormGroup;
constructor(private fb:FormBuilder){
  this.crearFormulario();

}

get origenNoValido(){
  return this.forma.get('origen')?.invalid && this.forma.get('origen')?.touched;
}

get destinoNoValido(){
  return this.forma.get('destino')?.invalid && this.forma.get('destino')?.touched;
}
crearFormulario(){
  this.forma = this.fb.group({
    origen:['',[Validators.required,Validators.maxLength(3)]],
    destino:['', [Validators.required,Validators.maxLength(3)]]

    })
}

Moneda(){
  const parametros1 = {
    precio:this.Price
  }
  this.seleccion.emit(parametros1)
}
ObtenerRuta(){
  console.log(this.forma);
  const parametros = {
    origen: this.Origin,
    destino:this.Destini
  }

  this.seleccion.emit(parametros)
  
}
Calcular(){
  const parametros = {
    origen: this.Origin,
    destino: this.Destini
  }
  this.seleccion.emit(parametros)
}
limpiar(){
  this.forma.reset();
  
}

}
