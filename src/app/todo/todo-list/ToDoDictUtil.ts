import { ToDo } from "./ToDo";

/** 
 * 任务类型
 */
export enum TaskType { 
    slip,
    normal,
    milestone,
    dated
}




/**
 * 任务紧急程度:
 *  low - 低
 *  normal - 一般
 *  High - 高
 */
export enum Emergency { 
    very_low,
    low,
    normal,
    high,
    very_high
}

export enum Importance {
    very_low,
    low,
    normal,
    high,
    very_high
}

/**
 * 任务生命周期状态
 * 
 */
export enum TaskStatus {
    created,
    wait,
    undone,
    processing,
    paused,
    done,
    fail,
    reschedule,
    terminated,
    hibernate
}


export class ToDoDictUtil {
    /**
   * 获取紧急等级颜色
   */
  static getEmergencyColor(todo:ToDo): string {

    switch(todo.emergency ){
      case Emergency.very_low:
        return  'blue'
      case Emergency.low:
        return 'skyblue';
      case Emergency.normal:
        return  'yellowgreen';
      case Emergency.high:
        return"orange"
      case Emergency.very_high:
        return 'red';  
      default:
        return 'black';
    }
}

static getEmergencyStr(todo:ToDo):string {
  switch(todo.emergency){
    case Emergency.very_low:
      return "低"
    case Emergency.low:
      return "比较低"
    case Emergency.normal:
      return "一般"
    case Emergency.high:
      return "比较高"
    case Emergency.very_high:
      return "高"
  }
}

static getImportanceColor(todo:ToDo):string {
  switch(todo.importance){
    case Importance.very_low:
        return  'blue'
      case Importance.low:
        return 'skyblue';
      case Importance.normal:
        return  'yellowgreen';
      case Importance.high:
        return"orange"
      case Importance.very_high:
        return 'red';  
      default:
        return 'black';
  }
}

static getImportanceStr(todo:ToDo):string {
  switch(todo.importance){
    case Importance.very_low:
      return "低";
    case Importance.low:
      return "比较低";
    case Importance.normal:
      return "一般";
    case Importance.high:
      return "比较高";
    case Importance.very_high:
      return "高";
    default:
      return "未知状态:"+todo.importance
  }
}

/**
 * 获取任务类别
 */
static getTaskTypeStr(todo:ToDo):string {
 
    switch(todo.taskType){
      case TaskType.slip:
        return "便签"

      case TaskType.normal:
        return "一般"
      case TaskType.milestone:
        return  "里程"

      case TaskType.dated:
        return "定时" 

      default:
        return "未知类型!"+todo.taskType

      //代码为何无法执行到
      //return taskTypeStr;
    }
}

  /**
   *  获取状态
   */
  static getStatusStr(todo:ToDo):string {

      switch(todo.status){
        case TaskStatus.created:
          return '新建'
          
        case TaskStatus.wait:
          return '等待'
          
        case TaskStatus.undone:
          return '未完成'
          
        case TaskStatus.processing:
          return '处理中'
          
        case TaskStatus.paused:
          return '暂停'
          
        case  TaskStatus.done:
          return '完成'
          
        case TaskStatus.fail:
          return '失败'
          
        case TaskStatus.reschedule:
          return '重启'
          
        case TaskStatus.terminated:
          return '终止'
          
        case TaskStatus.hibernate:
          return '冻结'
          
        default:
          return "未知状态:"+todo.status

        //为何代码无法进入
        //return status;
      }
  }

    /**
   *  获取状态
   */
  static getStatusStrByCode(code:number):string {

    switch(code){
      case TaskStatus.created:
        return '新建'
        
      case TaskStatus.wait:
        return '等待'
        
      case TaskStatus.undone:
        return '未完成'
        
      case TaskStatus.processing:
        return '处理中'
        
      case TaskStatus.paused:
        return '暂停'
        
      case  TaskStatus.done:
        return '完成'
        
      case TaskStatus.fail:
        return '失败'
        
      case TaskStatus.reschedule:
        return '重启'
        
      case TaskStatus.terminated:
        return '终止'
        
      case TaskStatus.hibernate:
        return '冻结'
        
      default:
        return "未知状态:"

      //为何代码无法进入
      //return status;
    }
}

}