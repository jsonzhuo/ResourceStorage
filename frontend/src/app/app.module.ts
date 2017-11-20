import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MyMaterialModule } from './myMaterial.module';
import { ServiceModule } from "./shared/service.module";
import { AppRouterModule } from "./appRouter.module";

import { AppComponent } from './app.component';
import { HeaderComponent } from "./common/header.component";
import { FooterComponent } from "./common/footer.component";
import { CarouselComponent } from "./common/carousel.component";
import { HomeComponent } from "./home/home.component";


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CarouselComponent,
    HomeComponent
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    MyMaterialModule,
    ServiceModule,
    AppRouterModule
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
