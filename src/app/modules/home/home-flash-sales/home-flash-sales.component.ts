import { Component, OnDestroy, OnInit, HostListener} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FlashDatum } from 'src/app/models/flash-sales.model';
@Component({
  selector: 'app-home-flash-sales',
  templateUrl: './home-flash-sales.component.html',
  styleUrls: ['./home-flash-sales.component.scss']
})
export class HomeFlashSalesComponent implements OnInit, OnDestroy {
  flashSales : FlashDatum[] = []
  productHover : boolean[] = []

  interval: any;
  hasTimeLeft : boolean = true
  timeLeft : number = 0
  time: string | undefined
  hour: number | undefined
  minute: number | undefined
  second: number | undefined
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
    lazyLoad: true,
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

  ngOnInit() {
    this.getFlashSales()
  }

  @HostListener('window:resize', ['$event']) onResize(event: any) {
    this.screenWidth = event.target.innerWidth;
    
  }

  getFlashSales() {
    const items = this.route.snapshot.data['homeResolver'].flashSales.data
    this.flashSales = items.data
    this.timeLeft = items.timer
    const countDownDate : number = new Date().getTime() + this.timeLeft;
    this.timeLeft ? this.hasTimeLeft = true : this.hasTimeLeft = false
    this.interval = setInterval(()=> {
      this.countDownTimer(countDownDate);
    }, 1000);
  }

  countDownTimer(countDownDate : number) {
    const now = new Date().getTime();
    const timeLeft = countDownDate - now;

    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
      
    this.time = hours  + ":" + minutes + ":" + seconds;
    this.hour = hours
    this.minute = minutes
    this.second = seconds
      
    if (timeLeft < 0) {
      clearInterval(this.interval);
      this.hasTimeLeft = false
      this.time = "EXPIRED";
    }
  }
  
  ngOnDestroy() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }
}
