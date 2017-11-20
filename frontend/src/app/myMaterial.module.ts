import {
    MatButtonModule, MatCheckboxModule, MatToolbarModule, MatGridListModule, MatCardModule,
    MatIconModule, MatInputModule, MatExpansionModule, MatTableModule, MatFormFieldModule
} from '@angular/material';
import { NgModule } from '@angular/core';

@NgModule({
    imports: [
        MatButtonModule,
        MatCheckboxModule,
        MatToolbarModule,
        MatGridListModule,
        MatCardModule,
        MatIconModule,
        MatInputModule,
        MatExpansionModule,
        MatTableModule,
        MatFormFieldModule
    ],
    exports: [
        MatButtonModule,
        MatCheckboxModule,
        MatToolbarModule,
        MatGridListModule,
        MatCardModule,
        MatIconModule,
        MatInputModule,
        MatExpansionModule,
        MatTableModule,
        MatFormFieldModule
    ],
})
export class MyMaterialModule { }