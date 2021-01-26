import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'
import { Category } from '../todo/todo-list/Category';

@Injectable({
  providedIn: 'root'
})
export class DictService {

  private http:HttpClient;
  constructor(http : HttpClient) { 
    this.http = http;
  }


  getCategorys():Observable<Array<Category>>{
    return this.http.get<Array<Category>>('http://localhost:3000/categories');
  }
}
