import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponentComponent } from './home-component/home-component.component';
import { TopBannerComponent } from './top-banner/top-banner.component';

import { SlickCarouselModule } from 'ngx-slick-carousel';
import { HomeRoutingModule } from './home-routing-module';



@NgModule({
  declarations: [
    HomeComponentComponent,
    TopBannerComponent
  ],
  imports: [
    CommonModule,
    SlickCarouselModule,
    HomeRoutingModule
  ],
  exports: [
    HomeComponentComponent
  ]
})
export class HomeModule { }
