import { Injectable,EventEmitter } from '@angular/core';
import { toDo } from './to-do-list/toDoModel';
import { TaskStatus } from './to-do-list/ToDoEnums';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToDoServiceService {

  currentToDos:toDo[] = new Array<toDo>();
  private current:toDo;

  //TODO use getter replace public word
  //public setCurrentEvent:EventEmitter<toDo> = new EventEmitter<toDo>();

  private httpClient:HttpClient;

  constructor(client:HttpClient) {
      this.httpClient = client;

  }

  public getTask():Observable<Array<toDo>>{

    console.log("invoke getTask")
    return this.httpClient.get<Array<toDo>>("http://localhost:3000/getAll");
  }


  public setCurrent(td:toDo){
    this.current = td;
  }

  getCurrent():toDo{
    return this.current;
  }

  pushToCurrents(td:toDo){

    if(this.currentToDos.length<2){
      if(this.current!=null)
      this.current.status = TaskStatus.Pause;

      this.currentToDos.push(td);
      this.setCurrent(td);
      td.status = TaskStatus.Processing;

    }else{
      alert("同时进行任务不能超出"+this.currentToDos.length+"个");
      return;
    }
  }

}
