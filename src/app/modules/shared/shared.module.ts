import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginBoxComponent } from './login-box/login-box.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import {NgOtpInputModule} from 'ng-otp-input';
import { NotFoundComponent } from './not-found/not-found.component';



@NgModule({
  declarations: [
    LoginBoxComponent,
    NotFoundComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    FormsModule,
    RouterModule,
    NgOtpInputModule
  ],
  exports: [
    LoginBoxComponent
  ]
})
export class SharedModule { }
