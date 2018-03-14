import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {TodosService} from './providers/todo.service';
import { HttpClientModule, HttpClient, HttpHandler } from '@angular/common/http';
import { AppComponent } from './app.component';
import { InmobiliariaComponent } from './inmobiliaria/inmobiliaria.component';
import { DetalleComponent } from './inmobiliaria/detalle/detalle.component';

import {FilterCasas} from './pipes/filter-casas.pipes';
@NgModule({
  declarations: [
    AppComponent,
    FilterCasas,
    InmobiliariaComponent,
    DetalleComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [HttpClient,TodosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
