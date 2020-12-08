import { Category, ComplexType, EmergencyLevel, TaskStatus } from './ToDoEnums'; 
export class toDo {

    constructor(public id:number,
        public content:string,
        public category_type:Category,
        public emergency_level:EmergencyLevel=EmergencyLevel.Low,
        public complex_type:ComplexType=ComplexType.Slip){
        }

    public status:TaskStatus = TaskStatus.Active;
    public create_date?: Date;
    finish_date?: Date;

    public getId():number {
        return this.id;
    }
    
}
