import { Component, OnDestroy, OnInit } from '@angular/core';
import { DataProccessService } from 'src/app/services/data-proccess.service';

@Component({
  selector: 'app-home-flash-sales',
  templateUrl: './home-flash-sales.component.html',
  styleUrls: ['./home-flash-sales.component.scss']
})
export class HomeFlashSalesComponent implements OnInit, OnDestroy {
  interval: any;
  hasTimeLeft : boolean = true
  timeLeft : number = 0
  time: string | undefined
  hour: number | undefined
  minute: number | undefined
  second: number | undefined
  
  constructor(private fetchData : DataProccessService) { }

  ngOnInit() {
    this.getFlashSales()
  }

  
  getFlashSales() {
    this.fetchData.getFlashSales().subscribe((data)=> {
      console.log(data.data)
      
      this.timeLeft = data.data.timer
      const countDownDate : number = new Date().getTime() + this.timeLeft;

      this.timeLeft ? this.hasTimeLeft = true : this.hasTimeLeft = false

      this.interval = setInterval(()=> {
        this.countDownTimer(countDownDate);
      }, 1000);
    })
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
