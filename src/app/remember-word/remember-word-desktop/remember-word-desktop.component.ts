import { Component, OnInit } from '@angular/core';
import { Config } from 'protractor';
import { RememberWordsServiceService } from './remember-words-service.service';



@Component({
  selector: 'app-remember-word',
  templateUrl: './remember-word-desktop.component.html',
  styleUrls: ['./remember-word-desktop.component.less'],
  providers:[RememberWordsServiceService]
})
export class RememberWordDesktopComponent implements OnInit {
  
  mode:string ="create"


  constructor(private dbService:RememberWordsServiceService) {
     this.dbService = dbService;


   }


  ngOnInit() {



  }

  new(){
     this.changeModeTo('create')
  }

  remember(){
    alert('remember')
  }

  changeModeTo(mode:string) {
    this.mode = mode
  }


}
