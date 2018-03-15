import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import {TodosService} from '../providers/todo.service'
import {Casa} from '../model/casa';
import { Servicio } from '../model/servicio';
@Component({
  selector: 'app-inmobiliaria',
  templateUrl: './inmobiliaria.component.html',
  styleUrls: ['./inmobiliaria.component.scss']
})
export class InmobiliariaComponent implements OnInit {
  searchText:string;
  todos : Casa[];
  nombre:string;
  casaSelec: Casa;
  constructor( public todoService:TodosService ) {
    console.log('TodosComponent constructor');
    this.todos = [];
}
  ngOnInit() {
    this.cargarTareas();
    this.casaSelec = this.todos[0];
  }

  cargarTareas(){
    console.log('TodosComponent cargarTareas');
    this.todos = [];
    this.todoService.getTodos().subscribe(
      resultado => {
        console.debug('peticion correcta %o', resultado);
        this.mapeo(resultado);
      },
      error=>{
        console.warn('peticion incorrecta %o', error);
      }
    );//subscribe
  }
  mapeo( result : any ){

    let todo:Casa;

    //let i=0;
    result.forEach(el => {
      
        todo = new Casa( el.nombre);
        todo.precio = el.precio;
        todo.alquiler = el.alquiler;
        todo.habitaciones = el.habitaciones;
        todo.foto=el.foto;
        todo.direccion=el.direccion;
        todo.servicios=el.servicios;
        this.todos.push(todo);
      });

        
      // todo.servicios=el.servicios;
       // todo.servicios[0].disponible=el.servicios.disponible;
        
  

  }

  seleccionarCasa( casa:Casa){
    console.log('InmobiliriaComponent seleccionarCasa %o', casa);
    this.casaSelec =casa;

  }

}



