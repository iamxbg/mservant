
export class ToDoEvent {

    id:number;
    comment:string;
    createTime:Date;
    oldStatus:number;
    newStatus:number;
    todoId:number
    

    constructor(
         comment:string,
         oldStatus:number,
         newStatus:number,
         todoId:number){

        this.comment = comment;
        this.oldStatus = oldStatus;
        this.newStatus = newStatus;
        this.todoId = todoId;

        this.createTime = new Date();
    
    }




}