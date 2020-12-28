import { TaskType } from "./ToDoDictUtil";

export class Category {

    /**
     * 
     * @param id 
     * @param name 分类名称
     * @param parentId 父级id
     * @param delFlag 删除标记
     */
    constructor(public id:number,
        public name:string,
        public parentId:number,
        public delFlag:boolean){

    }

    /**
     * 允许的任务类型
     */
    private allowedTaskTypes:TaskType[];



}