import { Component, EventEmitter, OnInit } from '@angular/core';
import { ToDo } from '../todo-list/ToDo';
import { ToDoService } from '../todo.service';

@Component({
  selector: 'app-todo-manage',
  templateUrl: './todo-manage.component.html',
  styleUrls: ['./todo-manage.component.less']
})
export class TodoManageComponent implements OnInit {

  private isCreateBoxShow:boolean = false

  constructor(private todoService:ToDoService) { }

  private todoList:Array<ToDo>

  private loadAll():void {
    this.todoService.selectAll()
    .subscribe({
      next:(data)=>{
        this.todoList = data
      }
    })
  }

  ngOnInit() {

    this.loadAll();
    
  }

  createNew():void {
    this.isCreateBoxShow = true;
  }

  closeCreateBox(event:ToDo):void {
    if(event!=null){
      alert("创建成功！")
      this.loadAll()
    }
    this.isCreateBoxShow = false;
  }

  delete(event:ToDo):void {
    this.loadAll();
  }

}
