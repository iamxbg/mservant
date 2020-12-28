import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ToDo } from '../todo-list/ToDo';
import { ToDoService } from '../todo.service';

@Component({
  selector: 'app-todo-create',
  templateUrl: './todo-create.component.html',
  styleUrls: ['./todo-create.component.less']
})
export class TodoCreateComponent implements OnInit {

  @Output()
  private onCloseCreateBox:EventEmitter<null> = new EventEmitter();
  
  

  @Output()
  private onClose:EventEmitter<ToDo> = new EventEmitter();

  

  constructor(private todoService:ToDoService) { }

  

  ngOnInit() {
  }


  close():void {
    this.onCloseCreateBox.emit()
  }

  cancel():void {
    this.onClose.emit();
  }
  
  private taskTypeStr:string;
  private name:string;
  private desc:string;
  private categoryStr:string;
  private emergencyStr:string;
  private importanceStr:string;
  private rewardScoreStr:string;

  commit():void {
    //验证输入值

    if(this.name == null || this.name.trim() == "" ){
      alert("请填写任务名称！")
      return
    }
    if(this.categoryStr == null){
      alert("请选择任务类别")
      return
    }
    if(this.emergencyStr == null){
      alert("请选择紧急度")
      return
    }
    if(this.importanceStr == null){
      alert("请选择重要性")
      return 
    }
    if(this.rewardScoreStr == null )
    {
      alert("请设置任务分数");
      return
    }
    

    let todo:ToDo = {
      "id": null,
      "taskType":parseInt(this.taskTypeStr),
      "name":this.name,
      "desc":this.desc,
      "category":parseInt(this.categoryStr),
      "emergency":parseInt(this.emergencyStr),
      "importance":parseInt(this.importanceStr),
      "createTime":new Date(),
      "planStartTime":null,
      "planMustStartTime":null,
      "planMustEndTime":null,
      "planConsumeMins":null,
      "actualConsumeMins":null,
      "startTime":null,
      "endTime":null,
      "failReason":null,
      "score":null,
      "rewardScore":parseInt(this.rewardScoreStr),
      "status":0,
      "oldStatus":0
    }

      

    this.todoService.add(todo).subscribe({
      next:(data)=>{
        this.onClose.emit(data);
      },
      error:(cause)=>{
        alert("错误！")
        console.log(cause)
      }
    })
  }


}
