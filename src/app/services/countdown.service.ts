import { Injectable } from '@angular/core';
import { CountDown } from '../models/class-models/countDown.model';

@Injectable({
  providedIn: 'root'
})
export class CountDownService {
  time: string | undefined
  hour: number | undefined
  minute: number | undefined
  second: number | undefined
  constructor() { }

  countdownTimer(countDownDate : number, interval: any, hasLeftTime: boolean) {
    let countDown = new CountDown()
    countDown.timeLeft = countDownDate - countDown.now
    countDown.setTime()
      
    this.time = countDown.hours  + ":" + countDown.minutes + ":" + countDown.seconds;
    this.hour = countDown.hours
    this.minute = countDown.minutes
    this.second = countDown.seconds

    if (countDown.timeLeft < 0) {
      clearInterval(interval);
      hasLeftTime = false
      this.time = "EXPIRED";
    }
  }
}
