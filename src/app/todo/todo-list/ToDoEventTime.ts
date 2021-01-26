export class ToDoEventTime {

    constructor(
        public comment:string,
        public startDate:Date,
        public endDate:Date,       
        public startEvent:any,
        public endEvent:any,
        public millis:number
    ){}


}