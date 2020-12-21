import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TaskType } from '../to-do-list/ToDoEnums';
import { toDo } from '../to-do-list/toDoModel';
import { ToDoServiceService } from '../to-do-service.service';

@Component({
  selector: 'app-to-do-result',
  templateUrl: './to-do-result.component.html',
  styleUrls: ['./to-do-result.component.less']
})
export class ToDoResultComponent implements OnInit {

  @Input('toDo')
  toDo:toDo;

  constructor(private toDoService:ToDoServiceService) { }

  ngOnInit() {
  }

  isMilestoneBarShow():boolean{
    if(this.toDo.task_type === TaskType.MILESTONE)
      return true;
    else 
      return false;
  }

  shout(){
    alert("对这种事件进行记录!")
  }

  /**
   * 提交修改
   */
  submit():void {
      alert("需要修改data.json的数据")
      this.toDoService.remove(this.toDo).subscribe({
        next:()=>{
          alert("修改成功！")
          let idx = this.toDoService.toDoList.findIndex(t=>t.id===this.toDo.id);
          this.toDoService.toDoList.splice(idx,1);
        }
      })

  }





}
