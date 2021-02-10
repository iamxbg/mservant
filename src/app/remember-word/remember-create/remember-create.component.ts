import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-remember-create',
  templateUrl: './remember-create.component.html',
  styleUrls: ['./remember-create.component.less']
})
export class RememberCreateComponent implements OnInit {

  @Output()
  onCancel:EventEmitter<null> = new EventEmitter();

  constructor() { }

  private word_type:Array<String> = new Array<String>()

  ngOnInit() {
    this.word_type.push("形容词 adj.")
    this.word_type.push("名词 n.")
    this.word_type.push("动词 v.")
    this.word_type.push('动词 vt.')
    this.word_type.push('副词 prev.')
  }

  /**
   * 取消创建记忆
   */
  cancel(){
      this.onCancel.emit()
  }


  /**
   * 保存记忆
   */
  save(){
    console.log('保存记忆')
    
  }

}
