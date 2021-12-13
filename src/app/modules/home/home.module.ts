import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponentComponent } from './home-component/home-component.component';
import { TopBannerComponent } from './top-banner/top-banner.component';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { FormsModule } from '@angular/forms';


import { SlickCarouselModule } from 'ngx-slick-carousel';
import { HomeRoutingModule } from './home-routing-module';
import { HomeFlashSalesComponent } from './home-flash-sales/home-flash-sales.component';
import { HomeSuggestionsComponent } from './home-suggestions/home-suggestions.component';
import { HomeFeaturesComponent } from './home-features/home-features.component';
import { HomeBrandsComponent } from './home-brands/home-brands.component';
import { HomeBanimagComponent } from './home-banimag/home-banimag.component';
import { HomeNewsletterSignupComponent } from './home-newsletter-signup/home-newsletter-signup.component';
import { HomeCategoryComponent } from './home-category/home-category.component';
import { NewsletterEmailResultComponent } from './home-newsletter-signup/newsletter-email-result/newsletter-email-result.component';



@NgModule({
  declarations: [
    HomeComponentComponent,
    TopBannerComponent,
    HomeFlashSalesComponent,
    HomeSuggestionsComponent,
    HomeFeaturesComponent,
    HomeBrandsComponent,
    HomeBanimagComponent,
    HomeNewsletterSignupComponent,
    HomeCategoryComponent,
    NewsletterEmailResultComponent
  ],
  imports: [
    CommonModule,
    SlickCarouselModule,
    HomeRoutingModule,
    AngularMaterialModule,
    FormsModule
  ],
  exports: [
    HomeComponentComponent
  ]
})
export class HomeModule { }
