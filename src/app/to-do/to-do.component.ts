import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';

import {  EmergencyLevel, TaskStatus, TaskType } from '../to-do-list/ToDoEnums';
import { toDo } from '../to-do-list/toDoModel';
import { ToDoServiceService } from '../to-do-service.service';

@Component({
  selector: '[app-to-do]',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.less']
})
export class ToDoComponent implements OnInit {



  @Input()
  index:number;

  @Input()
  toDo:toDo;


  constructor(private toDoService:ToDoServiceService) {

   }

  ngOnInit() {

  }

  /**
   * 获取紧急等级颜色
   */
  getEmergencyLevelColor(): string {
      switch(this.toDo.emergency_level ){
        case EmergencyLevel.HIGH:
        return "red";
        case EmergencyLevel.MIDDLE:
          return 'skyblue';
        case EmergencyLevel.LOW:
          return  'green';
        default:
          return 'black';
      }
  }

  /**
   * 获取任务类别
   */
  getTaskType():string {

      switch(this.toDo.task_type){
        case TaskType.BLOCK:
          return "连续";
        case TaskType.SLIP:
          return "简单";
        case TaskType.MILESTONE:
          return "步骤";
      }
  }

  /**
   *  获取状态
   */
  getStatus():string {

      switch(this.toDo.status){
         case TaskStatus.UNSTATED:
          return "未开始";
         case TaskStatus.WAITING:
          return '等待';
         case TaskStatus.OUTDATED:
          return '过期';
         case TaskStatus.FAIL:
          return '失败';
         case TaskStatus.FINISH:
          return "结束,=>处理";
         case TaskStatus.COMPLETE:
          return '完成';
         case TaskStatus.PAUSE:
          return '暂停';
         case TaskStatus.PROCESSING:
          return '进行中';
         case TaskStatus.TERMINATED:
          return '终止';

      }
  }

  /**
   * 是否显示开始按钮
   */
  isStartBtnShow():boolean {
    if(this.toDo.status === TaskStatus.WAITING) return true;
    else return false;
  }

  /**
   * 是否显示结束按钮
   */
  isFinishBtnShow():boolean {
    if(this.toDo.status ==TaskStatus.PROCESSING || this.toDo.status == TaskStatus.PAUSE)
    return true;
    else false;
  }

  /**
   * 是否显示暂停/继续按钮
   */
  isPauseBtnShow():boolean {
    if(this.toDo.status == TaskStatus.PROCESSING || this.toDo.status == TaskStatus.PAUSE ){
      return true;
    }
    return false;
  }

  /**
   * 开始任务
   */
  start():void {
    let actived = this.toDoService.toDoList.filter(td=>
      td.status === TaskStatus.PROCESSING 
      || td.status === TaskStatus.PAUSE
    );

    if(actived.length<2){
      actived.filter(td=>td.status=== TaskStatus.PROCESSING)
      .forEach(td=>{
        this.toDoService.setStatus(td,TaskStatus.PAUSE);
      })
      //this.toDo.status = TaskStatus.PROCESSING;
      this.toDoService.setStatus(this.toDo,TaskStatus.PROCESSING)
      .subscribe({
        next:()=>{ this.toDo.status = TaskStatus.PROCESSING}
      })
    }
  }

  /**
   * 暂停任务
   */
  pauseOrResume():void {
    
    if(this.toDo.status=== TaskStatus.PROCESSING)
      //this.toDo.status = TaskStatus.PAUSE;
      this.toDoService.setStatus(this.toDo,TaskStatus.PAUSE)
        .subscribe({
          next:()=>{ this.toDo.status = TaskStatus.PAUSE}
        })
    else{
      this.toDoService.toDoList
      .filter(td=>td.status === TaskStatus.PROCESSING)
      .forEach(td=> td.status = TaskStatus.PAUSE)

      //TODO 深入研究rxJS,整合所有的Observable然后进行动作

      this.toDoService.setStatus(this.toDo,TaskStatus.PROCESSING)
        .subscribe({
          next:()=>{ this.toDo.status = TaskStatus.PROCESSING}
        })

      //this.toDo.status = TaskStatus.PROCESSING;
    }
      
  }


  /**
   * 结束任务
   */
  finish():void {
    console.log("set finish")
    this.toDo.status = TaskStatus.FINISH;
  }

  /**
   * 判断是否显示Result Box
   */
  isResultBoxShow():boolean{
    if(this.toDo.status==TaskStatus.FINISH) return true;
    return false;
  }

  /**
   * 设置暂停/继续按钮文字
   */
  getPauseBtnText():string {
    if(this.toDo.status===TaskStatus.PAUSE) return "继续";
    else if(this.toDo.status === TaskStatus.PROCESSING) return "暂停";
  }

}
