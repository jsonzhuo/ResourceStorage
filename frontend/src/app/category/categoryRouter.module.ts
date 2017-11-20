import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryListComponent } from './categoryList.component';
import { EditCategoryComponent } from './editCategory.component';

const projectsRoutes: Routes = [
    {
        path: 'list',
        component: CategoryListComponent,
    },
    {
        path: 'edit',
        component: EditCategoryComponent
    },
    { path: '', redirectTo: 'list', pathMatch: 'full' }
];

@NgModule({
    imports: [
        RouterModule.forChild(projectsRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class CategoryRouterModule { }