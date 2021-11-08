import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginBoxComponent } from './login-box/login-box.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import {NgOtpInputModule} from 'ng-otp-input';



@NgModule({
  declarations: [
    LoginBoxComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    FormsModule,
    NgOtpInputModule
  ],
  exports: [
    LoginBoxComponent
  ]
})
export class SharedModule { }
