import { Category } from './../model';
import { AfterContentInit, AfterViewInit, Component, ComponentFactoryResolver, EventEmitter, Input, OnInit } from '@angular/core';
import { Container } from '@angular/compiler/src/i18n/i18n_ast';
import { TestService } from '../test.service';


@Component({
  selector: 'app-tree-selecter',
  templateUrl: './tree-selecter.component.html',
  styleUrls: ['./tree-selecter.component.less']
})
export class TreeSelecterComponent implements OnInit ,AfterViewInit,AfterContentInit{

  //@Input()
  treeData: Array<Category>


  treeDataFlat: Array<Category> = new Array();

  selectOptions: Array<Array<Category>> = new Array();

  showOptions: Array<Array<Category>> = new Array();



  onChagne:EventEmitter<any> = new EventEmitter()

  constructor(private testService:TestService) { }


  /** 没有效果??? */
  ngAfterViewInit(): void {

  }

  ngOnInit(): void {
    this.testService.testGetCategory().subscribe({
      next: (data) => {
        this.treeData = data;

        this.assembleTreeData()
      },
      error: (msg) => {
        alert("MSG:"+msg)
      }
    })
  }

  ngAfterContentInit(): void {

  }

  loadDecendant(cat0: Category) {
    if (cat0.children != null && cat0.children.length > 0) {
      this.showOptions.push(cat0.children)
      this.loadDecendant(cat0.children[0])
    }
  }


  change(level:number,event):void {

    let selectCategoryId = event.target.value
    let nexLevel = level + 1;



    if (nexLevel < this.selectOptions.length) {

      let orginalShowLen = this.showOptions.length;
      for (var i = orginalShowLen - nexLevel; i > 0; i--) {
        console.log('pop')
        this.showOptions.pop()
      }

      var shouldShow = this.selectOptions[nexLevel].filter(cat => cat.parentId == selectCategoryId);


      if (shouldShow != null && shouldShow.length > 0) {
        console.log('push new')
        this.showOptions.push(shouldShow)

        this.loadDecendant(shouldShow[0])
      }


    }
  }




  assembleTreeData(): void {
    if (this.treeData != null && this.treeData.length > 0) {

      function getChildrens( categories: Array<Category> ,selectOptions:Array<Array<Category>>):void {
        let level: Array < Category > = null;
        if (categories != null && categories.length > 0) {
          level = new Array<Category>();
          selectOptions.push(categories)
          for (let category of categories) {
            if (category.children != null && category.children.length > 0) {
              level = level.concat(category.children)
            }
          }
        }

        if (level != null && level.length>0) {
          if(level.length>0) getChildrens(level,selectOptions)
        }

      }

      getChildrens(this.treeData,this.selectOptions)

      this.showOptions[0] = this.selectOptions[0]

      this.loadDecendant(this.selectOptions[0][0])

    }
  }




}
