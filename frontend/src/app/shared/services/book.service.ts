import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { Book } from '../models/book';
import { HOST_URL } from '../config';

@Injectable()
export class BookService {

	constructor(private http:Http) { }

	private handleError(error: Response) {
		console.error(error);
		return Observable.throw(error.json().error || 'server error');
	}

	//根据id获取书籍信息
	getBookById(id: string) {
		return this.http.get(HOST_URL + 'book/' + id)
                    .map(res => <Book>res.json().data)
                    .catch(this.handleError);
	}

	getBooks() {
		return this.http.get(HOST_URL + 'book')
						.map(res => <Book[]>res.json().data)
						.catch(this.handleError);
	}

	//添加新书籍
	addBook(book:Book) {
		let body = JSON.stringify(book);
		let headers = new Headers({'Content-Type':'application/json'});
		let options = new RequestOptions({headers:headers});

		return this.http.post(HOST_URL + 'book/add', body, options)
					.map(res => <Book>res.json().data)
					.catch(this.handleError);	
	}
    
	//删除已有书籍
	deleteBook(id: string) {
		return this.http.get(HOST_URL + 'book/delete/' + id)
					.map(res => <Object>res.json().data)
					.catch(this.handleError);
	}

	//更新已有书籍
	updateBook(book:Book) {
		let body = JSON.stringify(book);
		let headers = new Headers({'Content-Type':'application/json'});
		let options = new RequestOptions({headers:headers});

		return this.http.post(HOST_URL + 'book/update', body, options)
		.map(res => <Book>res.json().data)
		.catch(this.handleError);
	}

}