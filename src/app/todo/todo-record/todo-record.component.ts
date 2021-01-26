import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import {  Emergency, Importance, TaskStatus, TaskType, ToDoDictUtil } from '../todo-list/ToDoDictUtil';
import { ToDo } from '../todo-list/ToDo';
import { ToDoService } from '../../todo.service';

@Component({
  selector: '[app-todo-record]',
  templateUrl: './todo-record.component.html',
  styleUrls: ['./todo-record.component.less']
})
export class ToDoRecordComponent implements OnInit {

    
  private timerMap = new Map()

  @Input()
  index:number;

  @Input()
  toDo:ToDo;

  @Input()
  recordMode:string;

  @Input()
  highlight:boolean;

  /**
   * show result registor box 
   */
  @Output()
  private onFinish:EventEmitter<ToDo> = new EventEmitter()

  /**
   * show detail
   */
  @Output()
  private onShowDetail:EventEmitter<ToDo> = new EventEmitter()
 
  /**
   * show comment
   */
  @Output()
  private onShowComment:EventEmitter<ToDo> = new EventEmitter()


  @Output()
  private onDelete:EventEmitter<ToDo> = new EventEmitter();

  constructor(private toDoService:ToDoService) {

   }

  ngOnInit() {
    if(this.toDo.status == TaskStatus.processing){
      //add  
      this.toDo['timer'] == setInterval(()=>{this.toDo.actualConsumeSecs+=1},1000)
    }else{
      this.toDo['timer'] = null
    }
    
  }


  

  /**
   * 是否显示暂停/继续按钮
   */
  isPauseBtnShow():boolean {
    if(this.toDo.status == TaskStatus.processing || this.toDo.status == TaskStatus.paused ){
      return true;
    }
    return false;
  }

  /**
   * 开始任务
   */
  start():void {
    let actived = this.toDoService.toDoList.filter(td=>
      td.status === TaskStatus.processing 
      || td.status === TaskStatus.paused
    );

    if(actived.length<3){
      actived.filter(td=>td.status=== TaskStatus.processing)
      .forEach(td=>{

        this.toDoService.setStatus(td,
          TaskStatus.paused);
      });

      this.toDoService.setStatus(this.toDo,
        TaskStatus.processing)
      .subscribe({
        next:()=>{ this.toDo.status=TaskStatus.processing}
      })
    }else{
      alert("同时开展不应超出3项任务!")
    }
  }

  /*
  doPause(event:string):void {

    this.toDoService.setStatus(this.toDo,TaskStatus.paused,event)
        .subscribe({
          next:()=>{ this.toDo.status=TaskStatus.paused}
        })
  }
  */

  /**
   * 暂停任务
   */
  pauseOrResume():void {
    

    //switch to pause
    if(this.toDo.status=== TaskStatus.processing){

      //弹出CommentBox，添加理由!
      //这里将切换状态的事件放到了comment组件中，如何让comment组件

      this.onShowComment.emit(this.toDo)

    }else{
      //switch to processing
      this.toDoService.toDoList
      .filter(td=>td.status === TaskStatus.processing)
      //.forEach(td=> td.status = TaskStatus.paused)
      .forEach(td=> 
        this.toDoService.setStatus(td,TaskStatus.paused,"sys:switch-paused")
          .subscribe({
            next:(data)=>{
             // window.clearInterval(td.timer)
             window.clearInterval(td['timer'])
             td.status = TaskStatus.paused
            },
            error:()=>{
              alert("暂停子任务失败!")
            }
          })
        )
      

      //TODO 深入研究rxJS,整合所有的Observable然后进行动作
      this.toDoService.setStatus(this.toDo,TaskStatus.processing)
        .subscribe({
          
          next:()=>{ 
            this.toDo['timer'] = setInterval(()=>{ this.toDo.actualConsumeSecs=this.toDo.actualConsumeSecs+1},1000)
            this.toDo.status= TaskStatus.processing
          }
        })

      //this.toDo.status = TaskStatus.processing;
    }
      
  }


  //进入到finish状态
  finish():void {
    console.log('finish')

    this.onFinish.emit(this.toDo);

  }



  /**
   * 设置暂停/继续按钮文字
   */
  getPauseBtnText():string {
    if(this.toDo.status===TaskStatus.paused) return "继续";
    else if(this.toDo.status=== TaskStatus.processing) return "暂停";
  }

  /**
   * 是否显示详情按钮
   */
  isDetailBtnShow():boolean {
    return this.toDo.status != TaskStatus.created?true:false;
  }
  /**
   * 是否显示开始按钮
   */
  isStartBtnShow():boolean {
    if(this.toDo.status === TaskStatus.created) return true;
    else return false;
  }

  /**
   * 是否显示结束按钮
   */
  isFinishBtnShow():boolean {
    if(this.toDo.status ==TaskStatus.processing || this.toDo.status == TaskStatus.paused)
    return true;
    else false;
  }

  /**
   * 是否显示冻结
   */
  isHibernateBtnShow():boolean {
    if(this.toDo.status != TaskStatus.fail && this.toDo.status != TaskStatus.done){
      return true;
    }else{
      return false;
    }
  }

  isTerminateBtnShow():boolean {
    if(this.toDo.status != TaskStatus.fail && this.toDo.status!= TaskStatus.done){
      return true;
    }
    return false;

  }

  isReschedulerBtnShow():boolean {
    if(this.toDo.status == TaskStatus.fail || this.toDo.status == TaskStatus.terminated ||
      this.toDo.status == TaskStatus.undone || this.toDo.status == TaskStatus.hibernate)
        return true;

      return false;
  }

  isDeleteBtnShow():boolean {
    if(this.toDo.status == TaskStatus.created) return true;

    return false;
  }

  /**
   * 显示详情
   */
  showDetail():void {
    this.onShowDetail.emit(this.toDo)
  }



  getEmergencyColor(): string {

    return ToDoDictUtil.getEmergencyColor(this.toDo)

  }

  getStatusColor():string {
    if(this.recordMode == 'manage'){
      switch(this.toDo.status){
        case TaskStatus.created:
        case TaskStatus.reschedule:
          return "white";
        case TaskStatus.terminated:
        case TaskStatus.fail:
        case TaskStatus.undone:
          return "orangered"
        case TaskStatus.done:
          return "yellowgreen";
        case TaskStatus.paused:
        case TaskStatus.processing:
        case TaskStatus.wait:
          return "yellow";
        case TaskStatus.hibernate:
          return "blue";
        

      }
    }
    return null;
  }

getImportanceColor():string {
  return ToDoDictUtil.getImportanceColor(this.toDo)

}

/**
 * 获取任务类别
 */
getTaskType():string {
 
    return ToDoDictUtil.getTaskTypeStr(this.toDo)
}

/**
 *  获取状态
 */
 getStatus():string {

    return ToDoDictUtil.getStatusStr(this.toDo)
  }

  terminate():void {
    alert("NOT IMPLEMETED")
  }

  hibernate():void {
    alert("NOT IMPLEMETED")
  }

  reschedule():void {
    alert("NOT IMPLEMETED")
  }

  delete():void {
    if(confirm("确认删除!")){
      //this.toDoService.deleteEvents(this.toDo);
      this.toDoService.delete(this.toDo).subscribe({
        next:(data)=>{
          //alert("删除成功!")
          this.onDelete.emit(this.toDo)
        }
      })
    }
  }

}
