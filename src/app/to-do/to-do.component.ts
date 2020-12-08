import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';

import { Category, ComplexType, EmergencyLevel, TaskStatus } from '../to-do-list/ToDoEnums';
import { toDo } from '../to-do-list/toDoModel';
import { ToDoServiceService } from '../to-do-service.service';

@Component({
  selector: '[app-to-do]',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.less']
})
export class ToDoComponent implements OnInit {

  //@Output() setCurrentToDo:EventEmitter<null> = new EventEmitter<null>();

  setCurrentToDo:EventEmitter<toDo> = new EventEmitter<toDo>();

  @Input()
  index:number;

  @Input()
  toDo:toDo;

  //public pauseBtnText:string ="暂停";
  

  constructor(private toDoService:ToDoServiceService) {

    this.setCurrentToDo.subscribe(td=>{
      toDoService.pushToCurrents(td);
    })
   }

  ngOnInit() {

  }

  getEmergencyLevelColor(): string {
    if(this.toDo.emergency_level==EmergencyLevel.Low)
      return  'blue';
    else if(this.toDo.emergency_level==EmergencyLevel.Normal)
      return 'yellow';
    else if(this.toDo.emergency_level == EmergencyLevel.High)
      return 'red'
    else return 'black'
    /*
    switch(this.emergency_level){

      case EmergencyLevel.Low:
       
      case EmergencyLevel.Normal:
        return 'skyblue';
      case EmergencyLevel.Low:
        return  'green';
      default:
        console.log('el:'+this.emergency_level)
        return 'black';
    }*/
  }


  getCategory():string {
    if(this.toDo.category_type == Category.Job){
      return '工作';
    }else if(this.toDo.category_type == Category.Learn){
      return '学习';
    }else if(this.toDo.category_type == Category.Task){
      return '任务';
    }
  }

  getComplexType():string {
    if(this.toDo.complex_type == ComplexType.Block){
      return '连续';
    }else if(this.toDo.complex_type == ComplexType.Slip){
      return '简单';
    }else if(this.toDo.complex_type == ComplexType.Steps){
      return '持久';
    }
  }


  getStatus():string {
    if(this.toDo.status == TaskStatus.Hibernated){
      return "未开始";
    }else if(this.toDo.status == TaskStatus.Active){
      return '等待';
    }else if(this.toDo.status == TaskStatus.Complete){
      return '完成';
    }else if(this.toDo.status == TaskStatus.Fail){
      return '失败';
    }else if(this.toDo.status == TaskStatus.Outdated){
      return '过期';
    }else if(this.toDo.status == TaskStatus.Processing){
      return '进行中';
    }else if(this.toDo.status == TaskStatus.Terminated){
      return '终止';
    }else if(this.toDo.status == TaskStatus.Pause){
      return '暂停';
    }

  }

  /**
   * 是否显示开始按钮
   */
  isStartBtnShow():boolean {
    if(this.toDo.status == TaskStatus.Active) return true;
    else return false;
  }

  /**
   * 是否显示结束按钮
   */
  isFinishBtnShow():boolean {
    if(this.toDo.status ==TaskStatus.Processing || this.toDo.status == TaskStatus.Pause)
    return true;
    else false;
  }

  /**
   * 是否显示暂停/继续按钮
   */
  isPauseBtnShow():boolean {
    if(this.toDo.status == TaskStatus.Processing || this.toDo.status == TaskStatus.Pause ){
      return true;
    }
    return false;
  }


 

  /**
   * 开始任务
   */
  start():void {
    console.log('start');
    
    

    //this.setCurrentToDo.emit();
    //this.toDoService.setCurrentEvent.emit(this.toDo);
    
    this.setCurrentToDo.emit(this.toDo);

    console.log("emitted");
  }

  /**
   * 暂停任务
   */
  pause():void {
    if(this.toDo.status == TaskStatus.Pause){
      
      if(this.toDoService.getCurrent()!=null){
        this.toDoService.getCurrent().status = TaskStatus.Pause;
 
      }
      this.toDo.status = TaskStatus.Processing;
      this.toDoService.setCurrent(this.toDo);
    }else if(this.toDo.status == TaskStatus.Processing){
      if(this.toDoService.getCurrent()!=null){
        this.toDoService.getCurrent().status = TaskStatus.Processing;
      }
      this.toDo.status = TaskStatus.Pause;    
      this.toDoService.setCurrent(null);
    }

  }

  /**
   * 结束任务
   */
  finish():void {
    this.toDo.status = TaskStatus.Finish;
  }

  isResultBoxShow():boolean{
    if(this.toDo.status==TaskStatus.Finish) return true;
    return false;
  }

  getPauseBtnText():string {
    if(this.toDo.status===TaskStatus.Pause) return "继续";
    else if(this.toDo.status === TaskStatus.Processing) return "暂停";
  }

}
