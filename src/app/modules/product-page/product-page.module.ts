import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductPageRoutingModule } from './product-page-routing-module';
import { ProductPageComponent } from './product-page/product-page.component';
// import { ImgMagnifier } from "ng-img-magnifier";





@NgModule({
  declarations: [
    ProductPageComponent
  ],
  imports: [
    // ImgMagnifier,
    CommonModule,
    ProductPageRoutingModule,
  ],
  exports: [
    ProductPageComponent
  ]
})
export class ProductPageModule { }
