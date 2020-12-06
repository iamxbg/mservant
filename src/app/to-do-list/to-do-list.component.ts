import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { ToDoComponent } from '../to-do/to-do.component'
import { Category, ComplexType, EmergencyLevel } from './ToDoEnums';
import { toDo } from './toDoModel';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.less']
})
export class ToDoListComponent implements OnInit {

  toDoList:toDo[] = new Array();
    

  constructor() {
    this.toDoList.push(new toDo(1,"逃出生天",Category.Task,EmergencyLevel.Low))
    this.toDoList.push(new toDo(2,"学习总结",Category.Task,EmergencyLevel.Normal,ComplexType.Steps))
    this.toDoList.push(new toDo(3,"换高薪工作",Category.Job,EmergencyLevel.High,ComplexType.Block))
   }

  ngOnInit() {
  }

}


