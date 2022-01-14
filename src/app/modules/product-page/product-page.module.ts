import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductPageRoutingModule } from './product-page-routing-module';
import { ProductPageComponent } from './product-page/product-page.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { NgxImageZoomModule } from 'ngx-image-zoom';





@NgModule({
  declarations: [
    ProductPageComponent
  ],
  imports: [
    CommonModule,
    ProductPageRoutingModule,
    SlickCarouselModule,
    NgxImageZoomModule
  ],
  exports: [
    ProductPageComponent
  ]
})
export class ProductPageModule { }
