import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from "../shared/services/category.service";
import { CommonService } from "../shared/services/common.service";
import { Category } from "../shared/models/category";

@Component({
    selector: 'edit-category',
    templateUrl: './editCategory.component.html',
    styleUrls: ['./editCategory.component.css']
})
export class EditCategoryComponent implements OnInit {
    category: Category;
    operateType: string;

    constructor(private actRouter: ActivatedRoute, private router: Router, private categoryService: CategoryService) {
        this.category = new Category();
    }

    ngOnInit() {
        this.actRouter.queryParams.subscribe(params => {
            if (params["id"] && params["id"] != "") {
                this.queryCategory(params["id"]);
                this.operateType = "编辑";
            }
            else {
                this.operateType = "创建";
            }
        });
    }

    queryCategory(id: string) {
        this.categoryService.getCategoryById(id).subscribe(cate => {
            if (cate) {
                console.log(cate);
                this.category = cate;
            }
        });
    }

    saveCategory() {
        if (this.category.id == "") {
            this.createCategory();
        }
        else {
            this.updateCategory();
        }
    }

    createCategory() {
        this.categoryService.addCategory(this.category).subscribe(cate => {
            if (cate) {
                this.redirectToList();
            }
        });
    }

    updateCategory() {
        this.categoryService.updateCategory(this.category).subscribe(cate => {
            if (cate) {
                this.redirectToList();
            }
        });
    }

    redirectToList() {
        this.router.navigateByUrl("/category/list");
    }
}
