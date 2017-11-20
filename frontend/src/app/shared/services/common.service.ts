import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class CommonService {

    constructor() { }

    getDateStr(obj: Date) {
        if (obj) {
            obj = new Date();
        }
        let date = obj.getFullYear() + "-" + (obj.getMonth() + 1) + "-" + obj.getDay();

        return date;
    }

    getTimeStr(obj: Date) {
        if (obj) {
            obj = new Date();
        }
        let time = obj.getFullYear() + "-" + (obj.getMonth() + 1) + "-" + obj.getDay()
            + " " + obj.getHours() + ":" + obj.getMinutes() + ":" + obj.getSeconds();

        return time;
    }

}