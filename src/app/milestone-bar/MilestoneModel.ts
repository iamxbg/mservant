/**
 * 里程碑model
 */
export class MilestoneModel {

    
    /**开始时间 */
    start_time:Date;
    /**结束时间 */
    end_time:Date;


    /**
     * 
     * @param id 
     * @param index 序号 
     * @param desc 描述
     * @param status 状态
     */
    constructor(id:number,index:number,public desc:string,status:number=0){
    }


}