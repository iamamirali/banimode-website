import { Component, OnInit} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { StateProccessService } from 'src/app/services/state-proccess.service';
import { LoginBoxComponent } from '../../shared/login-box/login-box.component';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isLoggedin : boolean = false
  showHoverBox : boolean = false
  showClickBox : boolean = false
  showCartBox : boolean = false
  screenWidth: number = window.innerWidth
  showBurgerNavbar: boolean = false

  constructor(private dialog : MatDialog, private stateService : StateProccessService) { }
  @HostListener('window:resize', ['$event']) onResize() {
    this.screenWidth = window.innerWidth;
  }

  ngOnInit(): void {
    this.checkLogin()
  }

  checkLogin() {
    this.stateService.loginSubject.subscribe((status) => {
      this.isLoggedin = status
    })
  }

  openDialog() {
    this.dialog.open(LoginBoxComponent)
  }

  onBoxHover() {
    this.showHoverBox = true
  }
  onUserBoxClick() {
    this.showClickBox = !this.showClickBox
  }
  onCartClick() {
    this.showCartBox = !this.showCartBox
  }

  onBoxCloserClick() {
    this.showClickBox = false
    this.showCartBox = false
  }

  onLogoutClick() {
    this.stateService.loginSubject.next(false);
    this.stateService.deleteToken();
    this.showClickBox = false
    this.showCartBox = false
  }
}
