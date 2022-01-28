import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductPageRoutingModule } from './product-page-routing-module';
import { ProductPageComponent } from './product-page/product-page.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { NgxImageZoomModule } from 'ngx-image-zoom';
import { ProductInfoComponent } from './product-page/product-info/product-info.component';





@NgModule({
  declarations: [
    ProductPageComponent,
    ProductInfoComponent
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
