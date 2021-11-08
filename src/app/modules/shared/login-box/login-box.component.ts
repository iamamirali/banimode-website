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
  showPhoneSection : boolean = false;
  phoneError : string = ''
  isBtnClicked : boolean = false;

  constructor(private dataFetch : DataProccessService) { }

  ngOnInit(): void {
  }

  onBtnClick() {
    const phoneNumber = {
      phone: this.phoneInput
    }
    
    this.isBtnClicked = true
    if(this.phoneInput.length >= 11 && this.policyChecked) {
      this.dataFetch.sendPhoneNumber(phoneNumber).subscribe((data) => {
        this.showPhoneSection = false
        this.phoneError = ''
      }, (error) => {
        this.phoneError = error
      })
    }
  }

  onOtpChange(event:string) {
    console.log(event);
  }
}
