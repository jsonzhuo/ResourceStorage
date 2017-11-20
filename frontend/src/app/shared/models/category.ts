export class Category {
    id: string;
    name: string;    //类别名称，书籍、网站、音乐...
    summary: string;    //简介
    description: string;    //描述   
    enName: string;    //英文名
    createtime: string;    //创建时间
    constructor() {
        this.id = "";
        this.name = "";
        this.summary = "";
        this.description = "";
        this.enName = "";
        this.createtime = "";
    }
}