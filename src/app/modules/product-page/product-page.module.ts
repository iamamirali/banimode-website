import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductPageRoutingModule } from './product-page-routing-module';
import { ProductPageComponent } from './product-page/product-page.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { NgxImageZoomModule } from 'ngx-image-zoom';
import { ProductInfoComponent } from './product-page/product-info/product-info.component';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { FormsModule } from '@angular/forms';





@NgModule({
  declarations: [
    ProductPageComponent,
    ProductInfoComponent
  ],
  imports: [
    CommonModule,
    ProductPageRoutingModule,
    SlickCarouselModule,
    NgxImageZoomModule,
    AngularMaterialModule,
    FormsModule
  ],
  exports: [
    ProductPageComponent
  ]
})
export class ProductPageModule { }
