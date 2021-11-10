import { Component, OnInit } from '@angular/core';
import { DataProccessService } from 'src/app/services/data-proccess.service';

@Component({
  selector: 'app-login-box',
  templateUrl: './login-box.component.html',
  styleUrls: ['./login-box.component.scss']
})
export class LoginBoxComponent implements OnInit {
  policyChecked : boolean = true;
  phoneInput : string = ''
  showPhoneSection : boolean = true;
  phoneError : string = ''
  isNextBtnClicked : boolean = false;

  totalTime : number = 120;
  verifTimer : string = '02 : 00'

  constructor(private dataFetch : DataProccessService) { }

  ngOnInit(): void {
  }

  onNextBtnClick() {
    const phoneNumber = {
      phone: this.phoneInput
    }
    
    this.isNextBtnClicked = true
    if(this.phoneInput.length >= 11 && this.policyChecked) {
      this.dataFetch.sendPhoneNumber(phoneNumber).subscribe((data) => {
        this.showPhoneSection = false
        this.phoneError = ''
        this.verifCodeTimer()
      }, (error) => {
        this.phoneError = error
      })
    }
  }

  onEditPhoneClick() {
    this.showPhoneSection = true
    this.phoneInput = ''
    this.isNextBtnClicked = false
  }

  onResendCodeClick() {
    const phoneNumber = {
      phone: this.phoneInput
    }
    
    this.dataFetch.sendPhoneNumber(phoneNumber).subscribe()
    console.log('hello');
    
  }

  verifCodeTimer() {
    let minute = '00';
    let second = '00';
    
    let timerInterval : NodeJS.Timeout = setInterval(() => {
      if(this.totalTime > 0) {
        this.totalTime--
        minute = `0${Math.floor(this.totalTime / 60)}`
        second = `${Math.floor(this.totalTime % 60)}`

        if(+second < 10) {
          second = `0${Math.floor(this.totalTime % 60)}`
        }
      } else {
        this.timerStopper(timerInterval)
      }
      this.verifTimer = `${minute} : ${second}`
      console.log('total time: ' + this.totalTime);
      console.log('min: ' + minute);
      console.log('sec: ' + Math.floor(this.totalTime % 60));
    },1000)
  }

  timerStopper(timer : NodeJS.Timeout) {
    clearInterval(timer)
  }

  onOtpChange(event:string) {
    console.log(event);
  }
}
