import { Component, Input, OnInit } from '@angular/core';
import { MilestoneModel } from './mileStoneModel';

@Component({
  selector: 'app-milestone-bar',
  templateUrl: './milestone-bar.component.html',
  styleUrls: ['./milestone-bar.component.less']
})
export class MilestoneBarComponent implements OnInit {

  @Input()
  total:number;

  /**
   * current step
   */
  currentStep:number =0;
  
  milestones:MilestoneModel[]=[
    new MilestoneModel(0,0,"未开始"),
    new MilestoneModel(1,1,"一半"),
    new MilestoneModel(2,2,"完成")
  ];

  @Input()
  step:number;

  constructor() { }

  ngOnInit() {
  }

  markStep(index:number){
    alert("添加纪录登记")
    this.currentStep = index;
  }

}
