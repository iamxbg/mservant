import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Category } from './model';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  json_server_base_url:string ="http://localhost:3000/"

  constructor(private http:HttpClient) { }

  testGetCategory():Observable<Array<Category>> {

      return this.http.get<Array<Category>>(this.json_server_base_url+"categoryTree")
  }

}
