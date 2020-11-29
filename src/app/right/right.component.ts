import { Component, Inject, Input, OnInit } from '@angular/core';
import { Word } from '../model/word';
import { HttpServerTestService } from '../testing/http-server-test.service';

@Component({
  selector: 'app-right',
  templateUrl: './right.component.html',
  styleUrls: ['./right.component.less'],
  providers:[HttpServerTestService]
})
export class RightComponent implements OnInit {

  
  //httpTest:HttpServerTestService = new HttpServerTestService();

 //@Input("test_word")
 //public test_word:string ='';

  word:Word;

  content:string;
  desc:string;

  constructor(private testService:HttpServerTestService) { }

  ngOnInit() {
  }


  addWord():void{

    alert("add word !")

    var w:Word = new Word();
      w.content = this.content;
      w.desc = this.desc;

    var obs = this.testService.add(w);

    obs.subscribe({
      error:err=>{
        console.error("ERROR:"+err)
      },
      next:d=>{
        console.log("data:"+d)
      }

    });


  }

  testGet():void{

    alert("test get ! ");

    var promise  = this.testService.testGet();
    
    promise.subscribe({
      error:err=>{
        console.error("run error:"+err)
      },
      complete:()=>{
        console.log("DONE!")
      },
      next:d=>{
        alert("<BODY>:"+ d[d.length-1].desc)
      }

    });
  }

}
