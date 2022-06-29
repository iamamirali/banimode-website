import { Injectable } from '@angular/core';
import { CountDown } from '../models/class-models/countDown.model';

@Injectable({
  providedIn: 'root'
})
export class CountDownService extends CountDown {

  constructor() {
    super()
  }

  countdownTimer(countDownDate: number, interval: any, hasLeftTime: boolean) {
    this.now = new Date().getTime()
    this.timeLeft = countDownDate - this.now
    this.setTime()

    if (this.timeLeft < 0) {
      clearInterval(interval);
      hasLeftTime = false
    }
  }
}
