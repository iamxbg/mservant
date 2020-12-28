import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ToDo } from '../todo-list/ToDo';
import { ToDoDictUtil } from '../todo-list/ToDoDictUtil';
import { ToDoEvent } from '../todo-list/ToDoEvent';
import { ToDoService } from '../todo.service';

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.less']
})
export class TodoDetailComponent implements OnInit {

  constructor(private todoService:ToDoService) { }

  @Input()
  private todo:ToDo;

  private  todoEvents:Array<ToDoEvent> = new Array();

  @Output()
  private onClose:EventEmitter<null> = new EventEmitter();

  ngOnInit() {
  
    let ted:ToDoEvent = new ToDoEvent( null,null, null,this.todo.id);

    //get all the event of tasks
    this.todoService.getEventsOfTodo(ted).subscribe({
      next:(data)=>{
        console.log("comment-size:"+data.length)
        this.todoEvents = data;
      }
    })

  }

  getTaskType():string {
    return ToDoDictUtil.getTaskTypeStr(this.todo)
  }

  getStatus():string {
    return ToDoDictUtil.getStatusStr(this.todo)
  }

  getEmergency():string {
    return ToDoDictUtil.getEmergencyStr(this.todo)
  }

  getImportance():string {
    return ToDoDictUtil.getImportanceStr(this.todo)
  }

  getEventsCount():number {
    return this.todoEvents.length;
  }


  close():void {

    this.onClose.emit()

  }

}
