import { Component, OnInit } from '@angular/core';
import { BookService } from "../shared/services/book.service";
import { CommonService } from "../shared/services/common.service";
import { Book } from "../shared/models/book";

@Component({
    selector: 'book-list',
    templateUrl: './bookList.component.html',
    styleUrls: ['./bookList.component.css']
})
export class BookListComponent implements OnInit {

    BookList = [];
    BookTemp: any;

    constructor(private bookService: BookService) {
        this.BookTemp = new Book();
    }

    ngOnInit() {

    }

}
