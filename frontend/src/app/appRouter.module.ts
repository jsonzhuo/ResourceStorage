import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from "./home/home.component";

const appRoutes: Routes = [
    {
        path: 'category',
        loadChildren: 'app/category/category.module#CategoryModule',
    },
    {
        path: 'home',
        component: HomeComponent
    },
    { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
    imports: [
        RouterModule.forRoot(
            appRoutes,
        )
    ],
    exports: [
        RouterModule
    ],
    providers: [
    ]
})
export class AppRouterModule { }