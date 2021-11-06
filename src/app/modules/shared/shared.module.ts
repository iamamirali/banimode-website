import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginBoxComponent } from './login-box/login-box.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AngularMaterialModule } from '../angular-material/angular-material.module';



@NgModule({
  declarations: [
    LoginBoxComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    FormsModule
  ],
  exports: [
    LoginBoxComponent
  ]
})
export class SharedModule { }
