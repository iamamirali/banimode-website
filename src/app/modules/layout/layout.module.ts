import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { NavlinksComponent } from './header/navlinks/navlinks.component';



@NgModule({
  declarations: [
    HeaderComponent,
    NavlinksComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class LayoutModule { }
