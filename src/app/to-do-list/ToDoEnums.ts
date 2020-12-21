/** 任务复杂度
 *  slip - 便条形简单任务
 *  block - 暂用时间适中，应该连续进行达到完成的任务
 *  steps - 占用时间比较多，应该分布按计划进行的任务
 */
export enum TaskType { 
    SLIP=0,
    BLOCK=1,
    MILESTONE=2
}



/**
 * 任务紧急程度:
 *  low - 低
 *  normal - 一般
 *  High - 高
 */
export enum EmergencyLevel { 
    LOW=0,
    MIDDLE=1,
    HIGH=2
}

/**
 * 定义见dict_t表
 */
export enum TaskStatus {
    UNSTATED=0,
    WAITING=1,
    OUTDATED=2,
    PROCESSING=3,
    FINISH=4,
    TERMINATED=5,
    PAUSE=6,
    FAIL=7,
    COMPLETE=8
}
