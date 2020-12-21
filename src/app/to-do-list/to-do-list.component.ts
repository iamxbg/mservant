import { Component, OnInit,EventEmitter, Output } from '@angular/core';
import { Console } from 'console';
import { from } from 'rxjs';
import { ToDoServiceService } from '../to-do-service.service';
import { ToDoComponent } from '../to-do/to-do.component'
import { EmergencyLevel, TaskStatus } from './ToDoEnums';
import { toDo } from './toDoModel';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.less']
})
export class ToDoListComponent implements OnInit {

  //toDoList:toDo[] = new Array();

  constructor(private toDoService:ToDoServiceService) {

  }

  getActived():toDo[]{
    return this.toDoService.toDoList.filter(td=>
      td.status === TaskStatus.PROCESSING
      || td.status === TaskStatus.PAUSE
      || td.status === TaskStatus.FINISH)
  }

  getToDos():toDo[]{
    return this.toDoService.toDoList;
  }

  ngOnInit() {
      
    this.toDoService.loadAll();
  }

  isCurrentProcessing(td:toDo):boolean {
      return td.status === TaskStatus.PROCESSING;
  }

  showResultBox():boolean {
    console.log("check")
    return this.toDoService.toDoList.filter(td=>
      td.status === TaskStatus.FINISH
    ).length>0?true:false;
  }

  getFinished():toDo {
    let finished = this.toDoService.toDoList.filter(td=> td.status === TaskStatus.FINISH)
    return finished!=null?finished[0]:null;
  }

}


