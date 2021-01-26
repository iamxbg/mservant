import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TaskStatus, TaskType } from '../todo-list/ToDoDictUtil';
import { ToDo } from '../todo-list/ToDo';
import { ToDoService } from '../../todo.service';

@Component({
  selector: 'app-todo-result',
  templateUrl: './todo-result.component.html',
  styleUrls: ['./todo-result.component.less']
})
export class ToDoResultComponent implements OnInit {

  @Input('toDo')
  toDo:ToDo;

  @Output()
  private onCancelFinishState:EventEmitter<ToDo> = new EventEmitter();

  private resultTag:string

  private showScoreBar = false;

  private comment:string;

  constructor(private toDoService:ToDoService) { }

  ngOnInit() {
  }

  isMilestoneBarShow():boolean{
    if(this.toDo.taskType === TaskType.milestone)
      return true;
    else 
      return false;
  }

 
  setResult():void {
    
    if(this.resultTag!=null &&　parseInt(this.resultTag) == TaskStatus.done){

      this.showScoreBar = true;
    }else{

      this.showScoreBar = false;
    }
  }




  /**
   * 提交修改
   */
  submit():void {
      if(this.comment==null || this.comment.trim() ==''){
        alert("请填写备注!")
        return;
      }

      if(confirm("确认提交?!")){

        this.toDoService.setStatus(this.toDo,parseInt(this.resultTag),this.comment)
        .subscribe({
          next:(data)=>{
            this.onCancelFinishState.emit(this.toDo)
          }
        })
      }
      

  }


  cancel():void {
    console.log("cancel")
    //this.toDo.status=this.toDo.oldStatus
    this.onCancelFinishState.emit()
  }




}
