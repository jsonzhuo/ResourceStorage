import { Component, OnInit } from '@angular/core';
import { CategoryService } from "../shared/services/category.service";
import { Category } from "../shared/models/category";

@Component({
    selector: 'rs-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    CategoryList = [];

    constructor(private categoryService: CategoryService) {
    }

    ngOnInit() {
        this.queryCategoryList();
    }

    queryCategoryList() {
        this.categoryService.getCategorys().subscribe(categorys => {
            if (categorys && categorys.length > 0) {
                this.CategoryList = categorys.map(item => {
                    item.editable = false;
                    return item;
                });
                console.log(this.CategoryList);
            }
        })
    }
}
