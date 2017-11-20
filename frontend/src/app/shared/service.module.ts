import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { BookService } from './services/book.service';
import { CategoryService } from './services/category.service';
import { CommonService } from './services/common.service';
import { Category } from './models/category';

@NgModule({
    imports: [HttpModule, RouterModule],
    declarations: [],
    providers: [
        BookService,
        CategoryService,
        CommonService
    ],
    exports: []
})
export class ServiceModule {
}