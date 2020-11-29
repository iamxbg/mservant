import { Injectable,Inject,InjectionToken } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { Observable } from 'rxjs'
import { Word } from '../model/word';

@Injectable()
export class HttpServerTestService {

  constructor(private http:HttpClient) { }

  BASE_URL:string ="http://localhost:3500/comments";

  add(word:Word):Observable<any> {
    return this.http.post(this.BASE_URL+"",word);
  }

  testGet():Observable<any> {
    return this.http.get("http://localhost:3500/comments");
  }
  
}
