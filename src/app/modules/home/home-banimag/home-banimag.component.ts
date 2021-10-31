import { Component, OnInit } from '@angular/core';
import { Datum } from 'src/app/models/homeBanimag.model';
import { DataProccessService } from 'src/app/services/data-proccess.service';

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
    "rtl": true
  }

  constructor(private dataFetch : DataProccessService) { }

  ngOnInit(): void {
    this.getHomeBanimag()
  }

  getHomeBanimag() {
    this.dataFetch.getHomeBanimag().subscribe((data) => {
      this.banimagArticles = data.data
    })
  }

}
