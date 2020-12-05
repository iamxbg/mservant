import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.less']
})
export class ToDoComponent implements OnInit {

  @Input()
  index:number;

  @Input()
  content:string;

  @Input()
  emergency_level:number;

  @Input()
  category_type:number;



  constructor() { }

  ngOnInit() {
  }

}
