import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

const END_POINT = "http://localhost:3000/todo"; 

@Injectable()
export class TodosService {
  

  constructor( public http: HttpClient) { 
    console.log('TodosService constructor');
  }


  getTodos():Observable<any>{
    let url = END_POINT;
    console.log(`TodosService getTodos $(url)`);

    return this.http.get(url);
  }
  }
