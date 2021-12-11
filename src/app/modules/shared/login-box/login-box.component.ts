import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { delay } from 'rxjs/operators';
import { IPassword } from 'src/app/models/password.model';
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

  showPassSection : boolean = false
  password: string = ''
  showPassword: boolean = false
  rePassword: string = ''
  showRepassword: boolean = false
  passError : string = ''
  rePassError : string = ''

  showPassSuccessSection : boolean = false
  showPassLoginSection: boolean = false
  isOncePassClicked: boolean = false
  isResetPassClicked: boolean = false


  constructor(private dataFetch : DataProccessService, private stateService : StateProccessService,private dialogRef: MatDialogRef<LoginBoxComponent>) { }

  ngOnInit(): void {
  }

  closeDialog(){
    this.dialogRef.close();
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
        if(data.body.data.user.has_password) {
          this.showPassLoginSection = true
        } else {
          this.verifCodeTimer()
          this.showPassLoginSection = false
        }
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
    let phoneNumber = {
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
          if(this.isOncePassClicked) {
            this.closeDialog()
          } else if(this.isResetPassClicked) {
            this.stateService.loginSubject.next(true)
            this.showPassSection = true
          } else {
            this.verifError = ''
            this.timerStopper()
            this.showLoginSuccess = true
            this.stateService.loginSubject.next(true)
            this.stateService.setToken(data.body.data.token)
          }
        }
      }, (error) => {
        this.verifError = error
      }) 
    }
  }

  onSetPassClick() {
    this.showPassSection = true
    this.showLoginSuccess = false
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
      } else {
          const passwordData : IPassword = {
            password: this.password,
            password_confirmation: this.rePassword
          }
          this.passError = ''
          this.rePassError = ''
          this.dataFetch.sendPassword(passwordData).subscribe()
          this.showPassSection = false
          this.showPassSuccessSection = true
      }
    } 
    else if (this.password == '') {
      this.passError = 'پر کردن این فیلد الزامیست.'
      this.rePassError = 'کلمه عبور یکسان نمی باشد و حداقل باید ۶ کارکتر باشد.'
    }
  }

  onSendOnceClick() {
    this.isOncePassClicked = true
    this.showPassLoginSection = false
    let phoneNumber = {
      phone: this.phoneInput,
      flag: "login_with_otp"
    }
    this.totalTime = 120;
    this.dataFetch.sendPhoneNumber(phoneNumber).subscribe(() => {
      this.verifCodeTimer()
    })
  }

  onResetPassClick() {
    this.isResetPassClicked = true
    this.showPassLoginSection = false

    let phoneNumber = {
      phone: this.phoneInput,
      flag: "recovery_password"
    }
    this.totalTime = 120;
    this.dataFetch.sendPhoneNumber(phoneNumber).subscribe(() => {
      this.verifCodeTimer()
    })
  }
}
