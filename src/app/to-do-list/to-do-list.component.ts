import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { ToDoComponent } from '../to-do/to-do.component'
import { toDo } from './toDoModel';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.less']
})
export class ToDoListComponent implements OnInit {

  toDoList:toDo[] = new Array();
    

  constructor() {
    this.toDoList.push({"id":1,"content":"hello","category_type":0,"emergency_level":1})
    this.toDoList.push({"id":22,"content":"world","category_type":2,"emergency_level":2})
   }

  ngOnInit() {
  }

}


