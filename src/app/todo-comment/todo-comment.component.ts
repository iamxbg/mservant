import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ToDo } from '../todo-list/ToDo';
import { TaskStatus } from '../todo-list/ToDoDictUtil';
import { ToDoEvent } from '../todo-list/ToDoEvent';
import { ToDoService } from '../todo.service';

@Component({
  selector: 'app-todo-comment',
  templateUrl: './todo-comment.component.html',
  styleUrls: ['./todo-comment.component.less']
})
export class ToDoCommentComponent implements OnInit {

  constructor() { }

  @Output()
  private onClose:EventEmitter<null> = new EventEmitter();

  @Output()
  private onCommit:EventEmitter<string> = new EventEmitter();

  @Input()
  private todo:ToDo;


  private comment:string;

  ngOnInit() {
  }


  close():void{
    this.onClose.emit();
  }

  commit():void {
    
    //TODO 对COmment进行检查
    this.onCommit.emit(this.comment);
  }

}
