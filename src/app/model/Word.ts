export class Word{

    /** id */
     id:number;

    /** 单词 */
     content:string;

    /** 语义描述 */
     desc:string;
    /** 同义词 */
     syncWords:Word[];
    /** 反义词 */
     reversedWords:Word[];

    //constructor(content:string){}



}