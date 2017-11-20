import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MyMaterialModule } from '../myMaterial.module';
import { CategoryListComponent } from './categoryList.component';
import { EditCategoryComponent } from './editCategory.component';
import { CategoryRouterModule } from './categoryRouter.module';


@NgModule({
    declarations: [
        CategoryListComponent,
        EditCategoryComponent
    ],
    imports: [
        CategoryRouterModule,
        FormsModule,
        CommonModule,
        MyMaterialModule
    ],
    providers: [

    ]
})
export class CategoryModule { }
