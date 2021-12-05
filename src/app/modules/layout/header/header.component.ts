import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { StateProccessService } from 'src/app/services/state-proccess.service';
import { LoginBoxComponent } from '../../shared/login-box/login-box.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isLoggedin : boolean = false
  showHoverBox : boolean = false
  showClickBox : boolean = false

  constructor(private dialog : MatDialog, private stateService : StateProccessService) { }

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
  onBoxClick() {
    this.showClickBox = !this.showClickBox
  }
}
