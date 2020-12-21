import { Injectable,EventEmitter } from '@angular/core';
import { toDo } from './to-do-list/toDoModel';
import { TaskStatus } from './to-do-list/ToDoEnums';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToDoServiceService {

  private base_url:string="http://localhost:3000/todo/"

  constructor(private client:HttpClient) {

  }

  toDoList:toDo[] = new Array();

  setStatus(td:toDo,status:TaskStatus):Observable<toDo>{
    
    //TODO 应该使用ES6的clone方法
    td.status = status;
    return this.client.put<toDo>(this.base_url+td.id,td);
  }


  loadAll():void{
    console.log("load")
      this.client.get<Array<toDo>>(this.base_url)
        .subscribe({
          next:(data)=>{
            this.toDoList = data;
          }
        })
  }

  
  remove(td:toDo):Observable<any> {
     return this.client.delete(this.base_url+td.id);
  }


  add(td:toDo):Observable<toDo> {
    return this.client.post<toDo>(this.base_url,toDo);
  }

  update(td:toDo):Observable<any> {
     return this.client.put<number>(this.base_url,td);
   
  }

  

}
