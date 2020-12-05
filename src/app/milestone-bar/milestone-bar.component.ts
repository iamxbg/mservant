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

}
