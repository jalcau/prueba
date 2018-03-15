import { Pipe, PipeTransform } from '@angular/core';
import { Casa } from '../model/casa';

@Pipe({name: 'filterCasa'})
export class FilterCasas implements PipeTransform {

  transform(items: Casa[], searchText: string, modo: number = 2): Casa[] {  

    //si no hay recetas retornar vacio
    if (!items) return [];
    console.log('FilterCasa: \nmodo=%s \nsearchText=%s',modo, searchText);

    let casasResultado= items.slice();

  //Filtro Modo: Alguiler(0), Venta(1) o Todos(2)
  console.log("antes del filtro");
  if (modo == 0){
    casasResultado=casasResultado.filter( c=>{
      return (c.alquiler);
    });
  }
  console.log("despues del filtro");

  if(modo == 1){
    casasResultado=casasResultado.filter(c=>{
      return (!c.alquiler);
    });
  }
  



    //De los que quedan filtramos por texto si hay
    if (!searchText) {
      return casasResultado;
    } else {
      searchText = searchText.toLowerCase();
      let busqueda = '';
      return casasResultado.filter(it => {
        busqueda = it.nombre + " " + it.direccion;
        busqueda = busqueda.toLowerCase();
        return busqueda.includes(searchText);
      });
    }
  }

}


