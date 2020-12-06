/** 任务复杂度
 *  slip - 便条形简单任务
 *  block - 暂用时间适中，应该连续进行达到完成的任务
 *  steps - 占用时间比较多，应该分布按计划进行的任务
 */
export enum ComplexType { Slip,Block,Steps}

/**
 * 任务类型，后期应该在数据库中配置
 *  因为真实的任务，比如学习就像技能树一样
 */
export enum Category { Learn,Job,Task }

/**
 * 任务紧急程度:
 *  low - 低
 *  normal - 一般
 *  High - 高
 */
export enum EmergencyLevel { Low,Normal,High}

/**
 *  hibernated - 冬眠
 *  active - 激活,等待执行
 *  outdated - 过期未执行
 *  processing - 处理中
 *  finish - 结束,中间状态,具体结果等待登记
 *  terminated - 终止
 *  fail  - 失败
 *  complete  - 完成
 */
export enum TaskStatus {
    Hibernated,
    Active,
    Outdated,
    Processing,
    Finish,
    Terminated,
    Pause,
    Fail,
    Complete
}
