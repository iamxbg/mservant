import { Component, Input, OnInit } from '@angular/core';
import { DictService } from '../services/dict.service';
import { ToDoDictUtil } from '../todo-list/ToDoDictUtil';
import { ToDoEvent } from '../todo-list/ToDoEvent';
import { ToDoEventTime } from '../todo-list/ToDoEventTime';
import { ToDoEventTimeGroup } from '../todo-list/ToDoEventTimeGroup';

@Component({
  selector: 'app-todo-event-time',
  templateUrl: './todo-event-time.component.html',
  styleUrls: ['./todo-event-time.component.less']
})
export class TodoEventTimeComponent implements OnInit {

  @Input()
  private etg:ToDoEventTimeGroup;

  constructor() { }

  ngOnInit() {
  

  }


  getTaskStatus(et:ToDoEventTime):string {
    return ToDoDictUtil.getStatusStrByCode(et.startEvent.newStatus)
  }

}
