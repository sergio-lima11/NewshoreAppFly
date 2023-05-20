import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import {FormsModule} from '@angular/forms';
import{HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormularioComponent } from './componentes/formulario/formulario.component';
import { ListadoVuelosComponent } from './componentes/listado-vuelos/listado-vuelos.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { CalcularComponent } from './componentes/calcular/calcular.component';
import { ConvertidorComponent } from './componentes/convertidor/convertidor.component';

@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    ListadoVuelosComponent,
    NavbarComponent,
    CalcularComponent,
    ConvertidorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
