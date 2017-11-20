import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from "../shared/services/book.service";
import { CommonService } from "../shared/services/common.service";
import { Book } from "../shared/models/book";

@Component({
    selector: 'edit-book',
    templateUrl: './editBook.component.html',
    styleUrls: ['./editBook.component.css']
})
export class EditBookComponent implements OnInit {
    book: any;
    constructor(private actRouter: ActivatedRoute, private bookService: BookService) {
        this.book = new Book();
    }

    ngOnInit() {
        this.actRouter.queryParams.subscribe(params => {
            if (params["id"] && params["id"] != "") {
                this.queryCategory(params["id"]);
            }
        });
    }

    queryCategory(id: string) {
        this.bookService.getBookById(id).subscribe(res => {
            if (res) {
                console.log(res);
                this.book = res;
            }
        });
    }
}
