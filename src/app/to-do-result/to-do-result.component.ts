import { Component, Input, OnInit } from '@angular/core';
import { ComplexType } from '../to-do-list/ToDoEnums';
import { toDo } from '../to-do-list/toDoModel';

@Component({
  selector: 'app-to-do-result',
  templateUrl: './to-do-result.component.html',
  styleUrls: ['./to-do-result.component.less']
})
export class ToDoResultComponent implements OnInit {


  @Input('toDo')
  toDo:toDo;


  constructor() { }

  ngOnInit() {
  }

  isMilestoneBarShow():boolean{
    if(this.toDo.complex_type == ComplexType.Steps)
      return true;
    else 
      return false;
  }



  shout(){
    alert("change!")
  }

}
