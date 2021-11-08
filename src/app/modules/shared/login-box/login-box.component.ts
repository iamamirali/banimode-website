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

  // verifCodeTimer() {
  //   setInterval
  // }

  onOtpChange(event:string) {
    console.log(event);
  }
}
