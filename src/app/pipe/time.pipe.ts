import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'time'
})
export class TimePipe implements PipeTransform {



  transform(value: number, ...args: any[]): any {
    let secs = value/1000;

    return convertRange(value,[24,60,60])
  }

}

/**
 * 
 * @param value 原始值
 * @param units 转换梯度
 */
// function  convertRange(value:number,...units:number[]) {
//   var str ="";

//   let u = units.pop()

//   str = str.concat(value % u + ":", str )

//   return value/u>0 && units.length>0 ?convertRange(value/u,units):str;

// }
function convertRange(value:number,units:number[],str:string='') :string{

  let u = units.pop()
  let trimVal = value % u

  value =  (value-trimVal)/u
  var split = ''
  if(units.length>0 && value >= 1 ){
     split = '-'
  }

  str =  (split +( trimVal )).concat(str)

  return value>=1 && units.length>0 ?convertRange(value,units,str):str;

}

