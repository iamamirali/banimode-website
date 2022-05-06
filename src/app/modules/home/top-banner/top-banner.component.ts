import { Component, OnInit, HostListener } from '@angular/core';
@Component({
  selector: 'app-top-banner',
  templateUrl: './top-banner.component.html',
  styleUrls: ['./top-banner.component.scss']
})
export class TopBannerComponent implements OnInit {

  screenWidth: number = window.innerWidth;

  slides : string[] = [
    "./../assets/Banners/Banner2.jpg",
    "./../assets/Banners/Banner3.jpg",
    "./../assets/Banners/Banner1.jpg",
    "./../assets/Banners/Banner4.jpg"
  ];
  mobileSlides : string[] = [
    "./../assets/Banners/mobileBanners/banner2.jpg",
    "./../assets/Banners/mobileBanners/banner1.jpg"
  ];

  bannerSlideConfig = {
    "slidesToShow": 1,
    "slidesToScroll": 1,
    "arrows": true,
    'dots': true,
    "nextArrow": '<div style=\'position: absolute; top: 45%; right: 50px; z-index: 10; cursor: pointer; font-size: 2.5rem; background-color: rgba(0,0,0,0.05); width: 45px; height: 45px; border-radius: 50%; margin: 0px auto;\' class=\'next-slide\'><i class="fa fa-angle-right" style=\'color: white; margin-right:12px;\'></i></div>',
    "prevArrow": '<div style=\'position: absolute; top: 45%; left: 50px; z-index: 10; cursor: pointer; font-size: 2.5rem; background-color: rgba(0,0,0,0.05); width: 45px; height: 45px; border-radius: 50%; margin: 0px auto;\' class=\'next-slide\'><i class="fa fa-angle-left" style=\'color: white; margin-right:12px;\'></i></div>',
    "autoplay": true,
    "autoplaySpeed": 5000,
    "infinite": true,
    "rtl": true,
  }
  mobileSlideConfig = {
    // "slidesToShow": 1,
    // "slidesToScroll": 1,
    // "arrows": true,
    // 'dots': true,
    ...this.bannerSlideConfig,
    "nextArrow": '<div style=\'position: absolute; top: 35%; right: 24px; z-index: 10; cursor: pointer; font-size: 28px; background-color: rgba(0,0,0,0.05); width: 36px; height: 36px; border-radius: 50%; margin: 0px auto;\' class=\'next-slide\'><i class="fa fa-angle-right" style=\'color: white; margin-right:12px;\'></i></div>',
    "prevArrow": '<div style=\'position: absolute; top: 35%; left: 24px; z-index: 10; cursor: pointer; font-size: 28px; background-color: rgba(0,0,0,0.05); width: 36px; height: 36px; border-radius: 50%; margin: 0px auto;\' class=\'next-slide\'><i class="fa fa-angle-left" style=\'color: white; margin-right:12px;\'></i></div>',
    // "autoplay": true,
    // "autoplaySpeed": 5000,
    // "infinite": true,
    // "rtl": true,
  }

  constructor() { }

  @HostListener('window:resize', ['$event']) onResize() {
    this.screenWidth = window.innerWidth;
  }

  ngOnInit(): void {
  }

}
