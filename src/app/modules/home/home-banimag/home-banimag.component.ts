import { Component, OnInit } from '@angular/core';
import { Datum } from 'src/app/models/homeBanimag.model';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-home-banimag',
  templateUrl: './home-banimag.component.html',
  styleUrls: ['./home-banimag.component.scss']
})
export class HomeBanimagComponent implements OnInit {
  banimagArticles : Datum[] = []

  homeBanimagSliderConfig = {
    'slidesToShow': 4,
    "slidesToScroll": 1,
    "arrows": true,
    "nextArrow": '<div style=\'position: absolute; top: 50%; right: -15px; z-index: 10; cursor: pointer; font-size: 2rem;\' class=\'next-slide\'><i class="fa fa-angle-right" style=\'color: gray;\'></i></div>',
    "prevArrow": '<div style=\'position: absolute; top: 50%; left: -14px; z-index: 10; cursor: pointer; font-size: 2rem\' class=\'next-slide\'><i class="fa fa-angle-left" style=\'color: gray;\'></i></div>',
    "infinite": true,
    "autoplay": true,
    "autoplaySpeed": 4000,
    "rtl": true,
    "responsive": [
      {
        breakpoint: 480,
        settings: {
          "slidesToShow": 1,
          "slidesToScroll": 1,
          "nextArrow": '<div style=\'position: absolute; top: 40%; right: 14px; z-index: 10; cursor: pointer; font-size: 2rem;\' class=\'next-slide\'><i class="fa fa-angle-right" style=\'color: gray;\'></i></div>',
          "prevArrow": '<div style=\'position: absolute; top: 40%; left: 14px; z-index: 10; cursor: pointer; font-size: 2rem\' class=\'next-slide\'><i class="fa fa-angle-left" style=\'color: gray;\'></i></div>',
        }
      }
    ]
  }

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getHomeBanimag()
  }

  getHomeBanimag() {
    this.banimagArticles = this.route.snapshot.data['homeResolver'].banimag.data
  }

}
