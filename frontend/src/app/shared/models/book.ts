import { BookType } from './bookType';

export class Book {
    id: string;
    name: string;    //书名
    author: string;    //作者
    summary: string;   //简介
    publictime: string;   //出版时间
    buytime: string;   //购买时间
    source: string;   //购买来源
    imgUrl: string;   //封面照片
    description: string;   //描述
    idcategory: string;    //类别id   
    type: number;   //分类：计算机、历史...
    language: string;    //语音，默认中文ch
    createtime: string;   //添加时间
    constructor() {
        this.id = "";
        this.name = "";
        this.author = "佚名";
        this.summary = "";
        this.publictime = "";
        this.buytime = "";
        this.source = "";
        this.imgUrl = "";
        this.description = "";
        this.idcategory = "";
        this.type = BookType.Default;
        this.language = "";
        this.createtime = "";
    }
}