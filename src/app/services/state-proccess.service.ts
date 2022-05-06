import { Injectable, HostListener } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StateProccessService {
  loginSubject : Subject<boolean> = new Subject()

  setToken(token : string) {
    localStorage.setItem('token', token)
  }
  getToken(): string | null {
    if(localStorage.getItem('token')) {
      this.loginSubject.next(true)
    }
    return localStorage.getItem('token')
  }
  deleteToken() {
    localStorage.removeItem("token")
  }
  constructor() { }
}
