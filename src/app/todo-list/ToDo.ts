import {  TaskType, Emergency, TaskStatus } from './ToDoDictUtil'; 

export class ToDo {

    constructor(public id:number,
        public taskType:number,
        public name:string,
        public desc:string,
        public category:number,
        public emergency:number,
        public importance:number,
        public status:number,
        public createTime:Date,
        public planStartTime:Date,
        public planMustStartTime:Date,
        public planMustEndTime:Date,
        public planConsumeSecs:number,
        public actualConsumeSecs:number,
        public startTime:Date,
        public endTime:Date,
        public failReason:string,
        public score:number,
        public rewardScore:number,
        public oldStatus:number){

                }

    /**
     * 旧的状态
     *  */            
    //private _status:number;
    //private _oldStatus:number =0;
    
    /** not work */
    /*
    get status(){
        console.log("getter")
        return this._status;
    }

    set status(value:number) {
        console.log("setter")
        this._oldStatus = this._status;
        this._status = value;
    }
    */
    /*
    get oldStatus():number {

        return this._oldStatus;
    }

    set oldStatus(value:number) {
        this._oldStatus = value
    }
    */




}
