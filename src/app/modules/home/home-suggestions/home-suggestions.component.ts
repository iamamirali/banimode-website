import { Component, OnInit, HostListener } from '@angular/core';
import { SugessDatum } from 'src/app/models/suggestions.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home-suggestions',
  templateUrl: './home-suggestions.component.html',
  styleUrls: ['./home-suggestions.component.scss']
})
export class HomeSuggestionsComponent implements OnInit {

  suggestions : SugessDatum[] = []
  screenWidth: number = window.innerWidth

  bannerSlideConfig = {
    "slidesToShow": 4,
    "slidesToScroll": 2,
    "arrows": true,
    "nextArrow": '<div style=\'position: absolute; top: 45%; right: -10px; z-index: 10; cursor: pointer; font-size: 2.5rem;\' class=\'next-slide\'><i class="fa fa-angle-right" style=\'color: gray;\'></i></div>',
    "prevArrow": '<div style=\'position: absolute; top: 45%; left: -10px; z-index: 10; cursor: pointer; font-size: 2.5rem\' class=\'next-slide\'><i class="fa fa-angle-left" style=\'color: gray;\'></i></div>',
    "autoplay": true,
    "autoplaySpeed": 5000,
    "infinite": false,
    "rtl": true,
    "responsive": [
      {
        breakpoint: 480,
        settings: {
          "slidesToShow": 1,
          "slidesToScroll": 1,
          "nextArrow": '<div style=\'position: absolute; top: 35%; right: 18px; z-index: 10; cursor: pointer; font-size: 2.5rem;\' class=\'next-slide\'><i class="fa fa-angle-right" style=\'color: gray;\'></i></div>',
          "prevArrow": '<div style=\'position: absolute; top: 35%; left: 18px; z-index: 10; cursor: pointer; font-size: 2.5rem\' class=\'next-slide\'><i class="fa fa-angle-left" style=\'color: gray;\'></i></div>',
        }
      }
    ]
  }

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getSuggestions()
  }

  @HostListener('window:resize', ['$event']) onResize() {
    this.screenWidth = window.innerWidth;
  }

  getSuggestions() {
    this.suggestions = this.route.snapshot.data['homeResolver'].suggestions.data.data
  }

}
