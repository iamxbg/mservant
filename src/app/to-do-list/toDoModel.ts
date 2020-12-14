import {  TaskType, EmergencyLevel, TaskStatus } from './ToDoEnums'; 
export class toDo {

    constructor(public id:number,
                public version:number,
                public is_master:boolean,
                public task_type:number,
                public current_step:number,
                public total_step:number,
                public category:number,
                public emergency_level:number,
                public status:number,
                public create_time:Date,
                public plan_start_time:Date,
                public deadline:Date,
                public plan_consume_mins:number,
                public actual_consume_mins:number,
                public start_time:Date,
                public end_time:Date,
                public result:number,
                public score:number,
                public sys_version:number){

                }




    public getId():number {
        return this.id;
    }
    
}
