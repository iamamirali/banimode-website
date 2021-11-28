import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StateProccessService {
  loginSubject : Subject<boolean> = new Subject()

  setToken(token : string) {
    localStorage.setItem('token', token)
  }
  getToken(): string | null {
    return localStorage.getItem('token')
  }

  constructor() { }
}
