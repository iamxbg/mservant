import { Component, Input, OnInit } from '@angular/core';
import { Category, ComplexType, EmergencyLevel, TaskStatus } from '../to-do-list/ToDoEnums';

@Component({
  selector: '[app-to-do]',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.less']
})
export class ToDoComponent implements OnInit {

  @Input()
  index:number;

  @Input()
  content:string;

  @Input()
  emergency_level:EmergencyLevel;

  @Input()
  category_type:Category;

  @Input()
  complex_type:ComplexType;

  @Input()
  status:TaskStatus;

  @Input()
  create_date: Date;

  public pauseBtnText:string ="暂停";
  

  constructor() { }

  ngOnInit() {

  }

  getEmergencyLevelColor(): string {
    if(this.emergency_level==EmergencyLevel.Low)
      return  'blue';
    else if(this.emergency_level==EmergencyLevel.Normal)
      return 'yellow';
    else if(this.emergency_level == EmergencyLevel.High)
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
    if(this.category_type == Category.Job){
      return '工作';
    }else if(this.category_type == Category.Learn){
      return '学习';
    }else if(this.category_type == Category.Task){
      return '任务';
    }
  }

  getComplexType():string {
    if(this.complex_type == ComplexType.Block){
      return '连续';
    }else if(this.complex_type == ComplexType.Slip){
      return '简单';
    }else if(this.complex_type == ComplexType.Steps){
      return '持久';
    }
  }


  getStatus():string {
    if(this.status == TaskStatus.Hibernated){
      return "未开始";
    }else if(this.status == TaskStatus.Active){
      return '等待';
    }else if(this.status == TaskStatus.Complete){
      return '完成';
    }else if(this.status == TaskStatus.Fail){
      return '失败';
    }else if(this.status == TaskStatus.Outdated){
      return '过期';
    }else if(this.status == TaskStatus.Processing){
      return '进行中';
    }else if(this.status == TaskStatus.Terminated){
      return '终止';
    }else if(this.status == TaskStatus.Pause){
      return '暂停';
    }

  }

  /**
   * 是否显示开始按钮
   */
  isStartBtnShow():boolean {
    if(this.status == TaskStatus.Active) return true;
    else return false;
  }

  /**
   * 是否显示结束按钮
   */
  isFinishBtnShow():boolean {
    if(this.status ==TaskStatus.Processing || this.status == TaskStatus.Pause)
    return true;
    else false;
  }

  /**
   * 是否显示暂停/继续按钮
   */
  isPauseBtnShow():boolean {
    if(this.status == TaskStatus.Processing || this.status == TaskStatus.Pause ){
      return true;
    }
    return false;
  }

  /**
   * 开始任务
   */
  start():void {
    console.log('start')
    this.status = TaskStatus.Processing;
  }

  /**
   * 暂停任务
   */
  pause():void {
    if(this.status == TaskStatus.Pause){
      this.status = TaskStatus.Processing;
      this.pauseBtnText = '暂停';
    }else if(this.status == TaskStatus.Processing){
      this.status = TaskStatus.Pause;
      this.pauseBtnText = '继续';
    }

  }

  /**
   * 结束任务
   */
  finish():void {
    this.status = TaskStatus.Finish;
  }

  isResultBoxShow():boolean{
    if(this.status==TaskStatus.Finish) return true;
    return false;
  }

}
