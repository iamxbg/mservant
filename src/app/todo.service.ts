import { Injectable,EventEmitter } from '@angular/core';
import { ToDo } from './todo-list/ToDo';
import { TaskStatus } from './todo-list/ToDoDictUtil';
import {ToDoEvent} from './todo-list/ToDoEvent';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { CommandName } from 'protractor';
import { ToDoEventTimeGroup } from './todo-list/ToDoEventTimeGroup';

@Injectable({
  providedIn: 'root'
})
export class ToDoService {

  //private todo_base_url:string="http://localhost:3000/todo/"
  private todo_base_url:string = "http://localhost:8080/todo"

  //private todoEvent_base_url:string ="http://localhost:3000/todoEvent/"
  private todoEvent_base_url:string ="http://localhost:8080/todo_event"

  constructor(private client:HttpClient) {

  }

  toDoList:ToDo[] = new Array();

  setStatus(td:ToDo,status:TaskStatus,comment?:string):Observable<ToDo>{
    
    //TODO 应该使用ES6的clone方法

    let cmm = comment!=null?comment:"sys";
    let tde = new ToDoEvent(cmm,td.status,status,td.id)

    //如何将两个event串联起来?
    return this.addEvent(tde);

    /*
    td.status=status;
        return this.client.put<ToDo>(this.todo_base_url+td.id,td);
    */    
 
  }


  loadAll():void{
    console.log("load")
      this.client.get<Array<ToDo>>(this.todo_base_url+"/selectAll",{
        headers:{"Access-Control-Allow-Origin":"*"}
      })
        .subscribe({
          next:(data)=>{
            this.toDoList = data;
          }
        })
  }

  selectAll():Observable<Array<ToDo>> {
    return this.client.get<Array<ToDo>>(this.todo_base_url+"/selectAll",{
      headers:{"Access-Control-Allow-Origin":"*"}
    })
      
  }

  
  delete(td:ToDo):Observable<any> {
     return this.client.post(this.todo_base_url+"/del",td,{
      headers:{"Access-Control-Allow-Origin":"*"}
    });
  }

  /*
  deleteEvents(td:ToDo):Observable<any> {
    return this.client.delete(this.todoEvent_base_url+"?todoId="+td.id);
  }
  */

  add(td:ToDo):Observable<ToDo> {
    return this.client.post<ToDo>(this.todo_base_url+"/add",td,{
      headers:{"Access-Control-Allow-Origin":"*"}
    });
  }

  /*
  update(td:ToDo):Observable<any> {
     return this.client.put<number>(this.todo_base_url,td);
   
  }
  */


  /**
   * add todo-event 
   */

  addEvent(todoEvent:ToDoEvent):Observable<any> {

    return this.client.post<any>(this.todoEvent_base_url+"/add",todoEvent,{
      headers:{"Access-Control-Allow-Origin":"*"}
    }); 

  }

  /**
   * 
   * @param todo select todo-event
   */
  getEventsOfTodo(tde:ToDoEvent):Observable<Array<ToDoEvent>> {

    return this.client.post<Array<ToDoEvent>>(this.todoEvent_base_url+"/selectByTodo",tde,{
      headers:{"Access-Control-Allow-Origin":"*"}
    });

  }

  getEventsOfTodoGroupByDate(tde:ToDoEvent):Observable<Array<ToDoEventTimeGroup>> {

    return this.client.post<Array<ToDoEventTimeGroup>>(this.todoEvent_base_url+"/selectByTodoGroupByDate",tde)
  }

  

}
