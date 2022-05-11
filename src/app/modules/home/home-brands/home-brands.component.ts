import { Component, OnInit, HostListener } from '@angular/core';
import { DataProccessService } from 'src/app/services/data-proccess.service';
import { Datum } from 'src/app/models/brands.model';

@Component({
  selector: 'app-home-brands',
  templateUrl: './home-brands.component.html',
  styleUrls: ['./home-brands.component.scss']
})
export class HomeBrandsComponent implements OnInit {
  homeBrands : Datum[] = []
  screenWidth: number = window.innerWidth

  brandsSlideConfig = {
    'slidesToShow': 8,
    "slidesToScroll": 2,
    "arrows": true,
    "nextArrow": '<div style=\'position: absolute; top: 15%; right: -30px; z-index: 10; cursor: pointer; font-size: 2rem;\' class=\'next-slide\'><i class="fa fa-angle-right" style=\'color: gray;\'></i></div>',

    "prevArrow": '<div style=\'position: absolute; top: 15%; left: 14px; z-index: 10; cursor: pointer; font-size: 2rem\' class=\'next-slide\'><i class="fa fa-angle-left" style=\'color: gray;\'></i></div>',
    "infinite": true,
    "autoplay": true,
    "autoplaySpeed": 4000,
    "rtl": true
  }
  
  mobileSlideConfig = {
    ...this.brandsSlideConfig,
    "slidesToShow": 2,
    "slidesToScroll": 2,
    "nextArrow": '<div style=\'position: absolute; top: 20%; right: -10px; z-index: 10; cursor: pointer; font-size: 2rem;\' class=\'next-slide\'><i class="fa fa-angle-right" style=\'color: gray;\'></i></div>',
    "prevArrow": '<div style=\'position: absolute; top: 20%; left: -10px; z-index: 10; cursor: pointer; font-size: 2rem\' class=\'next-slide\'><i class="fa fa-angle-left" style=\'color: gray;\'></i></div>',
  }

  constructor(private dataFetch : DataProccessService) { }

  @HostListener('window:resize', ['$event']) onResize() {
    this.screenWidth = window.innerWidth;
  }

  ngOnInit(): void {
    this.getBrands()
  }

  getBrands() {
    this.dataFetch.getBrands().subscribe((data) => {
      this.homeBrands = data.data
    })
  }

}
