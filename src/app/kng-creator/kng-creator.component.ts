import { Component, OnInit } from '@angular/core';
import { TestService } from '../test.service';

@Component({
  selector: 'app-kng-creator',
  templateUrl: './kng-creator.component.html',
  styleUrls: ['./kng-creator.component.less']
})
export class KngCreatorComponent implements OnInit {

  constructor(private testService:TestService) { }

  treeData: Array<Object> ;

  ngOnInit(): void {

   

  }


  submit(): void {
    
  }
}
