import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import { CategoryService } from "../shared/services/category.service";
import { CommonService } from "../shared/services/common.service";
import { Category } from "../shared/models/category";

@Component({
    selector: 'category-list',
    templateUrl: './categoryList.component.html',
    styleUrls: ['./categoryList.component.css']
})
export class CategoryListComponent implements OnInit {
    displayedColumns = ['name', 'summary', 'description', 'id'];
    CategoryList:any;

    constructor(private categoryService: CategoryService) {
        this.CategoryList = new MatTableDataSource();
    }

    ngOnInit() {
        this.queryCategoryList();
    }

    queryCategoryList() {
        this.categoryService.getCategorys().subscribe(categorys => {
            if (categorys && categorys.length > 0) {
                this.CategoryList = new MatTableDataSource(categorys);
            }
        })
    }
}
