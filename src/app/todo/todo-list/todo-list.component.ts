import { Component, OnInit,EventEmitter, Output } from '@angular/core';
import { Console } from 'console';
import { from } from 'rxjs';
import { ToDoService } from '../../todo.service';
import { ToDoRecordComponent } from '../todo-record/todo-record.component'
import { Emergency, TaskStatus } from './ToDoDictUtil';
import { ToDo } from './ToDo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.less']
})
export class ToDoListComponent implements OnInit {


  private isResultBoxShow:boolean = false;
  private isDetailBoxShow:boolean = false;
  private isCommentBoxShow:boolean = false;

  private currentTodo:ToDo;
  
  constructor(private toDoService:ToDoService) {

  }

  getActived():ToDo[]{
    return this.toDoService.toDoList.filter(td=>
      td.status === TaskStatus.processing
      || td.status === TaskStatus.paused)
  }

  getToDos():ToDo[]{
    return this.toDoService.toDoList;
  }

  ngOnInit() {
      
    this.toDoService.loadAll();
  }

  isCurrentProcessing(td:ToDo):boolean {
      return td.status === TaskStatus.processing;
  }

  setFinishState(event:ToDo):void {
    
    this.isResultBoxShow = true;

    this.currentTodo = event;

  }

  cancelFinishState(event:ToDo):void {
    if(event!=null){
      alert("任务结束!")
      this.toDoService.loadAll();
    }
    this.isResultBoxShow = false;
    this.currentTodo = null;
  }

  showDetail(event:ToDo):void {
    this.currentTodo = event;
    this.isDetailBoxShow = true;
  }

  cancelShowDetail():void {
    this.currentTodo = null;
    this.isDetailBoxShow = false;
  }

  showComment(event:ToDo):void {
    this.currentTodo = event;
    this.isCommentBoxShow = true;
  }  

  closeCommentBox():void {
    this.currentTodo = null
    this.isCommentBoxShow = false;
  }


  invokePauseTodo(event:string):void {

    this.toDoService.setStatus(this.currentTodo,TaskStatus.paused,event)
    .subscribe({
      next:(data)=>{
        this.currentTodo.status = TaskStatus.paused
        window.clearInterval(this.currentTodo['timer'])
        this.closeCommentBox();

        
      },
      error:(cause)=>{
        alert("提交失败!")
        console.log(cause)
      }
    })

   
    
  }



}


