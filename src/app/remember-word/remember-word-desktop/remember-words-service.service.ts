import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import {encode} from 'js-base64'
import { EnglishWord } from '../EnglishWord';

@Injectable({
  providedIn: 'root'
})
export class RememberWordsServiceService implements OnInit{

  private httpClient:HttpClient;

  constructor(httpClient:HttpClient) {
      this.httpClient=httpClient;
   }

  ngOnInit(): void {


  }





}
