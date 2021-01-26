import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ToDo } from '../todo-list/ToDo';
import { ToDoDictUtil } from '../todo-list/ToDoDictUtil';
import { ToDoEvent } from '../todo-list/ToDoEvent';
import { ToDoEventTime } from '../todo-list/ToDoEventTime';
import { ToDoEventTimeGroup } from '../todo-list/ToDoEventTimeGroup';
import { ToDoService } from '../../todo.service';

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.less']
})
export class TodoDetailComponent implements OnInit {

  constructor(private todoService:ToDoService) { }

  @Input()
  private todo:ToDo;

  //private  todoEvents:Array<ToDoEvent> = new Array();

  @Input()
  private etGroups:Array<ToDoEventTimeGroup>;

  @Output()
  private onClose:EventEmitter<null> = new EventEmitter();

  ngOnInit() {
  
    let ted:ToDoEvent = new ToDoEvent( null,null, null,this.todo.id);

    //get all the event of tasks
    this.todoService.getEventsOfTodoGroupByDate(ted).subscribe({
      next:(data)=>{
        console.log("comment-size:"+data.length)
        this.etGroups = data;
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
    return this.etGroups!=null?this.etGroups.length:0;
  }


  close():void {

    this.onClose.emit()

  }

}
