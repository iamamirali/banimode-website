import { Component, OnDestroy, OnInit, HostListener} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CountDown } from 'src/app/models/class-models/countDown.model';
import { FlashDatum } from 'src/app/models/flash-sales.model';
import { ProductSlider } from '../models/product-slider.model';
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

  flashSalesSlideConfig = new ProductSlider()
  
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
    this.interval = setInterval(()=> {
      this.countDownTimer(countDownDate);
    }, 1000);
  }

  countDownTimer(countDownDate : number) {
    let countDown = new CountDown()
    countDown.timeLeft = countDownDate - countDown.now
    countDown.setTime()
      
    this.time = countDown.hours  + ":" + countDown.minutes + ":" + countDown.seconds;
    this.hour = countDown.hours
    this.minute = countDown.minutes
    this.second = countDown.seconds

    if (countDown.timeLeft < 0) {
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