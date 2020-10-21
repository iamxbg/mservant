import { Component, OnInit } from '@angular/core';
import { ExpandLeftTrigger} from './animation';

@Component({
  selector: 'app-left',
  templateUrl: './left.component.html',
  styleUrls: ['./left.component.less'],
  animations:[ExpandLeftTrigger]
})
export class LeftComponent implements OnInit {

   

  constructor() { 
     
  }

  ngOnInit() {

  }

  expand:boolean =false;

  doExpand(isExpand:boolean ): void {

    this.expand = isExpand;

  }
  
  public isExpand():string {
    if(this.expand) return "expand";
    else return "fold";
  }
  
}
