import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductPageRoutingModule } from './product-page-routing-module';
import { ProductPageComponent } from './product-page/product-page.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { NgxImageZoomModule } from 'ngx-image-zoom';
import { ProductInfoComponent } from './product-page/product-info/product-info.component';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { FormsModule } from '@angular/forms';
import { SizeInfoComponent } from './product-page/size-info/size-info.component';
import { ProductTabInfoComponent } from './product-tab-info/product-tab-info.component';
import { ProductFeaturesTabComponent } from './product-tab-info/product-features-tab/product-features-tab.component';





@NgModule({
  declarations: [
    ProductPageComponent,
    ProductInfoComponent,
    SizeInfoComponent,
    ProductTabInfoComponent,
    ProductFeaturesTabComponent
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
