import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponentComponent } from './home-component/home-component.component';
import { TopBannerComponent } from './top-banner/top-banner.component';

import { SlickCarouselModule } from 'ngx-slick-carousel';
import { HomeRoutingModule } from './home-routing-module';
import { HomeFlashSalesComponent } from './home-flash-sales/home-flash-sales.component';
import { HomeSuggestionsComponent } from './home-suggestions/home-suggestions.component';
import { HomeFeaturesComponent } from './home-features/home-features.component';
import { HomeBrandsComponent } from './home-brands/home-brands.component';



@NgModule({
  declarations: [
    HomeComponentComponent,
    TopBannerComponent,
    HomeFlashSalesComponent,
    HomeSuggestionsComponent,
    HomeFeaturesComponent,
    HomeBrandsComponent
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
