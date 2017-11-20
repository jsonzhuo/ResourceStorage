import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { Category } from '../models/category';
import { HOST_URL } from '../config';

@Injectable()
export class CategoryService {

	constructor(private http:Http) { }

	private handleError(error: Response) {
		console.error(error);
		return Observable.throw(error.json().error || 'server error');
	}

	//根据id获取分类信息
	getCategoryById(id: string) {
		return this.http.get(HOST_URL + 'category/' + id)
                    .map(res => <Category>res.json().data)
                    .catch(this.handleError);
	}

	getCategorys() {
		return this.http.get(HOST_URL + 'category')
						.map(res => <Category[]>res.json().data)
						.catch(this.handleError);
	}

	//添加新分类
	addCategory(category:Category) {
		let body = JSON.stringify(category);
		let headers = new Headers({'Content-Type':'application/json'});
		let options = new RequestOptions({headers:headers});

		return this.http.post(HOST_URL + 'category/add', body, options)
					.map(res => <Category>res.json().data)
					.catch(this.handleError);	
	}
    
	//删除已有分类
	deleteCategory(id: string) {
		return this.http.get(HOST_URL + 'category/delete/' + id)
					.map(res => <Object>res.json().data)
					.catch(this.handleError);
	}

	//更新已有分类
	updateCategory(category:Category) {
		let body = JSON.stringify(category);
		let headers = new Headers({'Content-Type':'application/json'});
		let options = new RequestOptions({headers:headers});

		return this.http.post(HOST_URL + 'category/update', body, options)
		.map(res => <Category>res.json().data)
		.catch(this.handleError);
	}

}