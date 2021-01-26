import { ToDoEventTime } from "./ToDoEventTime";

export class ToDoEventTimeGroup {

    constructor(
        public dateStr:string,
        public eventTimes:Array<ToDoEventTime>
    ){

    }

}