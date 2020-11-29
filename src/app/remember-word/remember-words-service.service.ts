import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import {encode} from 'js-base64'

@Injectable({
  providedIn: 'root'
})
export class RememberWordsServiceService implements OnInit{

  private httpClient:HttpClient;

  constructor(httpClient:HttpClient) {
      this.httpClient=httpClient;
   }

  ngOnInit(): void {
    
    this.httpClient.get("http://admin:123456@localhost:5984/remember_words")
    .subscribe({
      error:err=>{
        alert('fail! reason:'+err)
      },
      complete:()=>{
        alert("complete")
      },
      next:(result)=>{
        alert(result);
      }
    });

  }

  testGet(dbname:string){
    this.httpClient.get("http://localhost:5984/_all_dbs",
    { 
      headers:new HttpHeaders()
      .set("Authorization","Basic "+encode("admin:123456"))
    
    }).subscribe({
      error:err=>{
        alert('fail! reason:'+err)
      },
      complete:()=>{
        alert("complete")
      },
      next:(result)=>{
        alert(result);
      }
    });
  }

}
