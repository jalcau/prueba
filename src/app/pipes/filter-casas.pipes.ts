import { Pipe, PipeTransform } from '@angular/core';
import { Casa } from '../model/casa';

@Pipe({name: 'filterCasas'})
export class FilterCasas implements PipeTransform {

  transform(recetas: Casa[], searchText: string): Casa[] {  

    //si no hay recetas retornar vacio
    if (!recetas) return [];

    let casasFilterArray: Casa[] = [];

  

    //De los que quedan filtramos por texto si hay
    if (!searchText) {
      return casasFilterArray;
    } else {
      searchText = searchText.toLowerCase();
      let casa = '';
      return casasFilterArray.filter(it => {
        casa = it.nombre ;
        casa = casa.toLowerCase();
        return casa.includes(searchText);
      });
    }
  }

}