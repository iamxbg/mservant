import { Component, OnInit } from '@angular/core';
import { Config } from 'protractor';
import { RememberWordsServiceService } from './remember-words-service.service';



@Component({
  selector: 'app-remember-word',
  templateUrl: './remember-word.component.html',
  styleUrls: ['./remember-word.component.less'],
  providers:[RememberWordsServiceService]
})
export class RememberWordComponent implements OnInit {
  
  private config:any;

  constructor(private dbService:RememberWordsServiceService) {
     this.dbService = dbService;

     this.config = require("./config.json");
   }

  mode:string ='test';

  word_types:Array<string> = new Array<string>();

  ngOnInit() {

    this.config.word_types.forEach(element => {
      this.word_types.push(element)
    });

  }

  changeMode(mode:string){

    this.mode = mode;


    this.dbService.testGet("remeber_words")
  }

  getMode():string {
    return this.mode;
  }

 
}
