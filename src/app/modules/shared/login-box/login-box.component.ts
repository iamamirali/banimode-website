import { Component, OnInit } from '@angular/core';
import { DataProccessService } from 'src/app/services/data-proccess.service';
import { StateProccessService } from 'src/app/services/state-proccess.service';

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

  timerInterval : NodeJS.Timeout | undefined
  totalTime : number = 120;
  verifTimer : string = '02 : 00'
  minute : string = '00';
  second : string = '00';
  verifError : string = ''
  showLoginSuccess : boolean = false

  showPassSection : boolean = true
  password: string = ''
  showPassword: boolean = false
  rePassword: string = ''
  showRepassword: boolean = false
  passError : string = ''
  rePassError : string = ''


  constructor(private dataFetch : DataProccessService, private stateService : StateProccessService) { }

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
    this.totalTime = 120
    this.timerStopper()
    this.verifTimer = '02 : 00'
    this.verifError = ''
  }

  onResendCodeClick() {
    const phoneNumber = {
      phone: this.phoneInput
    }
    this.totalTime = 120;
    
    this.dataFetch.sendPhoneNumber(phoneNumber).subscribe(() => {
      this.verifCodeTimer()
    })
  }

  verifCodeTimer() {
    this.timerInterval = setInterval(() => {
      if(this.totalTime > 0) {
        this.totalTime--
        this.minute = `0${Math.floor(this.totalTime / 60)}`
        this.second = `${Math.floor(this.totalTime % 60)}`

        if(+this.second < 10) {
          this.second = `0${Math.floor(this.totalTime % 60)}`
        }
      } else {
        this.timerStopper()
      }
      this.verifTimer = `${this.minute} : ${this.second}`
    },1000)
  }

  timerStopper() {
    if(this.timerInterval) {
      clearInterval(this.timerInterval)
    }
  }

  onVerifChange(event:string) {
    const verifData = {
      phone: this.phoneInput,
      token: event
    }
    
    if(event.length == 5) {
      this.dataFetch.sendVerifCode(verifData).subscribe((data) => {
        if(data.body.status == 'error') {
          this.verifError = data.body.message
        } else {
          console.log(data.body.data);
          this.verifError = ''
          this.timerStopper()
          this.showLoginSuccess = true
          this.stateService.loginSubject.next(true)
        }
      }, (error) => {
        this.verifError = error
      }) 
    }
  }

  onSetPassClick() {
    this.showPassSection = true
  }

  onPassSubmitClick() {
    if(this.password.length < 6 && this.password.length > 0) {
      this.passError = ''
      this.rePassError = 'کلمه عبور یکسان نمی باشد و حداقل باید ۶ کارکتر باشد.'
    } 
    else if(this.password.length >= 6) {
      if (this.password != this.rePassword) {
        this.passError = ''
        this.rePassError = 'کلمه عبور یکسان نمی باشد.'
      }
    } 
    else if (this.password == '') {
      this.passError = 'پر کردن این فیلد الزامیست.'
      this.rePassError = 'کلمه عبور یکسان نمی باشد و حداقل باید ۶ کارکتر باشد.'
    }
    console.log('Pass Error: ' + this.passError);
    console.log('RePass Error: ' + this.rePassError);
  }
}
