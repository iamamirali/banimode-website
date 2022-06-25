import { Component, OnDestroy, OnInit, HostListener} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FlashDatum } from 'src/app/models/flash-sales.model';
import { CountDownService } from 'src/app/services/countdown.service';
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
  hasLeftTime : boolean = true
  timeLeft : number = 0
  time: string | undefined
  hour: number | undefined
  minute: number | undefined
  second: number | undefined
  screenWidth: number = window.innerWidth

  flashSalesSlideConfig = new ProductSlider()
  
  constructor(private route: ActivatedRoute, public countDown: CountDownService) { }

  ngOnInit() {
    this.getFlashSales()
  }

  @HostListener('window:resize', ['$event']) onResize(event: any) {
    this.screenWidth = event.target.innerWidth;
    
  }

  getFlashSales() {
    const items = this.route.snapshot.data['homeResolver'].flashSales.data
    this.flashSales = items.data
    this.setFlashSalesTimer(items.timer)
  }
  
  setFlashSalesTimer(timer: number) {
    this.timeLeft = timer
    const countDownDate: number = new Date().getTime() + this.timeLeft;

    this.interval = setInterval(()=> {
      this.countDown.countdownTimer(countDownDate, this.interval, this.hasLeftTime);
      this.timerViewSetter()
    }, 1000);
  }
  
  timerViewSetter() {
    this.time = this.countDown.time
    this.hour = this.countDown.hour
    this.minute = this.countDown.minute
    this.second = this.countDown.second
  }

  ngOnDestroy() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }
}